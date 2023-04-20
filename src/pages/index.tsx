import { FaGithub, FaLinkedin, FaAt } from 'react-icons/fa';

import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex justify-between ">
      <div>

      </div>
      <div className="flex items-center space-x-4 text-gray-500 ">
        <Link href="/" >
          <span className='hover:text-gray-900 hover:border-b-2 hover:border-gray-900'>Home</span>
        </Link>
        <Link href="/about"  >
          <span className='hover:text-gray-900 hover:border-b-2 hover:border-gray-900'>About</span>
        </Link>
        <Link href="/projects">
          <span className='hover:text-gray-900 hover:border-b-2 hover:border-gray-900'>Projects</span>
        </Link>
      </div>
    </nav>
  );
};

const UrlItem = () => {
  return (

    <div className="flex items-center space-x-4">
      <a href="https://github.com/kstarmach" target="_blank" rel="noopener noreferrer" className="border border-gray-600 rounded-full px-3 py-2 flex items-center text-gray-600 hover:text-gray-800 hover:border-gray-800">
        <FaGithub className="w-5 h-5 mr-2" />
        <span>GitHub</span>
        <span className="ml-1">&#8599;</span>
      </a>
      <a href="https://www.linkedin.com/in/kstarmach/" target="_blank" rel="noopener noreferrer" className="border border-gray-600 rounded-full px-3 py-2 flex items-center text-gray-600 hover:text-gray-800 hover:border-gray-800">
        <FaLinkedin className="w-5 h-5 mr-2" />
        <span>LinkedIn</span>
        <span className="ml-1">&#8599;</span>
      </a>
      <a href="https://www.linkedin.com/in/kstarmach/" target="_blank" rel="noopener noreferrer" className="border border-gray-600 rounded-full px-3 py-2 flex items-center text-gray-600 hover:text-gray-800 hover:border-gray-800">
        <FaAt className="w-5 h-5 mr-2" />
        <span>Email</span>
        <span className="ml-1">&#8599;</span>
      </a>
    </div>
  )
}

export default function Home() {

  return (
    <div className="bg-gray-100 min-h-screen ">
      <div className="flex items-center justify-center h-screen">
        <div className="max-w-3xl mx-auto py-16 px-4 sm:px-6 lg:px-8">

          <h1 className="text-3xl font-extrabold text-gray-900">Kamil Starmach</h1>
          <Navbar />
          <p className="mt-4 max-w-2xl text-xl text-gray-500">
            Hi, I&apos;m Kamil. Self proclaimed <b>full stack developer</b> who tries to learn everything at once, in no particular order.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <UrlItem />
          </div>


        </div>
      </div>
    </div >
  )
}
