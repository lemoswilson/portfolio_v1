import { useState, useRef } from 'react'
import Head from 'next/head'
import Hero from '../components/Hero'
import styles from '../styles/Home.module.scss'
import NavBar from '../components/NavBar'
import Socials from '../components/Socials'
import Email from '../components/Email';
import About from '../components/About'
import Experience from '../components/Experience'
import Contact from '../components/Contact'
import Work from '../components/Work'
import useBlockOverflow from '../hooks/useBlockOverflow'
import Overlay from '../components/Overlay'
import ProjectModal from '../components/ProjectModal'
import Menu from '../components/Menu'

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

const email = "wlemosdev@gmail.com";
const twitter = "https://twitter.com/lemosdev"
const instagram = "https://twitter.com/lemosdev"
const linkedin = "https://linkedin.com/lemosdev"

// export default function Home({data}: HomeProps) {
export default function Home({}) {
  const [data, setData] = useState(JSONdata)
  const [projectModal, setProjectModal] = useState<string>('');
  const [isMenuOpen, setMenu] = useState(false);
  const [hide, setHide] = useState(false);

  const hero_ref = useRef() as React.MutableRefObject<HTMLDivElement>;
  const about_ref = useRef() as React.MutableRefObject<HTMLDivElement>;
  const experience_ref = useRef() as React.MutableRefObject<HTMLDivElement>;
  const work_ref = useRef() as React.MutableRefObject<HTMLDivElement>;
  const contact_ref = useRef() as React.MutableRefObject<HTMLDivElement>;
  const ref_da_ref = useRef({about: about_ref, experience: experience_ref, work: work_ref, contact: contact_ref})

  const [loadingDone, setLoadingDone] = useState(false);
  const [typingDone, setTyping] = useState(false);
  const [socialsDone, setSocialsLoading] = useState(false);
  const [emailDone, setEmailDone] = useState(false);

  function setLoading(state: boolean){
    console.log('should be setting loading')
    setLoadingDone(state);
  }

  useBlockOverflow(isMenuOpen, projectModal.length > 0)

  function closeMenu(){
    setProjectModal('')
    setMenu(false);
  }

  function scrollToElement(destination: string){
    scroll({top: ref_da_ref.current[destination].current.offsetTop - 70, behavior: 'smooth'});
  }


  return (
    <div className={styles.container}>
      <Head>
        <title>Wilson Lemos</title>
        <link rel="icon" href="/favicon-16x16.png" />
        <link rel="stylesheet" href="https://use.typekit.net/sux7xms.css"></link>
        <script dangerouslySetInnerHTML={{  __html: JSON.stringify(structuredData) }} type="application/ld+json"/>
      </Head>

      <Menu 
        isMenuOpen={isMenuOpen} 
        scrollToElement={scrollToElement} 
        setHide={setHide} 
        setMenu={setMenu}  
      />
      <NavBar 
        emailDone={emailDone} 
        scrollToElement={scrollToElement} 
        setMenu={setMenu} 
      />
      <Overlay 
        closeMenus={closeMenu} 
        isMenuOpen={isMenuOpen}
        isModalOpen={projectModal.length > 0}
        hide={hide}
      />
      { socialsDone ?  <Email email={email} setEmailDone={setEmailDone}/> : null }
      { typingDone ? <Socials setSocialsDone={setSocialsLoading}/> : null }
      <ProjectModal closeMenu={closeMenu} data={data} name={projectModal}/>

      <main className={styles.main}>
        <Hero 
          loadingDone={loadingDone} 
          setLoading={setLoading} 
          setTyping={setTyping} 
          scrollToElement={scrollToElement} 
          ref={hero_ref} 
        />
        <About ref={about_ref}/> 
        <Experience ref={experience_ref}/>
        <Work 
          data={data} 
          projectModal={projectModal} 
          setProjectModal={setProjectModal}
          ref={work_ref}
        />
        <Contact ref={contact_ref} />
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

const structuredData = {
   "@context": "https://schema.org/",
   "@type": "WebSite",
   "name": "Wilson Lemos, Web Developer",
   "url": "https://lemoswilson.com",
   "about": {
     "@type": "Thing",
     "description": "Wilson Lemos is a Web Developer interested in exploring creativity through the use of digital tools.",
     "image": "/website.png",
     "name": "Wilson Lemos Web Development Portfolio",
     "url": "https://lemoswilson.com",
     "accessMode": "visual, auditory",
     "accountablePerson": {
       "@context": "https://schema.org",
       "@type": "Person",
       "birthPlace": "São Bernardo do Campo, SP. Brazil.",
       "email": email,
       "familyName": "Nonato de Lemos",
       "gender": "male",
       "hasOccupation": {
         "@type": "Occupation",
         "name": "Web Developer",
       },
       "knowsLanguage": "Portuguese-BR, English, Spanish",
       "sameAs": twitter,
     }
   }
}

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