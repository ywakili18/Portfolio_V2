import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import AnimatedText from '../components/AnimatedText'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Projects from './projects'
import Contact from './contact'
import About from './about'
import Button from '../components/buttons/Button'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Home() {
  const [replay, setReplay] = useState(true)
  const placeholderText = [
    { type: 'heading1', text: 'Software Engineer | Full-Stack Developer' }
  ]

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025
      }
    }
  }

  return (
    <div>
      <Head>
        <title>Yousof Wakili</title>
        <meta name="Portfolio" content="Yousof Wakili Portfolio" />
        <link
          rel="icon"
          href="https://cdn-icons-png.flaticon.com/512/1157/1157109.png"
        />
      </Head>

      <NavBar />
      <Footer />
      {/* Home page content */}
      <motion.div
        id="#"
        className="sm:flex flex-none justify-between items-center h-screen bg-slate-900 m-auto"
        initial={{
          scale: 0
        }}
        animate={{
          scale: 1
        }}
        transition={{ delay: 0.2 }}
      >
        {/* Title */}
        <div className="m-auto sm:mx-auto p-10">
          <h1
            className="
          text-lg sm:text-6xl
          font-black
          text-transparent 
          bg-clip-text 
          bg-gradient-to-r from-indigo-300 to-purple-400"
          >
            Yousof Wakili.
          </h1>
          {/* animated text */}
          <motion.div
            className="text-xs sm:text-3xl"
            initial="hidden"
            // animate="visible"
            animate={replay ? 'visible' : 'hidden'}
            variants={container}
          >
            <div className="container">
              {placeholderText.map((item, index) => {
                return <AnimatedText {...item} key={index} />
              })}
            </div>
          </motion.div>
          {/* Description */}
          <motion.div
            initial={{
              y: 200,
              opacity: 0
            }}
            animate={{
              y: 0,
              opacity: 1
            }}
            transition={{ delay: 1.1 }}
            className="text-xs sm:text-xl text-gray-500 mt-5 text-center flex"
          >
            <motion.p className="">
              I build fast, responsive, and beautiful websites.
            </motion.p>
          </motion.div>
          {/* Buttons */}
          <div className="flex">
            <Link href="#contact">
              <a>
                <Button text="Contact Me" />
              </a>
            </Link>
            <Link href="#projects">
              <a>
                <Button text="View my works" />
              </a>
            </Link>
          </div>
        </div>
        {/* image */}
        <div className=" m-auto flex items-center">
          <Image
            src="/self.png"
            width={200}
            height={200}
            alt="yousof_memoji"
          ></Image>
          <motion.div
            className="mt-10"
            initial={{
              y: -10
            }}
            animate={{ y: 10 }}
            transition={{
              delay: 3.2,
              duration: 2,
              repeat: Infinity,
              repeatType: 'reverse'
            }}
          >
            <Image
              src="/coding.svg"
              width={200}
              height={150}
              alt="coding.svg"
            ></Image>
          </motion.div>
        </div>
      </motion.div>
      <About />
      <Projects />
      <Contact />
    </div>
  )
}
