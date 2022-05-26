import { motion } from 'framer-motion'
import React from 'react'

const AboutMe = () => {
  const techSkills = [
    'HTML5',
    'CSS3',
    'Python',
    'JavaScript (ES6+)',
    'Ember.js',
    'React.js',
    'Next.js',
    'Redux',
    'Node.js',
    'PostgreSQL',
    'MongoDb',
    'Express.js',
    'Tailwindcss',
    'MaterialUI',
    'Git',
    'Docker',
    'Mocha / Chai',
    'Selenium'
  ]
  const listSkills = techSkills.map((skill) => <p key={skill}>{skill}</p>)
  return (
    <motion.div
      className="text-xs md:text-base mt-5  mx-auto w-1/2  aboutme"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 }
      }}
    >
      <p>Hello 👋</p>
      <p>
        {' '}
        My name is <span className="text-fuchsia-200">Yousof Wakili.</span>
      </p>
      <p>
        I&apos;m a passionate software engineer based out of the{' '}
        <span className="text-fuchsia-200">San Francisco Bay Area.</span>
      </p>
      <p>
        Currently I&apos;m working as a
        <span className="text-fuchsia-200">
          {' '}
          Full-Stack JavaScript developer
        </span>{' '}
        at 21st Century Partnership for STEM education (21PSTEM).
      </p>

      <p>
        I&apos;m the lead developer on the
        <a
          className="text-violet-400 hover:text-rose-500 underline"
          href="https://encompass.mathematicalthinking.org"
          target="_blank"
          rel="noreferrer"
        >
          {' '}
          EnCoMPASS project,{' '}
        </a>
        a collaborative work involving Drexel University and California State
        University, San Marcos, developing an online, professional teaching
        community that is addressing issues of assessment in mathematics
        classes.
      </p>
      <p>
        As of this moment I work a lot with
        <span className=" text-fuchsia-200">
          {' '}
          HTML, CSS, SaSS, JavaScript, React.js, Ember.js, MongoDb, Node.js,
          Docker, Mocha/Chai, and Selenium.
        </span>
      </p>
      <p>
        When I&apos;m not exploring new technologies, in my spare time{' '}
        <span className="text-fuchsia-200">
          I enjoy playing sports, gaming, hiking, and tending to my plants.
        </span>
      </p>
      <div className="p-4 mt-10  rounded-lg bg-stone-900">
        <p className="text-center text-2xl text-rose-400">
          Technologies I&apos;ve worked with:
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 text-center">
          {listSkills}
        </div>
      </div>
    </motion.div>
  )
}

export default AboutMe
