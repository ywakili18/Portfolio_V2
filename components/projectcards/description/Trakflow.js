import React from 'react'
import { motion } from 'framer-motion'
const Trakflow = () => {
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
      className="sm:w-1/2 sm:ml-10 text-xs md:text-lg"
    >
      <div className="flex justify-between mx-auto w-3/4 sm:w-auto sm:m-0">
        <h1 className="text-center text-xl sm:text-3xl md:text-4xl text-purple-400 font-extrabold p-3">
          Trakflow.
        </h1>
        <a
          href="https://immense-dawn-73702.herokuapp.com/"
          className="underline hover:text-purple-300 hover:bg-slate-700  rounded-lg p-4 md:mt-0"
        >
          Link
        </a>
        <a
          href="https://github.com/ywakili18/trakflow"
          className="underline hover:text-purple-300 hover:bg-slate-700   rounded-lg p-4 md:mt-0"
        >
          Github Repo
        </a>
      </div>
      <div className="mx-auto w-3/4 sm:w-auto sm:m-0">
        <p className="mt-8">
          Trakflow is a full-stack, issue tracking web application to help users
          track and report any tickets or issues using a "flow".
        </p>
        <ul className="mt-8">
          <p className="underline">Features:</p>
          <li>
            -Users can create their own trakflow account, using JWT (Json Web
            Tokens)
          </li>
          <li>-User tickets is stored in a PostgreSQL database</li>
          <li>
            -Node.js and Express.js are used for backend and API fetching.
          </li>
          <li>-React.js, Redux for state management.</li>
        </ul>
      </div>

      <div className="mt-10 flex flex-col justify-evenly text-xs text-center">
        <div>
          <span className="language text-rose-500">HTML5</span>
          <span className="language text-sky-500">CSS3</span>
          <span className="language text-yellow-500">JavaScript</span>
          <span className="language text-sky-200">React</span>
          <span className="language text-green-500">Redux</span>
          <span className="language text-blue-300">Tailwindcss</span>
        </div>
        <div className="mt-10">
          <span className="language text-slate-300">Git</span>
          <span className="language text-sky-200">PostgreSQL</span>
          <span className="language text-emerald-300">Node.js</span>
          <span className="language text-green-200">Express.js</span>
          <span className="language text-purple-500">Heroku</span>
          <span className="language text-gray-200">JWT</span>
        </div>
      </div>
    </motion.div>
  )
}

export default Trakflow
