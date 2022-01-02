import { motion } from 'framer-motion'
import React from 'react'
import { CgCopyright } from 'react-icons/cg'
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
        <p className="mt-0.5 ">2021 Yousof Wakili</p>
      </p>
      <span className="text-right text-xs">Built with Next.js</span>
      <Link href="/#">
        <a className="text-right text-xs text-blue-400 underline">
          Return to top
        </a>
      </Link>
    </motion.div>
  )
}

export default Footer
