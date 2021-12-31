import Image from 'next/image'
import Trakflow from './description/Trakflow'
import Pokemini from './description/Pokemini'
import Threepointshot from './description/Threepointshot'
import Moviesearch from './description/Moviesearch'
const card = () => {
  const checkPath = (imagePath) => {
    switch (imagePath) {
      case 'Trakflow':
        return <Trakflow />
      case 'Pokemini':
        return <Pokemini />
      case 'Threepointshot':
        return <Threepointshot />
      case 'Moviesearch':
        return <Moviesearch />
      default:
        null
    }
  }

  return (
    <div className="">
      {['Trakflow', 'Threepointshot', 'Moviesearch', 'Pokemini'].map((path) => {
        return (
          <div key={path} className="sm:flex justify-evenly mt-20">
            <Image
              src={`/${path}.png`}
              width={400}
              height={400}
              alt="project image"
            />
            {checkPath(path)}
          </div>
        )
      })}
    </div>
  )
}

export default card
