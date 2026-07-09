import styles from './Experience.module.css'

interface Job {
  dateStart: string
  dateEnd:   string
  role:      string
  company:   string
  desc:      React.ReactNode
  ctas?:     { label: string; href: string; primary?: boolean }[]
}

const jobs: Job[] = [
  {
    dateStart: 'Nov 2025',
    dateEnd:   'Actualidad',
    role:      'Full Stack Developer',
    company:   'Grupo Matmap, S.L.',
    desc: (
      <>
        Responsable técnica única de <strong>7 tiendas e-commerce en producción</strong>.
        Desarrollo de <strong>plugins PHP y JS a medida</strong>, integración de pasarelas
        de pago, automatización de procesos internos, distribución y mantenimiento de
        plugins en producción, <strong>migración de base de datos</strong>, SEO técnico,
        <strong>optimización de rendimiento</strong> y desarrollo de interfaces de usuario.
      </>
    ),
  },
  {
    dateStart: '2023',
    dateEnd:   'Actualidad',
    role:      'Web Developer',
    company:   'Proyectos independientes',
    desc: (
      <>
        Restaurantes<br />
        Invitaciones digitales de boda <br />
PWA personalizados 

      </>
    ),
    ctas: [
      { label: 'Ver proyectos →', href: '#', primary: true },
      { label: 'Catálogo',        href: '#' },
    ],
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
                {job.ctas && (
                  <div className={styles.ctas}>
                    {job.ctas.map(cta => (
                      <a
                        key={cta.label}
                        href={cta.href}
                        className={cta.primary ? styles.btnPrimary : styles.btnGhost}
                      >
                        {cta.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}