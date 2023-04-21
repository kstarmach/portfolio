import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="flex justify-between mt-4 max-w-2xl">
            <div>

            </div>
            <div className="flex items-center space-x-10 text-gray-500 ">
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

export default Navbar;