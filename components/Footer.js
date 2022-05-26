import { motion } from 'framer-motion'
import React from 'react'
import { CgCopyright } from 'react-icons/cg'
import { AiOutlineLinkedin, AiOutlineGithub } from 'react-icons/ai'
import Link from 'next/link'
const Footer = () => {
  return (
    <motion.div
      className="fixed bottom-0 inset-x-0 py-4 flex flex-col justify-end"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <p className="text-xs flex justify-end ">
        <CgCopyright className="text-xl" />
        <p className="mt-0.5 ">2022 Yousof Wakili</p>
      </p>
      <span className="text-right text-xs">Built with Next.js</span>
      <span className="text-right text-2xl flex justify-end">
        {' '}
        <a
          href="https://www.linkedin.com/in/youseffect/"
          target="_blank"
          rel="noreferrer"
        >
          <AiOutlineLinkedin className="hover:text-violet-400 transition-all duration-300" />
        </a>
        <a href="https://github.com/ywakili18" target="_blank" rel="noreferrer">
          <AiOutlineGithub className="hover:text-violet-400 transition-all duration-300" />
        </a>
      </span>
      <Link href="/#">
        <a className="text-right text-xs text-blue-400 underline">
          Return to top
        </a>
      </Link>
    </motion.div>
  )
}

export default Footer
