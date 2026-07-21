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
        I'm looking to join a team building technology that makes people more
        creative and capable, in a role where I can work closely with those I'm
        building for. I do my best work with full independence, high standards,
        and direct feedback.
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
