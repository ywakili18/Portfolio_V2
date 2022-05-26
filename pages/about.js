import React from 'react'
import AboutMe from '../components/aboutinfo/AboutMe'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <div
      id="about"
      className="text-4xl font-bold p-10 sm:p-48 bg-stone-900 rounded-xl"
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
        about.
      </motion.div>
      <AboutMe />
    </div>
  )
}

export default About
