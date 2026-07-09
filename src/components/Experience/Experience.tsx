import styles from './Experience.module.css'

interface Job {
  dateStart: string
  dateEnd:   string
  role:      string
  company:   string
  desc:      React.ReactNode
}

const jobs: Job[] = [
  {
    dateStart: 'Jul 2026',
    dateEnd:   'Actualidad',
    role:      'Frontend Developer',
    company:   'Grupo Matmap · Fundeun',
    desc: (
      <>
        Único perfil técnico de la empresa. Desarrollo y mantenimiento de{' '}
        <strong>plugins PHP y JavaScript propios</strong> sobre WooCommerce en 7 tiendas
        en producción. Integración de pasarela Redsys, automatización con Google Sheets
        y arquitectura de actualización remota de plugins.
      </>
    ),
  },
  {
    dateStart: 'Nov 2024',
    dateEnd:   'Jun 2026',
    role:      'Frontend Developer (prácticas)',
    company:   'Grupo Matmap · GIPE UA',
    desc: (
      <>
        Prácticas universitarias que se convirtieron en trabajo real desde el primer mes.{' '}
        <strong>Migración de 7 tiendas a HPOS</strong>, optimización de rendimiento web,
        consolidación de dominios con estrategia SEO 301 y desarrollo del plugin
        mm-smart-cart desde cero.
      </>
    ),
  },
]

export default function Experience() {
  return (
    <section className={styles.section} id="trabajo" aria-label="Experiencia laboral">
      <div className={styles.inner}>
        <h2 className={styles.sectionTitle}>Experiencia laboral</h2>

        <div className={styles.list}>
          {jobs.map((job, i) => (
            <div key={i} className={styles.item}>

              <div className={styles.timeline}>
                <div className={styles.dates}>
                  <span>{job.dateStart}</span>
                  <span>{job.dateEnd}</span>
                </div>
                <div className={styles.lineCol}>
                  <div className={styles.dot} />
                  {i < jobs.length - 1 && <div className={styles.line} />}
                </div>
              </div>

              <div className={styles.content}>
                <p className={styles.role}>{job.role}</p>
                <p className={styles.company}>{job.company}</p>
                <p className={styles.desc}>{job.desc}</p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}