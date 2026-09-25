import { useTitle } from './useTitle'
import styles from './About.module.css'
import { Link } from 'react-router-dom'

export default function About() {
  useTitle('About')

  return (
    <section className={styles.about}>
      <h1>about</h1>

      <div className={styles.bio}>
        <img src="/hart-square.jpg" alt="Hart Phoenix" className={styles.avatar} />
        <p>
          Across every domain I've worked in – software teams, AI systems, music,
          immersive theater design, academic tutoring, research-based journalism –
          there's one common thread I continue to follow: <b>integration</b>.
        </p>
        <p>
          <b>With immersive theater</b>, that meant coordinating 26 actors and 70
          participants in a live branching narrative, structuring for
          coherence while allowing for improv. <b>Leading a four-person engineering
          team</b>, it meant designing the workflows that synchronized our
          efforts, cut the thrashing, and doubled our output; we ended up shipping
          a 20-player real-time game in under a week. <b>With AI</b>, it means building
          Tether, a tool that helps people manage attention — their agents' and their
          own — so they keep their judgment while agents do the work.
        </p>
        <p>
          In every domain, it starts with observation. The people doing the work
          usually know where it's stuck; I start by asking them and listening. Then
          I survey the technical constraints, identify where integration is failing
          or missing, and design a system that enables the parts to cohere.
        </p>
        <p>
          I teach people to teach themselves, and I build systems (human,
          organizational, technical) that do the same. My measure of success is
          what keeps growing after I leave.
        </p>
        <div className={styles.ctas}>
          <Link to="/projects" className={styles.primary}>See my work</Link>
          <Link to="/contact" className={styles.secondary}>Get in touch</Link>
        </div>
      </div>
    </section>
  )
}
