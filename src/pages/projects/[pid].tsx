import Image from "next/image"
import { useRouter } from 'next/router'
import { useEffect, useState } from "react";
import { FiGithub, FiPlay } from 'react-icons/fi';
import { Project } from '../../types/types'
import TechnologyIcon from "@/components/TechnologyIcon";
import { TbArrowUpRight } from "react-icons/tb";


export default function Project() {
    const router = useRouter()
    const { pid } = router.query

    const [project, setProject] = useState<Project>();

    useEffect(() => {
        const fetchProject = async () => {
            const res = await fetch(`/api/projects/${pid}`);
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

    const paragraphs = project.content.split('\n\n');

    return (
        <div className="mb-10 mt-4">
            {project.technology.map((t, idx) =>
                <TechnologyIcon technology={t} key={idx} />
            )}

            {paragraphs.map((p, idx) => (
                <p key={idx} className="my-4  text-lg sm:text-xl">
                    {p.split('*').map((text, i) => {
                        if (i % 2 === 0) {
                            return text;
                        } else {
                            return <b key={`${idx}-${i}`}>{text}</b>;
                        }
                    })}
                </p>
            ))}
            <div className="rounded-lg my-8">
                <Image
                    src={project.imgUrl}
                    priority={true}
                    alt={`Image of ${project.title}`}
                    width={600}
                    height={400}
                    className="rounded-lg w-full h-auto"
                />
                <div
                    className="rounded-lg mx-4 px-6 py-4 flex justify-between w-full max-w-2xl"
                >
                    <a
                        href={project.demoUrl}
                        target="_blank"
                        aria-label="View demo"
                        className="flex-1 rounded-full border bg-blue-500 text-white px-4 py-2 mr-2 hover:bg-blue-600 flex items-center justify-center"
                    >
                        <FiPlay className="mr-2" />
                        Demo
                    </a>
                    <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 rounded-full border border-gray-400 px-4 py-2 hover:bg-gray-800 flex items-center justify-center"
                        aria-label="View source code on GitHub"
                    >
                        <FiGithub className="mr-2" />
                        GitHub
                        <TbArrowUpRight className="w-5 h-5 ml-2" />
                    </a>
                </div>
            </div>
        </div>

    )
}