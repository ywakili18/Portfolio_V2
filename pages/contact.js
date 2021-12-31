import React from 'react'
import Form from '../components/form/form'
const Contact = () => {
  return (
    <div id="contact" className="p-20  flex flex-col justify-evenly mt-48">
      <div className="text-center">
        <p className="text-violet-400 text-2xl sm:text-3xl md:text-5xl">
          say hello.
        </p>
        <p className="text-lg sm:text-2xl md:text-3xl mt-5">
          {' '}
          Let me help build your new{' '}
          <span className="text-violet-400">idea.</span>
        </p>
      </div>
      <div className="mt-10">
        <Form />
      </div>
    </div>
  )
}

export default Contact
