import React from 'react'
import { IoMdSend } from 'react-icons/io'
const Form = () => {
  return (
    <form
      action="https://formsubmit.co/ywakili18@gmail.com"
      method="POST"
      className="text-black  mx-auto"
    >
      <div className="border border-white rounded-lg flex flex-col text-center p-2 text-xs ">
        <label
          htmlFor="name"
          className="text-violet-400 text-left text-lg sm:text-xl md:text-2xl"
        >
          Name
        </label>
        <input
          type="text"
          name="name"
          placeholder="Name"
          required
          className="bg-gray-300  placeholder-gray-400 text-black p-2 rounded-lg "
        />
        <label
          htmlFor="email"
          className="text-violet-400 text-left text-lg sm:text-xl md:text-2xl mt-2"
        >
          Email
        </label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="bg-gray-300  placeholder-gray-400 text-black mt-2 p-2 rounded-lg mb-2"
        />
        <label
          htmlFor="message"
          className="text-violet-400 text-left text-lg sm:text-xl md:text-2xl"
        >
          Your Message
        </label>
        <textarea
          type="message"
          name="message"
          placeholder="Your Message"
          required
          className="bg-gray-300  placeholder-gray-400 text-black mt-2 p-2 rounded-lg "
        />
        <input
          type="hidden"
          name="_next"
          value="http://youseffect.com/thankyou"
        ></input>
        <button
          type="submit"
          className="border p-2 rounded-lg mt-2 text-xl text-white transition-all duration-500 ease-out hover:bg-purple-400 bg-slate-800 flex justify-center"
        >
          <p>Send Message</p>
          <IoMdSend className="mt-1 ml-2" />
        </button>
      </div>
    </form>
  )
}

export default Form
