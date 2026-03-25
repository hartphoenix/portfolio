import { useTitle } from './useTitle'
import styles from './Contact.module.css'

const EMAIL = 'rhhart@gmail.com'

export default function Contact() {
  useTitle('Contact')

  return (
    <section className={styles.contact}>
      <h1>get in touch</h1>
      <p className={styles.text}>
        I'm looking for
        early-stage teams at the intersection of human development and
        technology — especially technology that learns. I
        thrive in fast-paced environments with high independence, honest
        feedback, and curious collaborators.
      </p>
      {EMAIL ? (
        <a href={`mailto:${EMAIL}`} className={styles.button}>
          Send me an email
        </a>
      ) : (
        <p className={styles.placeholder}>Email coming soon.</p>
      )}
    </section>
  )
}
