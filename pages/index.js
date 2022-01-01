import Head from 'next/head'
import Link from 'next/link'
import { AiOutlineLinkedin, AiOutlineGithub } from 'react-icons/ai'
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
        <link
          href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@500&display=swap"
          rel="stylesheet"
        ></link>
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
        transition={{ delay: 0.4 }}
      >
        {/* Title */}
        <div className="m-auto  mt-28 sm:mx-auto text-center ">
          <h1 className="text-xl sm:text-7xl text-purple-500 flex justify-center">
            Yousof Wakili
            <SiXdadevelopers className="mt-2 ml-2" />
          </h1>
          {/* SWE and FEDEV */}
          <div className="flex mt-10 ml-2">
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
            className="text-xs sm:text-xl text-gray-500 mt-5 text-center"
          >
            <p>I build fast, responsive, and beautiful websites.</p>
          </motion.div>
          {/* Buttons */}
          <div className="flex justify-around">
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
          {/* Social Links */}
          <div className="text-3xl sm:text-4xl md:text-5xl mt-10 justify-around flex">
            <a href="https://www.linkedin.com/in/youseffect/">
              <AiOutlineLinkedin className="hover:text-violet-400 transition-all duration-300" />
            </a>
            <a href="https://github.com/ywakili18">
              <AiOutlineGithub className="hover:text-violet-400 transition-all duration-300" />
            </a>
          </div>
        </div>
      </motion.div>
      <Projects />
      <Contact />
      <About />
    </div>
  )
}
