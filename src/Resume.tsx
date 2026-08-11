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
            <strong>AI-native full-stack engineer</strong> — shipped a
            20-player real-time multiplayer game, an AI prototype for a
            startup client, and a multi-agent tutoring platform, all in
            2026. 15 years of client-facing work in coaching, research,
            and creative direction.
          </p>
        </div>

        <section className={styles.entry}>
          <h3>Software Engineering Fellow — Fractal Tech, NYC</h3>
          <p className={styles.meta}>
            Feb – May 2026 · Full-time fellowship (700+ hours; six-day weeks)
          </p>
          <ul>
            <li>
              Shipped full-stack and real-time multiplayer web apps in rapid
              sprint cycles (React, TypeScript, Express, MongoDB; WebSocket
              broadcast patterns with server-authoritative state) — deployed
              to Render, one containerized with Docker
            </li>
            <li>
              Led systems integration on a 4-person team: diagnosed central
              coordination failure, then designed shared workflows that more
              than doubled team output on a week-long game build
            </li>
            <li>
              Built and tuned multi-agent AI workflows: parallel dispatch,
              phase-sequenced builds, handoff protocols, context engineering
            </li>
          </ul>
        </section>

        <section className={styles.entry}>
          <h3>AI Engineering Intern — Stage 11 Agentics, NYC</h3>
          <p className={styles.meta}>
            Apr 2026 · Two-week engagement, working directly with the founder
          </p>
          <ul>
            <li>
              Shaped an open-ended brief into a focused deliverable;{' '}
              <strong>shipped a working prototype in two weeks</strong>,
              under cost constraints
            </li>
            <li>
              Owned the full delivery cycle: implementation, code-review
              response, production deploys, QA, and onboarding docs
            </li>
          </ul>
        </section>

        <section className={styles.entry}>
          <h3>Webmaster (retainer) — MacAvoy Foundation</h3>
          <p className={styles.meta}>May 2026 – Present · Part-time</p>
          <ul>
            <li>
              Sole technical steward for the nonprofit&apos;s web presence:
              on call for issues and changes, advising non-technical
              leadership
            </li>
          </ul>
        </section>

        <section className={styles.entry}>
          <h3>Immersive Theater Designer &amp; Director</h3>
          <p className={styles.meta}>2024 – Present · NYC</p>
          <ul>
            <li>
              Directed teams of 4–26 performers in live branching-narrative
              productions for up to 75 simultaneous participants —
              interlocking storylines, live improv, audience-driven
              outcomes; new productions in development
            </li>
            <li>
              Co-designed the real-time state management systems tracking
              player and faction status across 5-hour productions
            </li>
          </ul>
        </section>

        <section className={styles.entry}>
          <h3>Freelance Vocal Coach &amp; Creativity Coach</h3>
          <p className={styles.meta}>2023 – Present · NYC</p>
          <ul>
            <li>
              Run own client practice (30+ clients): find real needs, then
              design individualized developmental programs — specializing
              in stage-fright intervention and embodied self-awareness
            </li>
            <li>
              Built pedagogical frameworks grounded in developmental
              psychology (Kegan, Piaget) that now drive Weft&apos;s
              scaffolding logic
            </li>
          </ul>
        </section>

        <section className={styles.entry}>
          <h3>Lead Researcher — DesignIntelligence</h3>
          <p className={styles.meta}>2020 – 2021 · Atlanta/Remote</p>
          <ul>
            <li>
              Owned the research-to-publication pipeline for strategic
              reports advising C-suite leaders in architecture, engineering,
              and construction: primary research (interviews and surveys
              with dozens of industry professionals), quantitative analysis
              (healthcare economics, demographics, market forecasting), and
              all writing — delivered on fixed 60–90-day cycles
            </li>
            <li>
              Designed the firm&apos;s research methodology and each
              report&apos;s evaluative frameworks, reconciling conflicting
              sources into{' '}
              <strong>decision-grade guidance for non-technical executives</strong>
            </li>
            <li>
              Built out a nascent research department: recruited and vetted
              researcher candidates, hired one, and trained and mentored
              two — editing their reports and developing their projects from
              initial question to published deliverable
            </li>
          </ul>
        </section>

        <section className={styles.entry}>
          <h3>Earlier — rapid-study track record</h3>
          <p className={styles.meta}>
            Insurance agent, 2009 · Placement-exam tutor, 2017 – 2021
          </p>
          <ul>
            <li>
              Self-studied 100 hours in 10 days to pass insurance licensing
              exams, then translated legal-financial products into plain
              language for customers daily; as a tutor, mastered multiple
              subjects and taught across skill levels, often in one
              classroom
            </li>
          </ul>
        </section>

        <h4 className={styles.sectionLabel}>Projects</h4>

        <section className={styles.entry}>
          <h3>
            Weft — Developmental AI Tutoring Platform
            <span className={styles.stack}>
              {' '}
              | 2026 – present · TypeScript · Claude Agent SDK ·{' '}
              <a href="https://github.com/hartphoenix/weft">code</a>
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
              Architected multi-agent orchestration — parallel dispatch,
              phase sequencing, handoff protocols
            </li>
          </ul>
        </section>

        <section className={styles.entry}>
          <h3>
            The Schelling Point — Real-Time Multiplayer Game
            <span className={styles.stack}>
              {' '}
              | 2026 · React · TypeScript · Express · WebSocket ·{' '}
              <a href="https://schellingpoints.ulyssepence.com/">play</a> ·{' '}
              <a href="https://github.com/hartphoenix/schelling-points">
                code
              </a>
            </span>
          </h3>
          <ul>
            <li>
              Led a 4-person team from an open brief (&ldquo;a party game of
              some kind&rdquo;) to a scalable concept — 20+ players converge
              on shared words via embedding-space centroids — shipped in a
              5-day sprint with a solo overnight push to make demo day
            </li>
            <li>
              Redesigned scoring overnight when players competed instead of
              cooperating; 1st live group of 20 won together
            </li>
          </ul>
        </section>

        <section className={styles.entry}>
          <h3>
            Open Source — Honcho (Plastic Labs)
            <span className={styles.stack}>
              {' '}
              | 2026 · TypeScript ·{' '}
              <a href="https://github.com/plastic-labs/honcho/pull/456">PR #456</a>
            </span>
          </h3>
          <ul>
            <li>
              Diagnosed and fixed a memory-layer bug in Honcho, an
              unfamiliar production codebase; merged by Plastic Labs
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
            <strong>AI &amp; Agents:</strong> Claude Code, Claude Agent SDK,
            multi-agent orchestration, context engineering
          </p>
          <p>
            <strong>Deployment &amp; Tooling:</strong> Docker, Render,
            Railway, GitHub Actions (CI/CD), Git, Vite, Vitest
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
