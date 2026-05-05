import { useParams, Link } from 'react-router-dom'
import { useTitle } from './useTitle'
import { getPost } from './posts'
import styles from './Blog.module.css'

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const post = slug ? getPost(slug) : undefined

  useTitle(post?.meta.title ?? 'Not Found')

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
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
    </article>
  )
}
