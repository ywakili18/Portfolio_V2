import React from 'react'
import Link from 'next/link'
import Button from '../components/buttons/Button'
const thankyou = () => {
  return (
    <div className="text-lg md:text-3xl flex h-screen text-center thankyou">
      <div className="m-auto">
        {' '}
        <p>
          Thanks you for contacting me, I'll reach back out as soon as possible!
        </p>
        <p>-Yousof W.</p>
        <Link href="/">
          <a>
            <Button text="Return Home" />
          </a>
        </Link>
      </div>
    </div>
  )
}

export default thankyou
