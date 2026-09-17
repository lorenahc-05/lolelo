import Nav    from '../components/Nav/Nav'
import Footer from '../components/Footer/Footer'
import { projects } from '../data/projects'
import styles from './ProjectsPage.module.css'

export default function ProjectsPage() {
  return (
    <>
      <a href="#proyectos" className="skip-link">Saltar al contenido</a>

      <div className={styles.page}>
        <Nav />

        <main className={styles.main}>
          <section className={styles.section} id="proyectos" aria-label="Catálogo de proyectos">
            <div className={styles.inner}>
              <a href="/work" className={styles.back}>← Volver</a>

              <h1 className={styles.title}>Proyectos</h1>
              <p className={styles.intro}>
                Catálogo de proyectos en los que he trabajado, personales y profesionales.
                Se va ampliando conforme voy sumando cosas nuevas.
              </p>

              <ul className={styles.grid} role="list">
                {projects.map(p => (
                  <li key={p.name} className={styles.card}>
                    <div className={`${styles.thumb} ${styles[`thumb-${p.accent}`]}`}>
                      <span className={styles.thumbLabel}>{p.name} — captura</span>
                    </div>

                    <h2 className={styles.name}>{p.name}</h2>

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
        </main>

        <Footer />
      </div>
    </>
  )
}
