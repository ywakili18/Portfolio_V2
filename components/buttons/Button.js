import { motion } from 'framer-motion'
const Button = ({ text }) => {
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
        className="relative inline-block px-4 py-2 font-medium group"
      >
        <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-fuchsia-900 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
        <span className="absolute inset-0 w-full h-full bg-violet-400 border-2 border-black group-hover:bg-fuchsia-900"></span>
        <span className="relative text-black group-hover:text-white">
          {text}
        </span>
      </a>
    </motion.div>
  )
}

export default Button
