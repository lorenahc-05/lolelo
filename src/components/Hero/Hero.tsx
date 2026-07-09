import { useRef, useEffect, useState } from 'react'
import { motion, useMotionValue, useAnimate } from 'framer-motion'
import styles from './Hero.module.css'

const rows = [
  ['React', 'TypeScript', 'JavaScript', 'CSS'],
  ['SCSS', 'Angular', 'Node.js', 'PHP', 'Git'],
  ['WordPress', 'WooCommerce', 'Figma', 'Vite'],
  ['Supabase', 'MongoDB', 'Three.js', 'UX/UI'],
  ['React', 'TypeScript', 'JavaScript', 'CSS'],
  ['SCSS', 'Angular', 'Node.js', 'PHP', 'Git'],
  ['WordPress', 'WooCommerce', 'Figma', 'Vite'],
  ['Supabase', 'MongoDB', 'Three.js', 'UX/UI'],
]

const LETTERS = ['H', 'I', 'R', 'E', '', 'M', 'E']

export default function Hero() {
  const leftRef    = useRef<HTMLDivElement>(null)
  const lettersRef = useRef<HTMLDivElement>(null)
  const [scope, animate] = useAnimate()
  const y = useMotionValue(0)

  // Estado de cada brick: clave "ri-si" → true si está roto
  const [broken, setBroken] = useState<Record<string, boolean>>({})

  const toggleBrick = (key: string) => {
    setBroken(prev => ({ ...prev, [key]: !prev[key] }))
  }

  // Posiciona el contenedor de letras
  useEffect(() => {
    const setup = () => {
      if (!lettersRef.current || !leftRef.current || !scope.current) return
      const leftRect   = leftRef.current.getBoundingClientRect()
      const solapaRect = scope.current.getBoundingClientRect()
      const solapaH    = solapaRect.height
      const solapaW    = solapaRect.width
      const travel = leftRect.height - solapaH
      lettersRef.current.style.top    = '0px'
      lettersRef.current.style.height = `${travel}px`
      lettersRef.current.style.width  = `${solapaW}px`
      lettersRef.current.style.left   = `-${solapaW + 4}px`
    }
    setTimeout(setup, 50)
    window.addEventListener('resize', setup)
    return () => window.removeEventListener('resize', setup)
  }, [scope])

  // Clip según posición Y de la solapa
  useEffect(() => {
    const unsub = y.on('change', () => {
      if (!lettersRef.current || !leftRef.current || !scope.current) return
      const leftRect   = leftRef.current.getBoundingClientRect()
      const solapaRect = scope.current.getBoundingClientRect()
      const solapaH    = solapaRect.height
      const solapaTop  = solapaRect.top - leftRect.top
      const revealed   = Math.max(0, solapaTop)
      const travel     = leftRect.height - solapaH
      const hidden     = Math.max(0, travel - revealed)
      lettersRef.current.style.clipPath = `inset(0 0 ${hidden}px 0)`
    })
    return () => unsub()
  }, [y, scope])

  // Wiggle autónomo cada 5s
  useEffect(() => {
    const wiggle = async () => {
      const current = y.get()
      await animate(scope.current, {
        y: [current, current - 12, current + 8, current - 6, current + 4, current],
      }, { duration: 0.6, ease: 'easeInOut' })
    }
    const interval = setInterval(wiggle, 5000)
    return () => clearInterval(interval)
  }, [animate, scope, y])

  return (
    <section className={styles.section} aria-label="Presentación">
      <div className={styles.sticker} aria-label="Disponible para trabajar">
        disponible para trabajar
      </div>

      <div className={styles.inner}>
        <div className={styles.left} ref={leftRef}>

          <div className={styles.hireMe} ref={lettersRef} aria-hidden="true">
            {LETTERS.map((l, i) => (
              <span key={i} className={styles.hireLetter}>{l}</span>
            ))}
          </div>

          <motion.div
            ref={scope}
            className={styles.solapa}
            drag="y"
            dragConstraints={leftRef}
            dragElastic={0.05}
            style={{ y, cursor: 'grab' }}
            whileDrag={{ cursor: 'grabbing' }}
            aria-hidden="true"
          >
            <div className={styles.solapaAvatar}>LH</div>
            <span className={styles.solapaLabel}>lolelo.dev</span>
          </motion.div>

          <div>
            <p className={styles.eyebrow}>Frontend developer · Alicante</p>
            <h1 className={styles.h1}>
              Lorena<br />Heras<em className={styles.surname}>Caballero.</em>
            </h1>
            <p className={styles.tagline}>
              Construyo interfaces web rápidas, accesibles y con criterio de diseño.
              Ingeniería Multimedia + experiencia real en producción con 7 tiendas en activo.
            </p>
          </div>

          <div className={styles.ctas}>
            <a href="#trabajo" className={styles.btnPrimary}>Ver proyectos →</a>
            <a
              href="https://github.com/lolelo"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnGhost}
            >
              GitHub
            </a>
          </div>
        </div>

        <div className={styles.right} aria-hidden="true">
          {/* Fondo con HIRE ME — se ve conforme desaparecen los bricks */}
          <div className={styles.hireMeBack}>
            <span>HIRE</span>
            <span>ME</span>
          </div>

          {rows.map((row, ri) => (
            <div
              key={ri}
              className={`${styles.brow} ${ri % 2 === 0 ? styles.browOffset : ''}`}
            >
              {row.map((skill, si) => {
                const key = `${ri}-${si}`
                const isBroken = broken[key]
                return (
                  <div
                    key={si}
                    className={`${styles.brick} ${isBroken ? styles.brickBroken : ''}`}
                    style={{ flex: skill.length }}
                    onClick={() => toggleBrick(key)}
                  >
                    {!isBroken && skill}
                  </div>
                )
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}