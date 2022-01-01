import { motion } from 'framer-motion'
import React from 'react'

const AboutMe = () => {
  return (
    <motion.div
      className="text-xs md:text-lg mt-20  w-1/2 mx-auto p-1 aboutme"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      variants={{
        visible: { x: 0, scale: 1 },
        hidden: { x: -500, scale: 0 }
      }}
    >
      <p>
        Hey, my name is <span className="text-fuchsia-400">Yousof Wakili.</span>
      </p>
      <p>
        I'm a passionate software engineer based out of the{' '}
        <span className="text-fuchsia-400">San Francisco Bay Area.</span>
      </p>
      <p>
        I'm currently working as a
        <span className="text-fuchsia-400"> front-end developer</span> creating
        interactive experiences on the web.
      </p>
      <p>
        My drive for problem solving comes from working in the{' '}
        <span className="text-fuchsia-400">business world</span> where I wore
        many hats, both as a leader and a team player.
      </p>
      <p>
        Compiling my first line of code back in 2016 had become the catalyst to
        my journey as a{' '}
        <span className="text-fuchsia-400">software engineer.</span>
      </p>
      <p className="underline">A few technologies I've been working with:</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 text-rose-200 font-black">
        <p>HTML5</p>
        <p>CSS3</p>
        <p>JavaScript (ES6+)</p>
        <p>React.js</p>
        <p>Redux</p>
        <p>Node.js</p>
        <p>PostgreSQL</p>
        <p>Express.js</p>
        <p>Tailwindcss</p>
        <p>Bootstrap</p>
        <p>Git</p>
      </div>
    </motion.div>
  )
}

export default AboutMe
