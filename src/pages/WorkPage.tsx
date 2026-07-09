import Nav        from '../components/Nav/Nav'
import Hero       from '../components/Hero/Hero'
import Experience from '../components/Experience/Experience'
import Projects   from '../components/Projects/Projects'
import About      from '../components/About/About'
import Footer     from '../components/Footer/Footer'
import styles     from './WorkPage.module.css'

export default function WorkPage() {
  return (
    <>
      <a href="#trabajo" className="skip-link">Saltar al contenido</a>

      <div className={styles.page}>
        <Nav />

        <main className={styles.main}>
          <Hero />

          <div className={styles.minimal}>
            <Experience />
            <hr className={styles.divider} />
            <Projects />
            <hr className={styles.divider} />
            <About />
          </div>
        </main>

        <Footer />
      </div>
    </>
  )
}