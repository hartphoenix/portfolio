import { useTitle } from './useTitle'
import styles from './About.module.css'

export default function About() {
  useTitle('About')

  return (
    <section className={styles.about}>
      <div className={styles.header}>
        <img src="/hart-square.jpg" alt="Hart Phoenix" className={styles.avatar} />
        <div>
          <h1>about</h1>
        </div>
      </div>

      <div className={styles.bio}>
        <p>
          Across every domain I've worked in — software teams, AI systems, music,
          immersive theater design, academic tutoring, architecture journalism —
          there's one common thread I continue to follow: <b>integration</b>.
        </p>
        <p>
          It starts with observation: survey the full complexity of the situation,
          the people, and technical constraints. Next, identify where integration
          is failing or missing, and design a system that enables the parts to cohere.
        </p>
        <p>
          <b>With immersive theater</b>, that meant coordinating 26 actors and 70
          participants in a live branching narrative — designing for
          improvisation while performing within the system I was
          directing. <b>With software</b>, it meant leading a 4-person team's
          coordination and designing workflows that doubled our
          output, shipping a 20-player real-time game in under a week. <b>With AI</b>,
          it means building a developmental tutoring system that tracks how
          people learn, matches interventions to their actual needs, and
          compounds the value of human teachers rather than replacing them.
        </p>
        <p>
          I'm looking for early-stage teams working at the intersection of human
          development and technology, where the integration problems are hard and
          the mission is worthwhile.
        </p>
      </div>
    </section>
  )
}
