import React from 'react'

const Form = () => {
  return (
    <form
      action="https://formsubmit.co/ywakili18@gmail.com"
      method="POST"
      className="text-black  mx-auto"
    >
      <div className="border border-white rounded-lg flex flex-col text-center p-2 text-xs ">
        <input
          type="text"
          name="name"
          placeholder="Name"
          required
          className="bg-slate-900 text-white p-2 rounded-lg "
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="bg-slate-900 text-white mt-2 p-2 rounded-lg "
        />
        <input
          type="message"
          name="message"
          placeholder="Your Message"
          required
          className="bg-slate-900 text-white mt-2 p-2 rounded-lg "
        />
        <input
          type="hidden"
          name="_next"
          value="http://localhost:3000/thankyou"
        ></input>
        <button
          type="submit"
          className="border rounded-lg text-white transition-all duration-500 ease-out hover:bg-purple-400 bg-slate-800"
        >
          Send Message
        </button>
      </div>
    </form>
  )
}

export default Form
