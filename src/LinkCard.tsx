import type { ReactNode } from 'react'
import styles from './LinkCard.module.css'

type LinkCardProps = {
  title: string
  description: string
  url?: string
  icon?: ReactNode
}

export default function LinkCard({ title, description, url, icon }: LinkCardProps) {
  const content = (
    <article className={styles.card}>
      {icon && <div className={styles.icon}>{icon}</div>}
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </article>
  )

  if (url) {
    return (
      <a href={url} target="_blank" rel="noopener noreferrer" className={styles.anchor}>
        {content}
      </a>
    )
  }

  return content
}
