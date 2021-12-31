import React from 'react'
import Card from '../components/projectcards/card'
const Projects = () => {
  return (
    <div className="p-20  flex flex-col justify-evenly" id="projects">
      <div className="text-center text-5xl mt-10">
        <span className="text-violet-400">works.</span>
      </div>
      <Card />
    </div>
  )
}

export default Projects
