import Link from "next/link";
import { useRouter } from "next/router";

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

const Navbar = () => {
    const router = useRouter();
    const segments = router.asPath.split("/").filter(Boolean);
    const firstSegment = segments[0];

    if (!segments[1]) {
        return (
            <nav className="flex justify-between mt-4 max-w-2xl">

                <div className="flex items-center space-x-10 text-gray-500 ">

                    <NavbarLink isActive={firstSegment === undefined} url="/" name='Home' />
                    <NavbarLink isActive={firstSegment === 'about'} url="/about" name='About' />
                    <NavbarLink isActive={firstSegment === 'projects'} url="/projects" name='Projects' />

                </div>
            </nav>
        );
    }
    return (
        <nav className="flex justify-between mt-4 max-w-2xl">

            <div className="flex items-center space-x-10 text-gray-500 ">

                <NavbarLink isActive={false} url="/projects" name='&larr; Back' />

            </div>
        </nav>
    );
};

export default Navbar;