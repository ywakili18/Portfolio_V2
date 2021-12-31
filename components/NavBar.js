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
        className="flex bg-zinc-800 text-slate-100 text-xs sm:text-xl justify-evenly font-Comfortaa
      tracking-wide p-4 h-20 fixed top-0 inset-x-0 z-20 rounded-b-lg "
      >
        <Link href="/#">
          <a className=" hover:text-blue-900 hover:bg-violet-400  rounded-lg  px-3  md:mt-0">
            <p className="mt-3">home.</p>
          </a>
        </Link>
        <Link href="#projects">
          <a className="hover:text-blue-900 hover:bg-violet-400  rounded-lg px-3 ">
            <p className="mt-3">projects.</p>
          </a>
        </Link>
        <Link href="#contact">
          <a className="hover:text-blue-900 hover:bg-violet-400  rounded-lg px-3 ">
            <p className="mt-3">contact.</p>
          </a>
        </Link>
        <Link href="#about">
          <a className="hover:text-blue-900 hover:bg-violet-400  rounded-lg px-3 ">
            <p className="mt-3">about.</p>
          </a>
        </Link>
      </nav>
    </motion.div>
  )
}

export default NavBar
