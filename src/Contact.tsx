import { socialLinks } from './data'
import { useTitle } from './useTitle'
import LinkCard from './LinkCard'
import SocialIcon from './SocialIcon'
import styles from './Contact.module.css'

const EMAIL = 'rhhart@gmail.com'

export default function Contact() {
  useTitle('Contact')

  return (
    <section className={styles.contact}>
      <h1>get in touch</h1>
      <p className={styles.text}>
        I equip your team to keep getting better: better informed, better
        prepared, and better connected to each other. I work in bounded
        engagements: a short diagnostic, one intervention with a result you can
        observe, and a handoff your team can run.
      </p>
      <div className={styles.grid}>
        <LinkCard
          title="Email"
          description={EMAIL}
          url={`mailto:${EMAIL}`}
          icon={<SocialIcon platform="Email" size={32} />}
        />
        {socialLinks.filter((link) => link.url).map((link) => (
          <LinkCard
            key={link.platform}
            title={link.platform}
            description={link.handle ? `@${link.handle}` : link.url}
            url={link.url}
            icon={<SocialIcon platform={link.platform} size={32} />}
          />
        ))}
      </div>
    </section>
  )
}
