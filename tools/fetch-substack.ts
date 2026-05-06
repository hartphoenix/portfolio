import { writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { XMLParser } from 'fast-xml-parser'
import { parse as parseHtml } from 'node-html-parser'

const FEED_URL = 'https://therestoftheowl.substack.com/feed'
const OUT_PATH = resolve(import.meta.dirname, '..', 'src', 'posts.generated.json')
const TIMEOUT_MS = 15_000

const STRIP_SELECTORS = [
  '.subscription-widget-wrap',
  '.subscription-widget',
  '.subscribe-widget',
  '.button-wrapper',
  '.share',
  '.share-dialog',
  '.preamble',
  '.image-link-expand',
  '[data-component-name="SubscribeWidget"]',
  '[data-component-name="ButtonCreateButton"]',
  '[data-component-name="DigestPostEmbedComponent"]',
]

type RssField = string | { '#text'?: string; __cdata?: string } | undefined

interface RssItem {
  title?: RssField
  link?: RssField
  pubDate?: RssField
  description?: RssField
  encoded?: RssField
  guid?: RssField
}

function asString(v: RssField): string | undefined {
  if (v == null) return undefined
  if (typeof v === 'string') return v
  if (typeof v === 'object') {
    if (typeof v.__cdata === 'string') return v.__cdata
    if (typeof v['#text'] === 'string') return v['#text']
  }
  return undefined
}

interface Post {
  slug: string
  meta: { title: string; date: string; description: string; link: string }
  contentHtml: string
}

function fail(msg: string, err?: unknown): never {
  console.error(`[fetch-substack] ${msg}`)
  if (err) console.error(err)
  process.exit(1)
}

async function fetchFeed(url: string): Promise<string> {
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS)
  try {
    const res = await fetch(url, {
      signal: controller.signal,
      headers: {
        'User-Agent':
          'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
        'Accept': 'application/rss+xml, application/xml;q=0.9, text/html;q=0.8, */*;q=0.5',
        'Accept-Language': 'en-US,en;q=0.9',
      },
    })
    if (!res.ok) fail(`Feed fetch returned ${res.status} ${res.statusText}`)
    return await res.text()
  } catch (err) {
    fail(`Feed fetch failed for ${url}`, err)
  } finally {
    clearTimeout(timer)
  }
}

function stripHtmlTags(s: string): string {
  return s.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim()
}

function slugFromLink(link: string): string {
  const m = link.match(/\/p\/([^/?#]+)/)
  if (!m) fail(`Cannot extract slug from link: ${link}`)
  return m[1]
}

function cleanHtml(html: string): string {
  const root = parseHtml(html)
  for (const sel of STRIP_SELECTORS) {
    for (const el of root.querySelectorAll(sel)) el.remove()
  }
  for (const a of root.querySelectorAll('a')) {
    const href = a.getAttribute('href') ?? ''
    if (href.startsWith('#') || href === '') continue
    a.setAttribute('target', '_blank')
    a.setAttribute('rel', 'noopener noreferrer')
  }
  return root.toString()
}

function toPost(item: RssItem): Post | null {
  const title = asString(item.title)?.trim()
  const link = asString(item.link)?.trim()
  const pubDate = asString(item.pubDate)?.trim()
  const encoded = asString(item.encoded)
  const description = asString(item.description)
  if (!title || !link || !pubDate) {
    console.warn(`[fetch-substack] Skipping item missing title/link/pubDate: ${title ?? link ?? '?'}`)
    return null
  }
  if (!encoded) {
    console.warn(`[fetch-substack] Skipping item without content:encoded: ${title}`)
    return null
  }
  const date = new Date(pubDate)
  if (isNaN(date.getTime())) {
    console.warn(`[fetch-substack] Skipping item with bad pubDate: ${title}`)
    return null
  }
  return {
    slug: slugFromLink(link),
    meta: {
      title,
      date: date.toISOString().slice(0, 10),
      description: description ? stripHtmlTags(description) : '',
      link,
    },
    contentHtml: cleanHtml(encoded),
  }
}

async function main() {
  const xml = await fetchFeed(FEED_URL)

  const parser = new XMLParser({
    ignoreAttributes: false,
    removeNSPrefix: true,
    cdataPropName: '__cdata',
    textNodeName: '#text',
  })

  let parsed: unknown
  try {
    parsed = parser.parse(xml)
  } catch (err) {
    fail('XML parse failed', err)
  }

  const channel = (parsed as { rss?: { channel?: { item?: RssItem | RssItem[] } } })?.rss?.channel
  if (!channel) fail('Feed has no <rss><channel> element')
  const rawItems = channel.item
  const items: RssItem[] = Array.isArray(rawItems) ? rawItems : rawItems ? [rawItems] : []
  if (items.length === 0) fail('Feed contains no <item> elements')

  const posts = items
    .map(toPost)
    .filter((p): p is Post => p !== null)
    .sort((a, b) => (b.meta.date > a.meta.date ? 1 : -1))

  const slugs = new Set<string>()
  for (const p of posts) {
    if (slugs.has(p.slug)) fail(`Duplicate slug: ${p.slug}`)
    slugs.add(p.slug)
  }

  writeFileSync(OUT_PATH, JSON.stringify(posts, null, 2) + '\n')
  console.log(`[fetch-substack] Wrote ${posts.length} posts to ${OUT_PATH}`)
}

main()
