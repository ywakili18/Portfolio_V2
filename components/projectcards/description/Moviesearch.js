import { motion } from 'framer-motion'
import React from 'react'
import Image from 'next/image'
const Moviesearch = () => {
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
        <h1 className=" text-center text-lg sm:text-3xl md:text-4xl text-green-400 font-extrabold p-3 flex">
          Movie Search.
          <motion.div
            animate={{ rotate: 90 }}
            transition={{
              delay: 1,
              duration: 2,
              repeat: Infinity,
              repeatType: 'reverse'
            }}
            className="m-auto"
          >
            <Image
              src="/movie.svg"
              alt="basketballgif"
              width={30}
              height={30}
            />
          </motion.div>
        </h1>

        <a
          href="https://quikmoviesearch.surge.sh/"
          target="_blank"
          rel="noreferrer"
          className="underline hover:text-purple-300 hover:bg-slate-700  rounded-lg p-4 md:mt-0 text-blue-400"
        >
          Link
        </a>
        <a
          href="https://github.com/ywakili18/Movie-Search"
          target="_blank"
          rel="noreferrer"
          className="underline hover:text-purple-300 hover:bg-slate-700   rounded-lg p-4 md:mt-0 text-blue-400"
        >
          Github Repo
        </a>
      </div>
      <div className="mx-auto w-3/4 sm:w-auto sm:m-0">
        <p className="mt-8">
          Quik Movie search is a web application fetching data about your
          favorite movie using the TMDB API. Deployed via Surge.
        </p>
        <ul className="mt-8">
          <p className="underline">Features:</p>
          <li>
            -Users can search through the TMDB database to search and receive
            information about their favorite movies.
          </li>
          <li>-Dark mode using Bootstrap</li>
        </ul>
      </div>

      <div className="languageIcons text-center flex flex-col mt-5">
        <div className="flex  flex-col sm:flex-row">
          <span className="language text-rose-500">HTML5</span>
          <span className="language text-sky-500">CSS3</span>
          <span className="language text-yellow-500">JavaScript</span>
          <span className="language text-purple-500">Bootstrap</span>
          <span className="language text-slate-200">Git</span>
        </div>
      </div>
    </motion.div>
  )
}

export default Moviesearch
