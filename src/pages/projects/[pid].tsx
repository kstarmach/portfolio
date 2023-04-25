import Image from "next/image"
import { useRouter } from 'next/router'
import { useEffect, useState } from "react";
import { FiGithub, FiPlay } from 'react-icons/fi';
import { Project } from '../../types/types'


export default function Project() {
    const router = useRouter()
    const { pid } = router.query

    const [project, setProject] = useState<Project>();

    useEffect(() => {
        const fetchProject = async () => {
            const res = await fetch(`http://localhost:3000/api/projects/${pid}`);
            const projectData = await res.json();
            setProject(projectData);
        };

        if (pid) {
            fetchProject();
        }
    }, [pid]);

    if (!project) {
        return <div>Loading...</div>;
    }

    return (
        <div className="mb-10">
            <div>
                {/* <h3 className="text-2xl font-extrabold text-gray-900 mt-4">{project.title}</h3> */}
                {/* <p className="text-gray-500 text-sm">{project.createDate.toLocaleString()}</p> */}
            </div>
            <p className="mt-4 w-2xl text-xl text-gray-500">
                {project.content}
            </p>
            <div className=" rounded-lg mt-4">

                <Image
                    src={project.imgUrl}
                    alt="Example image from Picsum"
                    width={600}
                    height={400}
                    className="rounded-lg w-full h-auto"
                />
                <div className=" rounded-lg  mx-4  px-6 py-4 flex justify-between w-full max-w-2xl">
                    <button className="flex-1 rounded-full border bg-blue-500 text-white px-4 py-2 mr-2 hover:bg-blue-600 flex items-center justify-center">
                        <FiPlay className="mr-2" />
                        Demo
                    </button>
                    <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 rounded-full border border-gray-400 px-4 py-2 hover:bg-gray-100 flex items-center justify-center"
                    >
                        <FiGithub className="mr-2" />
                        GitHub &#8599;
                    </a>
                </div>
            </div>
        </div>
    )
}