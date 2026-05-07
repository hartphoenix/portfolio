import { useEffect, useRef, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useTitle } from './useTitle'
import { getPost } from './posts'
import Lightbox from './Lightbox'
import styles from './Blog.module.css'

function pickHighestSrc(img: HTMLImageElement): string {
  const srcset = img.getAttribute('srcset')
  if (srcset) {
    const candidates = srcset
      .split(/,\s+/)
      .map((entry) => entry.trim())
      .filter(Boolean)
      .map((entry) => {
        const idx = entry.lastIndexOf(' ')
        const url = idx === -1 ? entry : entry.slice(0, idx).trim()
        const descriptor = idx === -1 ? '' : entry.slice(idx + 1).trim()
        const width = descriptor.endsWith('w') ? parseInt(descriptor, 10) : 0
        return { url, width: Number.isFinite(width) ? width : 0 }
      })
      .filter((c) => c.url)
    if (candidates.length > 0) {
      candidates.sort((a, b) => b.width - a.width)
      return candidates[0].url
    }
  }
  return img.getAttribute('src') || img.currentSrc || img.src
}

function markIfZoomable(img: HTMLImageElement): void {
  if (!img.complete || img.naturalWidth === 0) return
  const isZoomable = img.naturalWidth > img.clientWidth + 1
  if (isZoomable) {
    img.setAttribute('data-zoomable', 'true')
  } else {
    img.removeAttribute('data-zoomable')
  }
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const post = slug ? getPost(slug) : undefined
  const contentRef = useRef<HTMLDivElement>(null)
  const [zoomedSrc, setZoomedSrc] = useState<string | null>(null)

  useTitle(post?.meta.title ?? 'Not Found')

  useEffect(() => {
    const container = contentRef.current
    if (!container) return

    const images = Array.from(container.querySelectorAll('img'))
    const loadCleanups: Array<() => void> = []

    for (const img of images) {
      if (img.complete) {
        markIfZoomable(img)
      } else {
        const onLoad = () => markIfZoomable(img)
        img.addEventListener('load', onLoad)
        loadCleanups.push(() => img.removeEventListener('load', onLoad))
      }
    }

    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null
      if (!target) return
      const img = target.closest('img[data-zoomable="true"]') as HTMLImageElement | null
      if (!img) return
      e.preventDefault()
      setZoomedSrc(pickHighestSrc(img))
    }
    container.addEventListener('click', onClick)

    let resizeFrame = 0
    const onResize = () => {
      cancelAnimationFrame(resizeFrame)
      resizeFrame = requestAnimationFrame(() => {
        for (const img of images) markIfZoomable(img)
      })
    }
    window.addEventListener('resize', onResize)

    return () => {
      for (const cleanup of loadCleanups) cleanup()
      container.removeEventListener('click', onClick)
      window.removeEventListener('resize', onResize)
      cancelAnimationFrame(resizeFrame)
    }
  }, [post?.contentHtml])

  if (!post) {
    return (
      <section>
        <h1>post not found</h1>
        <Link to="/blog">back to blog</Link>
      </section>
    )
  }

  return (
    <article className={styles.article}>
      <Link to="/blog" className={styles.back}>
        &larr; blog
      </Link>
      <header>
        <time className={styles.date}>{post.meta.date}</time>
        <h1>{post.meta.title}</h1>
        {post.meta.description && (
          <p className={styles.leadDescription}>{post.meta.description}</p>
        )}
        <a
          href={post.meta.link}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.substackLink}
        >
          View on Substack ↗
        </a>
      </header>
      <div
        ref={contentRef}
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
      <Lightbox src={zoomedSrc} onClose={() => setZoomedSrc(null)} />
    </article>
  )
}
