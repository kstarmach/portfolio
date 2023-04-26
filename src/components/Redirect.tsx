import { FaAt, FaGithub, FaLinkedin, } from "react-icons/fa"
import { TbArrowUpRight } from "react-icons/tb"

const Redirect = () => {
    return (

        <div className="flex items-center my-2">
            <a href="https://github.com/kstarmach" target="_blank" rel="noopener noreferrer" className="border border-gray-600 rounded-full px-3 py-2 flex items-center text-gray-600 hover:text-gray-800 hover:border-gray-800">
                <FaGithub className="w-5 h-5 mr-2" />
                <span className="hidden sm:inline">GitHub </span>
                <span className="sr-only">Link opens in new window</span>
                <TbArrowUpRight className="w-5 h-5 ml-2" />
            </a>
            <a href="https://www.linkedin.com/in/kstarmach/" target="_blank" rel="noopener noreferrer" className="border border-gray-600 rounded-full px-3 py-2 flex items-center text-gray-600 hover:text-gray-800 hover:border-gray-800 ml-4">
                <FaLinkedin className="w-5 h-5 mr-2" />
                <span className="hidden sm:inline">LinkedIn </span>
                <span className="sr-only">Link opens in new window</span>
                <TbArrowUpRight className="w-5 h-5 ml-2" />
            </a>
            <a href="mailto:kstarmach@outlook.com" target="_blank" rel="noopener noreferrer" className="border border-gray-600 rounded-full px-3 py-2 flex items-center text-gray-600 hover:text-gray-800 hover:border-gray-800 ml-4">
                <FaAt className="w-5 h-5 mr-2" />
                <span className="hidden sm:inline">Email </span>
                <span className="sr-only">Link opens in new window</span>
                <TbArrowUpRight className="w-5 h-5 ml-2" />
            </a>
        </div>
    )
}

export default Redirect