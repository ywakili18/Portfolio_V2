import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import NavBar from '../components/NavBar'
import Projects from './Projects'
import Contact from './Contact'
import About from './About'
import Button from '../components/buttons/Button'
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
      <div className=" flex h-screen">
        <div className="m-auto">
          <h1 className="font-extrabold text-4xl text-purple-500">
            Yousof Wakili.
          </h1>
          <h2 className="text-2xl text-slate-300">Software Engineer.</h2>
          <h3 className="text-2xl text-slate-300">Front-End Developer.</h3>
          <Link href="#contact">
            <a>
              <Button text="Contact Me" />
            </a>
          </Link>
        </div>
      </div>
      <Projects />
      <Contact />
      <About />
    </div>
  )
}
