import { motion } from 'framer-motion'
import React from 'react'

const Threepointshot = () => {
  return (
    <motion.div
      className="sm:w-1/2 sm:ml-10 text-sm md:text-lg"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 }
      }}
    >
      <div className="flex justify-between">
        <h1 className="text-center text-xl sm:text-3xl md:text-4xl text-blue-400 font-extrabold p-3">
          3pointshot.
        </h1>
        <a
          href="https://threepointshot.vercel.app/"
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
      <div>
        <p className="mt-8">
          3pointshot is a NBA stats tracker app using the Balldontlie api to
          fetch data about your favorite player during the 2021-2022 NBA season.
        </p>
        <ul className="mt-8">
          <p className="underline">Features:</p>
          <li>
            -Users can search through and request data about any NBA player this
            seasons
          </li>
          <li>
            -API, Data fetching is used with Axios and displayed using React
            hooks.
          </li>
        </ul>
      </div>

      <div className="mt-10 flex flex-col justify-evenly text-xs">
        <div>
          <span className="language text-rose-500">HTML5</span>
          <span className="language text-sky-500">CSS3</span>
          <span className="language text-yellow-500">JavaScript</span>
          <span className="language text-sky-200">React</span>
          <div className="mt-10">
            <span className="language text-blue-300">Tailwindcss</span>
            <span className="language text-slate-300">Git</span>
            <span className="language text-purple-300">Framer Motion</span>
            <span className="language text-white">Vercel</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Threepointshot
