import React from 'react'
import { IoMdSend } from 'react-icons/io'
const Form = () => {
  return (
    <form
      action="https://formsubmit.co/ywakili18@gmail.com"
      method="POST"
      className="text-black  mx-auto md:w-1/2"
    >
      <div className="rounded-lg  flex flex-col text-center  text-xs p-10">
        <label
          htmlFor="name"
          className="text-gray-400 text-left text-lg sm:text-xl md:text-2xl mb-2"
        >
          Name
        </label>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          required
          className="text-indigo-300 bg-stone-900 border-b border-violet-900 p-2 focus:outline-none"
        />
        <label
          htmlFor="email"
          className="text-gray-400 text-left text-lg sm:text-xl md:text-2xl mt-2"
        >
          Email
        </label>
        <input
          type="email"
          name="email"
          placeholder="Your email"
          required
          className="text-indigo-300 bg-stone-900 border-b border-violet-900 p-2 focus:outline-none"
        />
        <label
          htmlFor="message"
          className="text-gray-400 text-left text-lg sm:text-xl md:text-2xl"
        >
          Message
        </label>
        <textarea
          type="message"
          name="message"
          placeholder="Hi Yousof!"
          required
          className="text-indigo-300 bg-stone-900 border-b border-violet-900 p-2 focus:outline-none"
        />
        <input
          type="hidden"
          name="_next"
          value="https://youseffect.com/thankyou"
        ></input>
        <button
          type="submit"
          className="relative inline-block px-4 py-2 font-medium group mt-8 "
        >
          <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-fuchsia-900 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
          <span className="absolute inset-0 w-full h-full bg-violet-400 border-2 border-black group-hover:bg-fuchsia-900"></span>
          <span className="relative text-black group-hover:text-white text-xl">
            send
          </span>
        </button>
      </div>
    </form>
  )
}

export default Form
