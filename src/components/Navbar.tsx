import Link from "next/link";

type NavbarLinkTypes = {
    isActive: boolean;
    url: string;
    name: string;
}

const NavbarLink = ({ isActive, url, name }: NavbarLinkTypes) => {
    return (
        <Link href={url}>
            <span className={`text-gray-900 ${isActive ? 'border-b-2 border-gray-900' : 'hover:border-b-2 hover:border-gray-900 hover:text-gray-900'}`}>
                {name}
            </span>
        </Link>

    )
}

const Navbar = ({ active }: { active: string }) => {


    return (
        <nav className="flex justify-between mt-4 max-w-2xl">

            <div className="flex items-center space-x-10 text-gray-500 ">

                <NavbarLink isActive={active === 'Home'} url="/" name='Home' />
                <NavbarLink isActive={active === 'About'} url="/about" name='About' />
                <NavbarLink isActive={active === 'Projects'} url="/projects" name='Projects' />

            </div>
        </nav>
    );
};

export default Navbar;