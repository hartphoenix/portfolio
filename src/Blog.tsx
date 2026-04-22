import { Link } from 'react-router-dom'
import { useTitle } from './useTitle'
import { getPosts } from './posts'
import styles from './Blog.module.css'

export default function Blog() {
  useTitle('Blog')
  const posts = getPosts()

  return (
    <section>
      <h1>blog</h1>
      {posts.length === 0 ? (
        <p>Nothing here yet. Check back soon.</p>
      ) : (
        <div className={styles.posts}>
          {posts.map((post) => (
            <article key={post.slug} className={styles.postCard}>
              <Link to={`/blog/${post.slug}`} className={styles.postLink}>
                <time className={styles.date}>{post.meta.date}</time>
                <h2>{post.meta.title}</h2>
                {post.meta.description && (
                  <p className={styles.description}>{post.meta.description}</p>
                )}
              </Link>
            </article>
          ))}
        </div>
      )}
    </section>
  )
}
