import styles from './Nav.module.css'

const sections = ['trabajo', 'sobre mí', 'proceso']
const versions = ['work', 'design', 'art']

export default function Nav() {
  return (
    <nav className={styles.nav} aria-label="Navegación principal">
      <a href="/work" className={styles.logo} aria-label="Lolelo — inicio">
        lolelo<span className={styles.logoDot}>.</span>dev
      </a>

      <ul className={styles.links} role="list">
        {sections.map(s => (
          <li key={s}>
            <a href={`#${s.replace(' ', '-')}`} className={styles.link}>{s}</a>
          </li>
        ))}
      </ul>

      <div className={styles.switcher} role="group" aria-label="Versión del portfolio">
        {versions.map(v => (
          <a
            key={v}
            href={`/${v}`}
            className={`${styles.switchBtn} ${v === 'work' ? styles.active : ''}`}
            aria-current={v === 'work' ? 'page' : undefined}
          >
            {v}
          </a>
        ))}
      </div>
    </nav>
  )
}
