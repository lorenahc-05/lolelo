import styles from './Stats.module.css'

const stats = [
  { num: '7', suffix: '+', label: 'tiendas en producción' },
  { num: '4', suffix: '+', label: 'plugins desarrollados' },
  { num: '1',  suffix: 'año', label: 'experiencia real' },
]

export default function Stats() {
  return (
    <section className={styles.stats} aria-label="Métricas clave">
      {stats.map(s => (
        <div key={s.label} className={styles.stat}>
          <p className={styles.num}>
            {s.num}<span className={styles.suffix}>{s.suffix}</span>
          </p>
          <p className={styles.label}>{s.label}</p>
        </div>
      ))}
    </section>
  )
}
