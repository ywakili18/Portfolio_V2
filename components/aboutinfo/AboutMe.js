import { motion } from 'framer-motion'
import Image from 'next/image'
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
    'Linux'
  ]
  const listSkills = techSkills.map((skill) => (
    <a
      key={skill}
      className="rounded-md px-3.5 py-2 m-1 overflow-hidden 
      relative group cursor-pointer border-2 font-2xl font-bold 
      border-indigo-500 text-indigo-600 "
    >
      <span
        className="absolute w-64 h-0 
      transition-all duration-300 origin-center 
      rotate-45 -translate-x-20 bg-gradient-to-r from-indigo-500 to-red-600  top-1/2
       group-hover:h-64 group-hover:-translate-y-32 ease"
      ></span>
      <span
        className="relative text-violet-200 
      transition duration-300 group-hover:text-white ease"
      >
        {skill}
      </span>
    </a>
  ))
  return (
    <motion.div
      className="text-xs md:text-lg mt-5  mx-auto  aboutme"
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
        <motion.div
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
          <p className="sm:text-2xl text-lg decoration-violet-500 color:violet-400 flex gap-2">
            Tech Stack I have worked with
            <Image
              src="/yellow-code.svg"
              alt="basketballgif"
              width={30}
              height={30}
            />
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-4">{listSkills}</div>
      </div>
    </motion.div>
  )
}

export default AboutMe
