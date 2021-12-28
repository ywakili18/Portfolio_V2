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
      transition={{ delay: 1 }}
    >
      <a
        href="#_"
        className="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden  
      font-medium tracking-wide text-white hover:text-blue-800 hover:font-extrabold bg-gray-800 rounded-lg group"
      >
        <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-violet-200  rounded-full group-hover:w-56 group-hover:h-56"></span>
        <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
        <span className="relative ">{text}</span>
      </a>
    </motion.div>
  )
}

export default Button
