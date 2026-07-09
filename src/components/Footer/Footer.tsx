import styles from './Footer.module.css'

const links = [
  { label: 'GitHub',   href: 'https://github.com/lolelo' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/lolelo' },
  { label: 'lorena@lolelo.dev', href: 'mailto:lorena@lolelo.dev' },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span className={styles.copy}>© 2025 lolelo.dev</span>
      <nav className={styles.links} aria-label="Redes y contacto">
        {links.map(l => (
          <a
            key={l.label}
            href={l.href}
            target={l.href.startsWith('http') ? '_blank' : undefined}
            rel={l.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className={styles.link}
          >
            {l.label}
          </a>
        ))}
      </nav>
    </footer>
  )
}
