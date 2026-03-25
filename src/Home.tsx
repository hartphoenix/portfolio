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
        I just shipped a 20-player real-time
        game, and now I'm building an AI platform that diagnoses how people learn.
      </p>
      <p className={styles.expansion}>
        I design bridges between people, technical systems,
        and disciplines that don't normally talk to each other. I've done this
        with immersive theater, software teams, and AI systems, creating the conditions
        for emergence at every scale.
      </p>
      <div className={styles.ctas}>
        <Link to="/projects" className={styles.primary}>See my work</Link>
        <Link to="/contact" className={styles.secondary}>Get in touch</Link>
      </div>
    </section>
  )
}
