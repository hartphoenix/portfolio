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
          a 20-player real-time game in under a week. <b>Working directly with a
          startup founder</b>, it meant turning an open-ended brief into a shipped,
          investor-facing prototype in two weeks, under real cost constraints.
          <b>With AI</b>, it means building
          a developmental tutoring system that tracks how people learn, matches interventions
          to their actual needs, and compounds the value of human teachers rather than replacing them.
        </p>
        <p>
          In every domain, it starts with observation: survey the full complexity of the situation,
          the people, and technical constraints. Next, identify where integration
          is failing or missing, and design a system that enables the parts to cohere.
        </p>
        <p>
          I'm looking to join a team building tech that makes people more creative
          and capable. My lifelong mission is to amplify human development for
          individuals and collectives. I diagnose what's blocking the system's
          potential and build what unleashes it.
        </p>
        <div className={styles.ctas}>
          <Link to="/projects" className={styles.primary}>See my work</Link>
          <Link to="/contact" className={styles.secondary}>Get in touch</Link>
        </div>
      </div>
    </section>
  )
}
