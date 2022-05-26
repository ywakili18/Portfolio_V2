import { motion } from 'framer-motion'
import React from 'react'

const AboutMe = () => {
  const techSkills = [
    'HTML5',
    'CSS3',
    'Tailwindcss',
    'Sass',
    'Python',
    'JavaScript',
    'Ember.js',
    'React.js',
    'Next.js',
    'Redux',
    'Node.js',
    'PostgreSQL',
    'MongoDb',
    'Express.js',
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
      <p className="text-fuchsia-400 flex items-center">
        &lt;Hello World! <span className="text-xs">&#47;</span>&gt;{' '}
        <motion.p
          animate={{ rotate: 100 }}
          transition={{
            delay: 1,
            duration: 1,
            repeat: Infinity,
            repeatType: 'reverse'
          }}
        >
          👋
        </motion.p>
      </p>
      <p>
        {' '}
        My name is <span className="text-fuchsia-400">Yousof Wakili.</span>
      </p>
      <p>
        I&apos;m a passionate software engineer based out of the{' '}
        <span className="text-fuchsia-400">San Francisco Bay Area.</span>
      </p>
      <p>
        Currently I&apos;m working as a
        <span className="text-fuchsia-400">
          {' '}
          Full-Stack JavaScript developer
        </span>{' '}
        at 21st Century Partnership for STEM education (21PSTEM).
      </p>

      <p>
        I&apos;m the lead developer on the{' '}
        <a
          className="text-indigo-400 hover:text-rose-500 underline"
          href="https://encompass.mathematicalthinking.org"
          target="_blank"
          rel="noreferrer"
        >
          EnCoMPASS project{' '}
        </a>{' '}
        , a collaborative work involving Drexel University and California State
        University San Marcos, developing an online, professional teaching
        community that is addressing issues of assessment in mathematics
        classes.
      </p>
      <p>
        As of this moment I work a lot with
        <span className=" text-fuchsia-400">
          {' '}
          HTML, CSS, SaSS, JavaScript, React.js, Ember.js, MongoDb, Node.js,
          Docker, Mocha/Chai, and Selenium.
        </span>
      </p>
      <p>
        When I&apos;m not exploring new technologies, in my spare time{' '}
        <span className="text-fuchsia-400">
          I enjoy playing sports, gaming, hiking, and tending to my plants.
        </span>
      </p>
      <div className=" mt-10  rounded-lg bg-stone-900 text-center">
        <p className="text-2xl decoration-violet-500 color:violet-400 underline">
          Tech Stack I have worked with
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3">{listSkills}</div>
      </div>
    </motion.div>
  )
}

export default AboutMe
