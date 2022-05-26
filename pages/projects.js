import React from 'react'
import Card from '../components/projectcards/Card'
const Projects = () => {
  return (
    <div
      className="p-20  flex flex-col justify-evenly rounded-xl"
      id="projects"
    >
      <div className="text-center mt-40">
        <p className="text-violet-400 text-2xl sm:text-3xl md:text-5xl">
          works.
        </p>
        <p className="text-lg sm:text-2xl md:text-3xl mt-5">
          {' '}
          Featured projects i&apos;ve been{' '}
          <span className="text-violet-400">building.</span>
        </p>
      </div>
      <Card />
    </div>
  )
}

export default Projects
