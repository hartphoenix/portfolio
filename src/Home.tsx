import { Link } from 'react-router-dom'
import { useTitle } from './useTitle'
import styles from './Home.module.css'

export default function Home() {
  useTitle()

  return (
    <section className={styles.hero}>
      <div className={styles.glow} />
      <img src="/pfp.jpeg" alt="Hart the Phoenix" className={styles.avatar} />
      <h1 className={styles.name}><span className={styles.accent}>hart</span> the phoenix</h1>
      <p className={styles.pitch}>
        I embed with teams to build, deploy, and teach the technology that unlocks
        what they can create together.
      </p>
      <p className={styles.expansion}>
        In 2026 I shipped a 20-player real-time game, an AI prototype
        for a startup client, and a multi-agent tutoring platform. If your
        hardest problem is connecting systems, teams, and tools, let's talk.
      </p>
      <div className={styles.ctas}>
        <Link to="/projects" className={styles.primary}>See my work</Link>
        <Link to="/contact" className={styles.secondary}>Get in touch</Link>
      </div>
    </section>
  )
}
