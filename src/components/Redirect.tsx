import { FaAt, FaGithub, FaLinkedin, } from "react-icons/fa"
import { TbArrowUpRight } from "react-icons/tb"

const Redirect = () => {
    return (

        <div className="flex justify-center sm:gap-14 gap-8 my-4 sm:my-8">
            <img src="./profile-pic.png" className="rounded-full h-44 w-44 object-cover border-solid border-2 border-gray-600 dark:border-gray-400" />

            <div className="grid gap-2">
                <a href="https://github.com/kstarmach" target="_blank" rel="noopener noreferrer" className="border border-gray-600 dark:border-white rounded-full px-3 py-2 flex items-center  hover:text-gray-400 hover:border-gray-400 dark:hover:text-gray-400 dark:hover:border-gray-400">
                    <FaGithub className="w-5 h-5 mr-2" />
                    <span className="hidden sm:inline">GitHub </span>
                    <span className="sr-only">Link opens in new window</span>
                    <TbArrowUpRight className="w-5 h-5 ml-2" />
                </a>
                <a href="https://www.linkedin.com/in/kstarmach/" target="_blank" rel="noopener noreferrer" className="border border-gray-600 dark:border-white rounded-full px-3 py-2 flex items-center  hover:text-gray-400 hover:border-gray-400 dark:hover:text-gray-400 dark:hover:border-gray-400">
                    <FaLinkedin className="w-5 h-5 mr-2" />
                    <span className="hidden sm:inline">LinkedIn </span>
                    <span className="sr-only">Link opens in new window</span>
                    <TbArrowUpRight className="w-5 h-5 ml-2" />
                </a>
                <a href="mailto:kstarmach@outlook.com" target="_blank" rel="noopener noreferrer" className="border border-gray-600 dark:border-white rounded-full px-3 py-2 flex items-center  hover:text-gray-400 hover:border-gray-400 dark:hover:text-gray-400 dark:hover:border-gray-400">
                    <FaAt className="w-5 h-5 mr-2" />
                    <span className="hidden sm:inline">Email </span>
                    <span className="sr-only">Link opens in new window</span>
                    <TbArrowUpRight className="w-5 h-5 ml-2" />
                </a>
            </div>
        </div>
    )
}

export default Redirect