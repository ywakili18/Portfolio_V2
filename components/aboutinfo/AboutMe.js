import { motion } from 'framer-motion'
import React from 'react'

const AboutMe = () => {
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
      <p>
        Hello 👋 
      </p>
      <p> My name is <span className="text-fuchsia-200">Yousof Wakili.</span></p>
      <p>
        I&apos;m a passionate software engineer based out of the{' '}
        <span className="text-fuchsia-200">San Francisco Bay Area.</span>
      </p>
      <p>
        Currently working as a
        <span className="text-fuchsia-200"> Full-Stack JavaScript developer</span> at 21st Century Partnership for STEM education (21PSTEM)
        creating interactive experiences on the web{' '}
          and solving a bunch of problems!
        
      </p>

      <p>
        I&apos;m the lead developer on the 
        <a className="text-violet-400 hover:text-rose-500 underline" href="https://encompass.mathematicalthinking.org" target="_blank"> EnCoMPASS project, </a> 
        a collaborative work 
        involving Drexel University and Temple University, developing an online, 
        professional teaching community that is addressing issues of assessment in mathematics classes.
      </p>
      <p>
        As of this moment I work a lot with 
        <span className=" text-fuchsia-200"> JavaScript, Ember.js, MongoDb, Node.js, Docker, Mocha/Chai, and Selenium.</span>
      </p>
      <p>
        When I&apos;m not exploring new technologies, in my spare time{' '}
        <span className="text-fuchsia-200">
          I enjoy playing sports, gaming, hiking, and tending to my plants.
        </span>
      </p>
      <div className='p-4 mt-10  rounded-lg bg-stone-900'> 
      <p className="text-center text-2xl text-rose-400">
        Technologies I&apos;ve worked with:
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 text-center">
        <p>HTML5</p>
        <p>CSS3</p>
        <p>Python</p>
        <p>JavaScript (ES6+)</p>
        <p>Ember.js</p>
        <p>React.js</p>
        <p>Next.js</p>
        <p>Redux</p>
        <p>Node.js</p>
        <p>PostgreSQL</p>
        <p>MongoDb</p>
        <p>Express.js</p>
        <p>Tailwindcss</p>
        <p>MaterialUI</p>
        <p>Git</p>
        <p>Docker</p>
        <p>Mocha/Chai</p>
        <p>Selenium</p>
      </div></div>
     
    </motion.div>
  )
}

export default AboutMe
