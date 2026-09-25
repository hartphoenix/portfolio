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
        I teach teams to teach themselves — starting with AI.
      </p>
      <p className={styles.expansion}>
        AI will keep accelerating like a rocket, so I teach people to harness
        and ride it. I work alongside your people until they can do what I do:
        pick up new tools, figure out what they're good for, and teach each other.
      </p>
      <p className={styles.expansion}>
        Recently: Tether, a tool that helps you manage attention — your agents'
        and your own; Weft, a tutoring system that tracks how each learner
        develops and adapts to them; and a merged contribution to Plastic Labs'
        agent memory system, Honcho.
      </p>
      <div className={styles.ctas}>
        <Link to="/projects" className={styles.primary}>See my work</Link>
        <Link to="/contact" className={styles.secondary}>Get in touch</Link>
      </div>
    </section>
  )
}
