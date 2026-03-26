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
        I use technology and communication to integrate human and technical systems,
        amplifying their collective intelligence.
      </p>
      <p className={styles.expansion}>
        I just shipped a 20-player cooperative real-time game, and now I'm building
        an AI platform for human self-development.
      </p>
      <div className={styles.ctas}>
        <Link to="/projects" className={styles.primary}>See my work</Link>
        <Link to="/contact" className={styles.secondary}>Get in touch</Link>
      </div>
    </section>
  )
}
