import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import NavBar from '../components/NavBar'
import Projects from './Projects'
import Contact from './Contact'
import About from './About'
import Button from '../components/buttons/Button'
import { motion } from 'framer-motion'
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
      <motion.div
        id="#"
        className=" flex h-screen"
        initial={{
          scale: 0
        }}
        animate={{
          scale: 1
        }}
        transition={{ delay: 0.3 }}
      >
        <div className="m-auto">
          <h1 className="font-extrabold text-6xl text-purple-500">
            Yousof Wakili.
          </h1>
          <motion.h2
            initial={{
              y: 200,
              opacity: 0
            }}
            animate={{
              y: 0,
              opacity: 1
            }}
            transition={{ delay: 0.6 }}
            className="text-3xl text-slate-300 ml-2 mt-2"
          >
            Software Engineer.
          </motion.h2>
          <motion.h3
            initial={{
              y: 200,
              opacity: 0
            }}
            animate={{
              y: 0,
              opacity: 1
            }}
            transition={{ delay: 0.9 }}
            className="text-3xl text-slate-300 ml-2"
          >
            Front-End Developer.
          </motion.h3>
          <Link href="#contact">
            <a>
              <Button text="Contact Me" />
            </a>
          </Link>
        </div>
      </motion.div>
      <Projects />
      <Contact />
      <About />
    </div>
  )
}
