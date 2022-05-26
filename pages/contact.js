import { motion } from 'framer-motion'
import React from 'react'
import Form from '../components/form/Form'
const Contact = () => {
  return (
    <div
      id="contact"
      className="p-20  flex flex-col justify-evenly mt-48 bg-stone-900 rounded-xl font-bold"
    >
      {/* animated text */}
      <motion.div
        className="text-violet-200 text-xl sm:text-3xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: {
            opacity: 1,
            y: 0,
            transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 2.5 }
          },
          hidden: {
            opacity: 0,
            y: 50,
            transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 3 }
          }
        }}
      >
        contact me.
        <p>say hello!</p>
      </motion.div>
      <motion.div
        className="mt-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        variants={{
          visible: { opacity: 1 },
          hidden: { opacity: 0 }
        }}
      >
        <Form />
      </motion.div>
    </div>
  )
}

export default Contact
