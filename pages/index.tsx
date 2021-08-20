import Head from 'next/head'
import Hero from '../components/Hero'
import styles from '../styles/Home.module.scss'
import NavBar from '../components/NavBar'
import Socials from '../components/Socials'
import Email from '../components/Email';
import About from '../components/About'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Wilson Lemos</title>
        <link rel="icon" href="/favicon-16x16.png" />
        <link rel="stylesheet" href="https://use.typekit.net/sux7xms.css"></link>
      </Head>

      <NavBar />
      <Email/>
      <Socials/>
      <main className={styles.main}>
        <Hero />
        <About/> 
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
