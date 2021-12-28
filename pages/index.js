import Head from 'next/head'
import styles from '../styles/Home.module.css'
import NavBar from '../components/NavBar'
import Projects from './Projects'
import Contact from './Contact'
import About from './About'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Yousof Wakili</title>
        <meta name="Portfolio" content="Yousof Wakili Portfolio" />
        <link
          rel="icon"
          href="https://cdn-icons-png.flaticon.com/512/808/808439.png"
        />
      </Head>
      <NavBar />
      <div className="text-3xl flex h-screen">
        <div className="m-auto">
          <h1>Yousof Wakili</h1>
          <h2>Software Engineer</h2>
          <h3>Front End Developer</h3>
        </div>
      </div>
      <Projects />
      <Contact />
      <About />
    </div>
  )
}
