interface PostMeta {
  title: string
  date: string
  description: string
}

export interface Post {
  slug: string
  meta: PostMeta
  content: string
}

const modules = import.meta.glob('./posts/*.md', { eager: true }) as Record<
  string,
  { meta: PostMeta; content: string }
>

export function getPosts(): Post[] {
  return Object.entries(modules)
    .map(([path, mod]) => ({
      slug: path.replace('./posts/', '').replace('.md', ''),
      meta: mod.meta,
      content: mod.content,
    }))
    .sort((a, b) => (b.meta.date > a.meta.date ? 1 : -1))
}

export function getPost(slug: string): Post | undefined {
  return getPosts().find((p) => p.slug === slug)
}
