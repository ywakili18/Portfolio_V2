import { motion } from 'framer-motion'
import Link from 'next/link'
const NavBar = () => {
  return (
    <motion.div
      className="py-16 bg-slate-900"
      initial={{
        opacity: 0
      }}
      animate={{
        opacity: 1
      }}
      transition={{ delay: 1.4 }}
    >
      <nav
        className="flex bg-gradient-to-r from-indigo-500 to-purple-600 text-black text-xs sm:text-xl justify-evenly font-bold
      tracking-wide p-4 h-20 fixed top-0 inset-x-0 z-20 rounded-b-lg "
      >
        <Link href="/#">
          <a
            className="hover-underline-animation
          "
          >
            <p className="mt-3">home.</p>
          </a>
        </Link>
        <Link href="#about">
          <a className="hover-underline-animation">
            <p className="mt-3">about.</p>
          </a>
        </Link>
        <Link href="#projects">
          <a className="hover-underline-animation">
            <p className="mt-3">works.</p>
          </a>
        </Link>
        <Link href="#contact">
          <a className="hover-underline-animation">
            <p className="mt-3">contact.</p>
          </a>
        </Link>
        <a
          className="hover-underline-animation"
          href="ywakili-resume.pdf"
          target="_blank"
          rel="noreferrer"
        >
          <p className="mt-3">view resume. </p>
        </a>
      </nav>
    </motion.div>
  )
}

export default NavBar
