import data from './posts.generated.json'

export interface PostMeta {
  title: string
  date: string
  description: string
  link: string
}

export interface Post {
  slug: string
  meta: PostMeta
  contentHtml: string
}

const posts = data as Post[]

export function getPosts(): Post[] {
  return posts
}

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug)
}
