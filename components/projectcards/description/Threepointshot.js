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
      <div className=" flex justify-between mx-auto w-3/4 sm:w-auto sm:m-0">
        <h1 className="text-center text-xl sm:text-3xl md:text-4xl text-orange-400 font-extrabold p-3">
          3pointshot.
        </h1>
        <a
          href="https://threepointshot.vercel.app/"
          className="underline hover:text-purple-300 hover:bg-slate-700  rounded-lg p-4 md:mt-0 text-blue-400"
        >
          Link
        </a>
        <a
          href="https://github.com/ywakili18/threepointshot"
          className="underline hover:text-purple-300 hover:bg-slate-700   rounded-lg p-4 md:mt-0 text-blue-400"
        >
          Github Repo
        </a>
      </div>
      <div className="mx-auto w-3/4 sm:w-auto sm:m-0">
        <p className="mt-8">
          3pointshot is a NBA stats tracker app using the Balldontlie api to
          fetch data about your favorite player during the 2021-2022 NBA season.
          Deployed via Vercel.
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
      <div className="languageIcons text-center flex flex-col mt-5">
        <div className="flex  flex-col sm:flex-row">
          <div className="language text-rose-500">HTML5</div>
          <div className="language text-sky-500">CSS3</div>
          <div className="language text-yellow-500">JavaScript</div>
          <div className="language text-sky-200">React</div>
          <div className="language text-blue-300">Tailwindcss</div>
        </div>
        <div className="flex  flex-col sm:flex-row mt-2">
          <div className="language text-slate-300">Git</div>
          <div className="language text-sky-200">Framer Motion</div>
        </div>
      </div>
    </motion.div>
  )
}

export default Threepointshot
