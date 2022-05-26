import React from 'react'
import Card from '../components/projectcards/Card'
import { motion } from 'framer-motion'
const Projects = () => {
  return (
    <div
      className="p-20  flex flex-col justify-evenly rounded-xl"
      id="projects"
    >
      {/* animated text */}
      <motion.div
        className="text-violet-200 text-xl sm:text-3xl mt-10 font-bold"
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
        works.
        <p>
          featured projects i have been{' '}
          <span className="text-violet-500">building.</span>
        </p>
      </motion.div>
      <Card />
    </div>
  )
}

export default Projects
