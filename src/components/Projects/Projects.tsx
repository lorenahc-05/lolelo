import styles from './Projects.module.css'

interface Project {
  name:   string
  tags:   string[]
  desc:   string
  demo?:  string
  repo?:  string
  accent: 'magenta' | 'gold'
}

const projects: Project[] = [
  {
    name:   'Visual Voices',
    tags:   ['Angular 18', 'Node.js', 'MongoDB', 'TypeScript', 'Three.js'],
    desc:   'Plataforma de aprendizaje de Lengua de Signos Española. TFG con notable. Sistema de lecciones interactivo con seguimiento de progreso y visualizaciones 3D.',
    demo:   'https://visual-voices.vercel.app',
    repo:   'https://github.com/lolelo/visual-voices',
    accent: 'magenta',
  },
  {
    name:   'Nutrición Núñez',
    tags:   ['React', 'Vite', 'Supabase', 'PWA'],
    desc:   'PWA de seguimiento nutricional para una nutricionista real. Menús personalizados, lista de la compra generada automáticamente y seguimiento de evolución del paciente.',
    demo:   'https://nutricion-nunez.vercel.app',
    repo:   'https://github.com/lorenahc-05/nutricion-nunez',
    accent: 'gold',
  },
]

export default function Projects() {
  return (
    <section className={styles.section} id="proyectos" aria-label="Proyectos">
      <div className={styles.inner}>
        <h2 className={styles.sectionTitle}>Proyectos</h2>

        <ul className={styles.list} role="list">
          {projects.map(p => (
            <li key={p.name}>

              <div className={`${styles.thumb} ${styles[`thumb-${p.accent}`]}`}>
                <span className={styles.thumbLabel}>{p.name} — captura</span>
              </div>

              <h3 className={styles.name}>{p.name}</h3>

              <ul className={styles.tags} role="list" aria-label="Stack">
                {p.tags.map(t => (
                  <li key={t} className={styles.tag}>{t}</li>
                ))}
              </ul>

              <p className={styles.desc}>{p.desc}</p>

              <div className={styles.links}>
                {p.demo && (
                  <a href={p.demo} target="_blank" rel="noopener noreferrer"
                    className={`${styles.link} ${styles['link-magenta']}`}>
                    ↗ Demo
                  </a>
                )}
                {p.repo && (
                  <a href={p.repo} target="_blank" rel="noopener noreferrer"
                    className={`${styles.link} ${styles['link-gold']}`}>
                    ↗ GitHub
                  </a>
                )}
              </div>

            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}