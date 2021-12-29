import { motion } from 'framer-motion'
const Button = ({ bgcolor, text }) => {
  return (
    <motion.div
      initial={{
        y: 200,
        opacity: 0
      }}
      animate={{
        y: 0,
        opacity: 1
      }}
      transition={{ delay: 1.1 }}
      className="mt-10 text-center"
    >
      <a
        href="#_"
        className="relative ml-1 inline-flex items-center justify-center p-2 sm:px-4 sm:py-4 overflow-hidden  
      font-medium tracking-wide text-white hover:text-blue-300 hover:font-extrabold bg-gray-800 rounded-lg group"
      >
        <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-rose-800  rounded-full group-hover:w-56 group-hover:h-56"></span>
        <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
        <span className="relative font-Roboto text-sm sm:text-xl hover:underline">
          {text}
        </span>
      </a>
    </motion.div>
  )
}

export default Button
