import React from 'react'
import Form from '../components/form/form'
const Contact = () => {
  return (
    <div id="contact" className="p-20  flex flex-col justify-evenly mt-48">
      <div className="text-center text-5xl">
        <span className="text-violet-400">contact me.</span>
      </div>
      <div className="mt-10">
        <Form />
      </div>
    </div>
  )
}

export default Contact
