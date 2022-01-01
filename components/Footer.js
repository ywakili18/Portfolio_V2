import { motion } from 'framer-motion'
import React from 'react'
import { CgCopyright } from 'react-icons/cg'

const Footer = () => {
  return (
    <motion.div
      className="fixed bottom-0 inset-x-0 py-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <p className="text-xs flex justify-end ">
        <CgCopyright className="text-xl" />
        <p className="mt-0.5 ">2021 Yousof Wakili</p>
      </p>
    </motion.div>
  )
}

export default Footer
