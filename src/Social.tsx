import { socialLinks } from './data'
import { useTitle } from './useTitle'
import LinkCard from './LinkCard'
import SocialIcon from './SocialIcon'
import styles from './Social.module.css'

export default function Social() {
  useTitle('Social')

  const activeLinks = socialLinks.filter((link) => link.url)

  return (
    <section>
      <h1>social</h1>
      {activeLinks.length > 0 ? (
        <div className={styles.grid}>
          {activeLinks.map((link) => (
            <LinkCard
              key={link.platform}
              title={link.platform}
              description={link.handle ? `@${link.handle}` : link.url}
              url={link.url}
              icon={<SocialIcon platform={link.platform} size={32} />}
            />
          ))}
        </div>
      ) : (
        <p>Links coming soon.</p>
      )}
    </section>
  )
}
