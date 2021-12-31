import { motion } from 'framer-motion'
import React from 'react'

const Pokemini = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 }
      }}
      className="sm:w-1/2 sm:ml-10 text-sm md:text-lg"
    >
      <div className="flex justify-between">
        <h1 className="text-center text-lg sm:text-3xl md:text-4xl text-orange-400 font-extrabold p-3">
          Pokemon Gold Mini.
        </h1>
        <a
          href="http://pokemongoldmini.surge.sh/"
          className="underline hover:text-purple-300 hover:bg-slate-700  rounded-lg p-4 md:mt-0"
        >
          Link
        </a>
        <a
          href="https://github.com/ywakili18/Pokemon-Mini"
          className="underline hover:text-purple-300 hover:bg-slate-700   rounded-lg p-4 md:mt-0"
        >
          Github Repo
        </a>
      </div>
      <div>
        <p className="mt-8">
          Pokemon Gold Mini is a web application game. Pick between 3 pokemon
          and battle to determine a winner!
        </p>
        <ul className="mt-8">
          <p className="underline">Features:</p>
          <li>
            -Users can create pick their own pokemon and battle against a
            computer.
          </li>
          <li>
            -JavaScript ES6 is used to help with creating small functions for
            game logic.
          </li>
        </ul>
      </div>

      <div className="mt-10 flex justify-evenly text-xs">
        <div>
          <span className="language text-rose-500">HTML5</span>
          <span className="language text-sky-500">CSS3</span>
          <span className="language text-yellow-500">JavaScript</span>
          <span className="language text-slate-200">Git</span>
        </div>
      </div>
    </motion.div>
  )
}

export default Pokemini
