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
        I build connective infrastructure that lets people and their tech do things
        together that they couldn't do alone.
      </p>
      <p className={styles.expansion}>
        I design bridges between people, technical systems,
        and disciplines that don't normally talk to each other. I've done this
        with immersive theater, software teams, and AI, creating the conditions
        for emergence at every scale.
      </p>
      <div className={styles.ctas}>
        <Link to="/projects" className={styles.primary}>See my work</Link>
        <Link to="/contact" className={styles.secondary}>Get in touch</Link>
      </div>
    </section>
  )
}
