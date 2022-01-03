import { motion } from 'framer-motion'
import React from 'react'
import Form from '../components/form/Form'
const Contact = () => {
  return (
    <div id="contact" className="p-20  flex flex-col justify-evenly mt-48">
      <div className="text-center">
        <p className="text-violet-400 text-2xl sm:text-3xl md:text-5xl mt-20 font-Bungee">
          say hello.
        </p>
        <p className="text-lg sm:text-2xl md:text-3xl mt-5">
          {' '}
          Let me help build your new{' '}
          <span className="text-violet-400">idea.</span>
        </p>
      </div>
      <motion.div
        className="mt-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: 400, opacity: 0 }
        }}
      >
        <Form />
      </motion.div>
    </div>
  )
}

export default Contact
