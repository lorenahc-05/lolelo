import styles from './About.module.css'

export default function About() {
  return (
    <section className={styles.section} id="sobre-mi" aria-label="Sobre mí">
      <div className={styles.inner}>
        <div className={styles.text}>
          <h2 className={styles.sectionTitle}>Sobre mí</h2>
          <p>
            Me llamo Lorena, pero en internet soy <strong>Lolelo</strong>. Estudié
            Ingeniería Multimedia en la Universidad de Alicante porque quería hacer
            cosas que se vieran y se usaran.
          </p>
          <p>
            Me especialicé en frontend porque es donde se juntan el código y el diseño.
            Llevo un año trabajando en producción real:{' '}
            <strong>7 tiendas activas, plugins propios, integraciones con pasarelas
            de pago</strong>.
          </p>
          
        </div>
        <div className={styles.avatar} aria-hidden="true">LH</div>
      </div>
    </section>
  )
}