import Link from 'next/link'

const NavBar = () => {
  return (
    <div className="py-16">
      <nav className="flex justify-around bg-slate-800 text-md font-bold p-4 h-16 fixed top-0 inset-x-0 rounded">
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
    </div>
  )
}

export default NavBar
