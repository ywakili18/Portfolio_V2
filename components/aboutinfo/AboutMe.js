import { motion } from 'framer-motion'
import React from 'react'

const AboutMe = () => {
  return (
    <motion.div
      className="text-xs md:text-base mt-10  w-1/2 mx-auto p-1 aboutme"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: 500, opacity: 0 }
      }}
    >
      <p>
        Hey! My name is <span className="text-fuchsia-400">Yousof Wakili.</span>
      </p>
      <p>
        I&apos;m a passionate software engineer based out of the{' '}
        <span className="text-fuchsia-400">San Francisco Bay Area.</span>
      </p>
      <p>
        I&apos;m currently working as a
        <span className="text-fuchsia-400"> front-end developer</span> creating
        interactive experiences on the web{' '}
        <span className="text-fuchsia-400">
          and solving a bunch of problems!
        </span>
      </p>

      <p>
        My drive for problem solving comes from working in{' '}
        <span className="text-fuchsia-400">telecom </span> where I wore many
        hats, both as a leader and a team player.
      </p>
      <p>
        I always had a keen interest with technology and after compiling my
        first line of code back in 2016, it had become the catalyst to my
        journey as a{' '}
        <span className="text-fuchsia-400">software engineer!</span>
      </p>
      <p>
        When I&apos;m not exploring new technologies, in my spare time{' '}
        <span className="text-fuchsia-400">
          I enjoy playing sports, hiking, and tending to my plants.
        </span>
      </p>
      <p className="underline">
        A few technologies I&apos;ve been working with:
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 text-rose-200 font-black">
        <p>HTML5</p>
        <p>CSS3</p>
        <p>JavaScript (ES6+)</p>
        <p>React.js</p>
        <p>Next.js</p>
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
