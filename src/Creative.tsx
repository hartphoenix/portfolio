import { creativeItems } from './data'
import { useTitle } from './useTitle'
import LinkCard from './LinkCard'
import CreativeIcon from './CreativeIcon'
import styles from './Creative.module.css'

export default function Creative() {
  useTitle('Creative')

  return (
    <section>
      <h1>creative</h1>
      <p className={styles.intro}>
        Some of the domains where my integrative process has developed:
      </p>
      <div className={styles.grid}>
        {creativeItems.map((item) => (
          <LinkCard
            key={item.domain}
            title={item.title}
            description={item.description}
            url={item.url}
            icon={<CreativeIcon domain={item.domain} size={32} />}
          />
        ))}
      </div>
    </section>
  )
}
