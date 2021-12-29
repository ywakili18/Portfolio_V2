import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import NavBar from '../components/NavBar'
import Projects from './Projects'
import Contact from './Contact'
import About from './About'
import Button from '../components/buttons/Button'
import { SiXdadevelopers } from 'react-icons/si'
import { MdOutlineDeveloperBoard, MdKeyboardAlt } from 'react-icons/md'
import { motion } from 'framer-motion'
export default function Home() {
  return (
    <div>
      <Head>
        <title>Yousof Wakili</title>
        <meta name="Portfolio" content="Yousof Wakili Portfolio" />
        <link
          rel="icon"
          href="https://cdn-icons-png.flaticon.com/512/808/808439.png"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <NavBar />
      <motion.div
        id="#"
        className="flex h-screen"
        initial={{
          scale: 0
        }}
        animate={{
          scale: 1
        }}
        transition={{ delay: 0.3 }}
      >
        <div className="m-auto  mt-28 sm:mx-auto">
          <h1 className="text-xl sm:text-7xl text-purple-500 flex justify-center">
            Yousof Wakili
            <SiXdadevelopers className="mt-2 ml-2" />
          </h1>
          <div className="flex mt-10">
            <motion.p
              initial={{
                y: 200,
                opacity: 0
              }}
              animate={{
                y: 0,
                opacity: 1
              }}
              transition={{ delay: 0.6 }}
              className="text-xs sm:text-2xl text-pink-100  flex"
            >
              Software Engineer{' '}
              <MdKeyboardAlt className=" ml-2 mt-0.5 sm:mt-1 " />
            </motion.p>
            <motion.p
              initial={{
                y: 200,
                opacity: 0
              }}
              animate={{
                y: 0,
                opacity: 1
              }}
              transition={{ delay: 0.6 }}
              className="text-xs sm:text-2xl text-pink-100  flex ml-2"
            >
              Front-End Developer{' '}
              <MdOutlineDeveloperBoard className="ml-2 mt-0.5 sm:mt-1" />
            </motion.p>
          </div>

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
