import { projects } from './data'
import { useTitle } from './useTitle'
import ProjectCard from './ProjectCard'
import styles from './Projects.module.css'

export default function Projects() {
  useTitle('Projects')

  return (
    <section>
      <h1>projects</h1>
      <div className={styles.grid}>
        {projects.map((project) => (
          <ProjectCard key={project.slug} {...project} />
        ))}
      </div>
    </section>
  )
}
