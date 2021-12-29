import Link from 'next/link'

const NavBar = () => {
  return (
    <div className="py-16">
      <nav
        className="flex bg-slate-800 text-xs sm:text-xl justify-evenly
      tracking-wide p-4 h-20 fixed top-0 inset-x-0 rounded-b-lg "
      >
        <Link href="/#">
          <a className=" hover:text-blue-900 hover:bg-violet-400  rounded-lg  px-3  md:mt-0">
            <p className="mt-3">yousof.</p>
          </a>
        </Link>
        <Link href="#projects">
          <a className="hover:text-blue-900 hover:bg-violet-400  rounded-lg px-3 ">
            <p className="mt-3">projects.</p>
          </a>
        </Link>
        <Link href="#contact">
          <a className="hover:text-blue-900 hover:bg-violet-400  rounded-lg px-3 ">
            <p className="mt-3">contact.</p>
          </a>
        </Link>
        <Link href="#about">
          <a className="hover:text-blue-900 hover:bg-violet-400  rounded-lg px-3 ">
            <p className="mt-3">about.</p>
          </a>
        </Link>
      </nav>
    </div>
  )
}

export default NavBar
