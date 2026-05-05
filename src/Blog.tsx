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
      <p className={styles.blurb}>
        In 2025, I started a podcast about community and creativity titled{' '}
        <em>The Rest of the F***ing Owl</em>, showcasing the messy middle
        portion of every creative journey. Doing the first four episodes, it
        felt like 5% great conversations and 95% boring gruntwork, so I
        pivoted to posting (usually in writing) about whatever I'm
        learning&mdash;usually through making art, building with code, and/or
        growing a community. It's a lot more interesting now.
      </p>
      <a
        href="https://therestoftheowl.substack.com/subscribe"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.subscribe}
      >
        Subscribe on Substack ↗
      </a>
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
