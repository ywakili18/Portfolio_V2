import React from 'react'
import AboutMe from '../components/aboutinfo/AboutMe'
const About = () => {
  return (
    <div id="about" className="text-4xl  p-10 sm:p-48 bg-stone-900 rounded-xl">
      <div className="mt-10">
        <p className="text-violet-400 text-2xl sm:text-3xl md:text-5xl text-center ">
          about.
        </p>
      </div>
      <AboutMe />
    </div>
  )
}

export default About
