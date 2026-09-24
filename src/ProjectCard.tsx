import type { Project } from './data'
import styles from './ProjectCard.module.css'

export default function ProjectCard({ title, tagline, description, tags, year, liveUrl, codeUrl, accentColor, bannerUrl, bannerBg, demoUrl, tweetUrl }: Project) {
  const headerLink = liveUrl || codeUrl
  const bannerStyle = bannerBg ? { backgroundColor: bannerBg, objectFit: 'contain', padding: '20px 0' } as const : undefined

  return (
    <article
      className={styles.card}
      style={{ '--card-accent': accentColor } as React.CSSProperties}
    >
      {bannerUrl ? (
        headerLink ? (
          <a href={headerLink} target="_blank" rel="noopener noreferrer">
            <img src={bannerUrl} alt="" className={styles.banner} style={bannerStyle} />
          </a>
        ) : (
          <img src={bannerUrl} alt="" className={styles.banner} style={bannerStyle} />
        )
      ) : (
        <div className={styles.preview} />
      )}
      <div className={styles.body}>
        <h3 className={styles.title}>
          {headerLink ? (
            <a href={headerLink} target="_blank" rel="noopener noreferrer" className={styles.titleLink}>
              {title}
            </a>
          ) : (
            title
          )}
          {year && <span className={styles.year}>{year}</span>}
        </h3>
        <p className={styles.tagline}>{tagline}</p>
        <p className={styles.description}>{description}</p>
        <div className={styles.tags}>
          {tags.map((tag) => (
            <span key={tag} className={styles.tag}>{tag}</span>
          ))}
        </div>
        {(liveUrl || codeUrl || demoUrl || tweetUrl) && (
          <div className={styles.links}>
            {liveUrl && (
              <a href={liveUrl} target="_blank" rel="noopener noreferrer" className={styles.link}>
                Live Demo
              </a>
            )}
            {demoUrl && (
              <a href={demoUrl} target="_blank" rel="noopener noreferrer" className={styles.link}>
                Recorded Demo
              </a>
            )}
            {codeUrl && (
              <a href={codeUrl} target="_blank" rel="noopener noreferrer" className={styles.link}>
                Source Code
              </a>
            )}
            {tweetUrl && (
              <a href={tweetUrl} target="_blank" rel="noopener noreferrer" className={styles.link}>
                Release Tweet
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  )
}
