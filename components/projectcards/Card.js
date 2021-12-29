import Image from 'next/image'

const card = () => {
  return (
    <div className="">
      {['Trakflow', 'Threepointshot', 'Moviesearch', 'Pokemini'].map((path) => {
        return (
          <div key={path} className="flex justify-evenly mt-10">
            <Image
              src={`/${path}.png`}
              width={400}
              height={400}
              alt="project image"
            />
            <div className="w-1/2 border">
              <p className="border text-center text-5xl">trakflow.</p>
              <p className="border mt-10">
                Trakflow is a full-stack, issue tracking web application to help
                users track and report any tickets or issues using a "flow".
              </p>
              <ul className="mt-10">
                <p>Features:</p>
                <li>Create account, store tickets through JWT Tokens</li>
                <li>User tickets is stored in PostgreSQL database</li>
                <li>
                  Node.js and Express.js are used for backend and API fetching.
                </li>
                <li>React.js, Redux for state management.</li>
              </ul>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default card
