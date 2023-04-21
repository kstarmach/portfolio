import Image from "next/image"
import { FiGithub, FiPlay } from 'react-icons/fi';

const Project = () => {
    return (
        <div className="mb-10">
            <div>
                <h3 className="text-2xl font-extrabold text-gray-900 mt-4">Next.js Pages</h3>
                <p className="text-gray-500 text-sm">April 21, 2023</p>
            </div>
            <div className=" rounded-lg mt-4">

                <Image
                    src="https://picsum.photos/600/400"
                    alt="Example image from Picsum"
                    width={600}
                    height={400}
                    layout="responsive"
                    className="rounded-lg"
                />
                <div className=" rounded-lg  mx-4  px-6 py-4 flex justify-between w-full max-w-2xl">
                    <button className="flex-1 rounded-full border bg-blue-500 text-white px-4 py-2 mr-2 hover:bg-blue-600 flex items-center justify-center">
                        <FiPlay className="mr-2" />
                        Demo &#8599;
                    </button>
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 rounded-full border border-gray-400 px-4 py-2 hover:bg-gray-100 flex items-center justify-center"
                    >
                        <FiGithub className="mr-2" />
                        GitHub &#8599;
                    </a>
                </div>
            </div>
            <p className="mt-4 w-2xl text-xl text-gray-500">
                View examples of all possible Markdown options.
                <a href='#' className="text-blue-900"> Read More → </a>
            </p>
        </div>
    )
}

export default function Projects() {
    return (
        <>

            <Project />
            <Project />
            <Project />
        </>
    )
}