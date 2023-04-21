import { FaAt, FaGithub, FaLinkedin } from "react-icons/fa"

const Redirect = () => {
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

export default Redirect