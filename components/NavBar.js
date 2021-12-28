import Link from 'next/link'

const NavBar = () => {
  return (
    <nav className="flex justify-around bg-slate-800 text-md font-bold p-4  sticky top-0 z-50 rounded">
      <Link href="/#">
        <a className=" hover:text-fuchsia-400">&#91; yousof. &#93;</a>
      </Link>
      <Link href="#projects">
        <a className="hover:text-violet-400">&#91; projects. &#93;</a>
      </Link>
      <Link href="#contact">
        <a className="hover:text-violet-400">&#91; contact. &#93;</a>
      </Link>
      <Link href="#about">
        <a className="hover:text-violet-400">&#91; about. &#93;</a>
      </Link>
    </nav>
  )
}

export default NavBar
