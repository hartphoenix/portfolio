import { useTitle } from './useTitle'
import styles from './Resume.module.css'

export default function Resume() {
  useTitle('Resume')

  return (
    <section className={styles.resume}>
      <div className={styles.toolbar}>
        <h1>resume</h1>
        <a
          href="/hart-resume.pdf"
          className={styles.download}
          download="hart-resume.pdf"
        >
          Download PDF
        </a>
      </div>

      <article className={styles.page}>
        <div className={styles.header}>
          <h2 className={styles.name}>Robert Hart</h2>
          <p className={styles.contact}>
            <a href="mailto:rhhart@gmail.com">rhhart@gmail.com</a>
            <span className={styles.sep}> · </span>
            <a href="https://hartphoenix.com">hartphoenix.com</a>
            <span className={styles.sep}> · </span>
            <a href="https://github.com/hartphoenix">github.com/hartphoenix</a>
            <span className={styles.sep}> · </span>
            <a href="https://linkedin.com/in/rhhart">linkedin.com/in/rhhart</a>
          </p>
          <p className={styles.tagline}>
            <strong>AI-native full-stack engineer</strong> designing systems
            that connect people and technology. 15 years of integration work
            as educator, researcher, and live experience designer — now
            building software where these domains converge.
          </p>
        </div>

        <section className={styles.entry}>
          <h3>Software Engineering Fellow — Fractal Tech, NYC</h3>
          <p className={styles.meta}>
            Feb 2026 – Present · Full-time fellowship (700+ hours; six-day weeks)
          </p>
          <ul>
            <li>
              Ship full-stack web applications (React, TypeScript, Express,
              MongoDB) in rapid sprint cycles
            </li>
            <li>
              Lead systems integration on a 4-person team: designed
              coordination process (kanban automation, dependency filtering,
              priority sorting & QA) that more than doubled team productivity
              on a week-long game build
            </li>
            <li>
              Architect real-time multiplayer systems using WebSocket
              broadcast patterns and server-authoritative state
            </li>
            <li>
              Build and operate multi-agent AI workflows: parallel dispatch,
              phase-sequenced builds, handoff protocols, memory management,
              and context engineering via custom agent skills
            </li>
          </ul>
        </section>

        <section className={styles.entry}>
          <h3>AI Engineering Intern — Stage 11 Agentics, NYC</h3>
          <p className={styles.meta}>
            Apr 2026 · Two-week sprint via Fractal Tech fellowship
          </p>
          <ul>
            <li>
              Contributed to an AI-related project at an early-stage startup;
              worked directly with the founder, shipping production code
              through daily-review, weekly-delivery cycles
            </li>
            <li>
              Owned full delivery cycle on assigned features: implementation,
              code-review response, deployment to production, QA, and
              onboarding documentation enabling teammates to run the system
              from a clean install
            </li>
          </ul>
        </section>

        <section className={styles.entry}>
          <h3>Freelance Vocal Coach &amp; Creativity Coach</h3>
          <p className={styles.meta}>2023 – 2026 · NYC</p>
          <ul>
            <li>
              Designed individualized developmental programs for 30+ clients,
              specializing in stage fright intervention and embodied
              self-awareness
            </li>
            <li>
              Built pedagogical frameworks grounded in developmental
              psychology (Kegan, Piaget) that directly inform the scaffolding
              logic of Weft, a developmental AI tutoring platform
            </li>
          </ul>
        </section>

        <section className={styles.entry}>
          <h3>Lead Researcher — DesignIntelligence</h3>
          <p className={styles.meta}>2020 – 2021 · Atlanta/Remote</p>
          <ul>
            <li>
              Led research teams producing long-form strategic reports for
              C-suite leaders in architecture, engineering, and construction
            </li>
            <li>
              Synthesized complex systems-level analysis (healthcare
              demographics, pandemic economics, industry forecasting) for
              stakeholders operating at multiple levels of abstraction
            </li>
          </ul>
        </section>

        <section className={styles.entry}>
          <h3>Immersive Theater Designer &amp; Director</h3>
          <p className={styles.meta}>2024 – 2025 · NYC</p>
          <ul>
            <li>
              Created and directed live branching-narrative experiences for
              up to 75 simultaneous participants across multiple venues,
              coordinating 26 characters with interlocking storylines, live
              improv, and audience-driven plot outcomes
            </li>
            <li>
              Co-designed real-time state management systems tracking player
              and faction status throughout 5-hour productions
            </li>
          </ul>
        </section>

        <h4 className={styles.sectionLabel}>Projects</h4>

        <section className={styles.entry}>
          <h3>
            Weft — Developmental AI Tutoring Platform
            <span className={styles.stack}>
              {' '}
              | TypeScript · Claude Code Skills · Multi-agent orchestration
            </span>
          </h3>
          <ul>
            <li>
              Designed and built a developmental AI tutoring system with 10+
              agent skills encoding pedagogical logic: gap-type
              classification, learner state tracking, intervention matching,
              and spaced review
            </li>
            <li>
              Architected multi-agent orchestration with parallel dispatch,
              phase sequencing, and handoff protocols; system routes around
              its own blind spots to preserve human teacher authority
            </li>
          </ul>
        </section>

        <section className={styles.entry}>
          <h3>
            The Schelling Point — Real-Time Multiplayer Game
            <span className={styles.stack}>
              {' '}
              | React · TypeScript · Express · WebSocket · Embedding
            </span>
          </h3>
          <ul>
            <li>
              Built a cooperative multiplayer game where 20+ players converge
              on shared words using embedding-space centroids as the scoring
              engine
            </li>
            <li>
              Redesigned game mechanics overnight (centroid-based convergence
              scoring) and shipped a working demo to 20 live players; first
              group won the game together
            </li>
          </ul>
        </section>

        <section className={styles.skills}>
          <p>
            <strong>Languages &amp; Frontend:</strong> TypeScript,
            JavaScript, React, HTML, CSS
          </p>
          <p>
            <strong>Backend &amp; Data:</strong> Node.js, Express, WebSocket,
            MongoDB, PostgreSQL, SQLite, REST API design
          </p>
          <p>
            <strong>AI &amp; Tooling:</strong> Claude Code, multi-agent
            orchestration, context engineering, Git, Vite, Vitest
          </p>
        </section>

        <p className={styles.education}>
          <strong>Education: University of Georgia</strong> — BA, English
          Literature &amp; Music Business
        </p>
      </article>
    </section>
  )
}
