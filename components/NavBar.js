import { motion } from 'framer-motion'
import Link from 'next/link'
const NavBar = () => {
  return (
    <motion.div
      className="py-16"
      initial={{
        opacity: 0
      }}
      animate={{
        opacity: 1
      }}
      transition={{ delay: 1.4 }}
    >
      <nav
        className="flex bg-zinc-800 text-slate-100 text-xs sm:text-xl justify-evenly  
      tracking-wide p-4 h-20 fixed top-0 inset-x-0 z-20 rounded-b-lg "
      >
        <Link href="/#">
          <a
            className=" hover:text-blue-900 hover:bg-violet-400  rounded-lg  px-3  md:mt-0
          active:bg-violet-600 focus:outline-none focus:ring focus:ring-violet-300
          "
          >
            <p className="mt-3">home.</p>
          </a>
        </Link>
        <Link href="#about">
          <a className="hover:text-blue-900 hover:bg-violet-400  rounded-lg px-3 active:bg-violet-600 focus:outline-none focus:ring focus:ring-violet-300 ">
            <p className="mt-3">about.</p>
          </a>
        </Link>
        <Link href="#projects">
          <a className="hover:text-blue-900 hover:bg-violet-400  rounded-lg px-3 active:bg-violet-600 focus:outline-none focus:ring focus:ring-violet-300">
            <p className="mt-3">works.</p>
          </a>
        </Link>
        <Link href="#contact">
          <a className="hover:text-blue-900 hover:bg-violet-400  rounded-lg px-3 active:bg-violet-600 focus:outline-none focus:ring focus:ring-violet-300">
            <p className="mt-3">contact.</p>
          </a>
        </Link>
        <a
          className="hover:text-blue-900 hover:bg-violet-400  rounded-lg px-3 active:bg-violet-600 focus:outline-none focus:ring focus:ring-violet-300 "
          href="yousof_wakili_resume.pdf"
          target="_blank"
          rel="noreferrer"
        >
          <p className="mt-3">view resume.</p>
        </a>
      </nav>
    </motion.div>
  )
}

export default NavBar
