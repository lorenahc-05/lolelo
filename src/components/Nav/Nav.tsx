import { useState, useRef, useEffect } from 'react'
import styles from './Nav.module.css'

const sections = ['cv', 'proyectos', 'catálogo', 'contáctame']

const versions = [
  { label: 'Versión .dev',    href: '/work',   desc: 'Portfolio técnico' },
  { label: 'Versión .design', href: '/design', desc: 'Portfolio creativo' },
]

const current = versions[0]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  // Cierra el dropdown al hacer click fuera
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

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

      {/* Selector de versión */}
      <div className={styles.selector} ref={ref}>
        <button
          className={styles.selectorBtn}
          onClick={() => setOpen(o => !o)}
          aria-haspopup="listbox"
          aria-expanded={open}
        >
          <span className={styles.selectorCurrent}>{current.label}</span>
          <span className={`${styles.selectorArrow} ${open ? styles.selectorArrowOpen : ''}`}>
            ▾
          </span>
        </button>

        {open && (
          <ul className={styles.dropdown} role="listbox">
            {versions.map(v => (
              <li key={v.href} role="option">
                <a
                  href={v.href}
                  className={`${styles.dropdownItem} ${v.href === '/work' ? styles.dropdownItemActive : ''}`}
                  onClick={() => setOpen(false)}
                >
                  <span className={styles.dropdownLabel}>{v.label}</span>
                  <span className={styles.dropdownDesc}>{v.desc}</span>
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  )
}