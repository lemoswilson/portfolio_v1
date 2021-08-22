import Head from 'next/head'
import Hero from '../components/Hero'
import styles from '../styles/Home.module.scss'
import NavBar from '../components/NavBar'
import Socials from '../components/Socials'
import Email from '../components/Email';
import About from '../components/About'
import Experience from '../components/Experience'
import Contact from '../components/Contact'
import { useState } from 'react'
import Work from '../components/Work'
import useBlockOverflow from '../hooks/useBlockOverflow'
import Overlay from '../components/Overlay'
import ProjectModal from '../components/ProjectModal'

interface ProjectData {
  title: string,
  description: string,
  link: string, 
  source: string,
  img: string,
}

export interface HomeProps {
  data: ProjectData[]
}

// export default function Home({data}: HomeProps) {
export default function Home({}) {
  const [data, setData] = useState(JSONdata)
  const [projectModal, setProjectModal] = useState<string>('');
  const [isMenuOpen, setMenu] = useState(false);

  useBlockOverflow(isMenuOpen, projectModal.length > 0)

  function closeMenu(){
    setProjectModal('')
    setMenu(false);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Wilson Lemos</title>
        <link rel="icon" href="/favicon-16x16.png" />
        <link rel="stylesheet" href="https://use.typekit.net/sux7xms.css"></link>
      </Head>

      <NavBar setMenu={setMenu} />
      <Overlay 
        closeMenus={closeMenu} 
        isMenuOpen={isMenuOpen}
        isModalOpen={projectModal.length > 0}
      />
      <Email/>
      <Socials/>
      <ProjectModal closeMenu={closeMenu} data={data} name={projectModal}/>
      <main className={styles.main}>
        <Hero />
        <About/> 
        <Experience/>
        <Work 
          data={data} 
          projectModal={projectModal} 
          setProjectModal={setProjectModal}
        />
        <Contact/>
      </main>

      <footer className={styles.footer}>
        Designed &amp; Developed by Wilson Lemos
      </footer>
    </div>
  )
}

// export const getStaticProps = async () => {
//   const res = await fetch(
//     process.env.JSON_BIN, 
//     {headers: {"secret-key": '$2b$10$9gQCG3/2yh.uvHDOABYXiuQWo84Lk.9RzuE7glwhNJ6gqiRwAwJ8G'}}
//   )
//   const data = await res.json()

//   return {
//     props: {
//       data: data.data,
//     },
//   }
// }


const JSONdata = 
[
    {
      "title": "tmlssnss",
      "description": "This project is an e-commerce platform that was built using ReactJS, ExpressJS, MongoDB, commerceJS, and Stripe. The website contains an authentication system, together with a shop and checkout system.",
      "link": "",
      "source": "",
      "img": "https://i.imgur.com/GtsGuQY.png"
    },
    {
      "title": "etune",
      "description": "This is a content aggregator website that I made to collect news from electronic music-related pages. It was made with Python and Redis for scraping data, and Django for the web framework. \n The website is outdated, as the HTML for the scrapped pages has changed, and since I don’t actually use the website anymore, I haven’t updated the source code.",
      "link": "",
      "source": "",
      "img": "https://i.imgur.com/BGMyRp8.png"
    },
    {
      "title": "XolombrisX",
      "description": "This is a beat making web application made with ReactJS, ToneJS, Redux,   NodeJS and MongoDB. I made this application to explore the WebAudio API capabilities within ToneJS library.",
      "link": "",
      "source": "",
      "img": "https://i.imgur.com/xoKD2ZU.png"
    }
  ]