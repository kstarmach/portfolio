import Image from "next/image"
import Link from "next/link";
import { useState, useEffect } from "react";
import { FiGithub, FiPlay } from 'react-icons/fi';

type Project = {
    id: string;
    title: string;
    content: string;
    shortContent: string;
    createDate: Date;
    demoUrl: string;
    githubUrl: string;
    imgUrl: string;
};

function ProjectListItem(props: Project) {



    return (
        <div className="mb-10">
            <div>
                <h3 className="text-2xl font-extrabold text-gray-900 mt-4">{props.title}</h3>
                <p className="text-gray-500 text-sm">{props.createDate.toLocaleString()}</p>
            </div>
            <div className=" rounded-lg mt-4">

                <Image
                    src={props.imgUrl}
                    alt="Example image from Picsum"
                    width={600}
                    height={400}
                    className="rounded-lg w-full h-auto"
                />
                <div className=" rounded-lg  mx-4  px-6 py-4 flex justify-between w-full max-w-2xl">
                    <button className="flex-1 rounded-full border bg-blue-500 text-white px-4 py-2 mr-2 hover:bg-blue-600 flex items-center justify-center">
                        <FiPlay className="mr-2" />
                        Demo &#8599;
                    </button>
                    <a
                        href={props.githubUrl}
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
                {props.shortContent}{' '}
                <Link href={`/projects/${props.id}`} passHref>
                    <span className={`text-gray-900  hover:border-b-2 hover:border-gray-900 hover:text-gray-900`}>
                        Read More →
                    </span>
                </Link>
            </p>
        </div>
    )
}

export default function Projects() {
    const [projectList, setProjectList] = useState<Project[]>();

    useEffect(() => {
        const fetchProject = async () => {
            const res = await fetch(`http://localhost:3000/api/projects`);
            const projectData = await res.json();


            setProjectList(projectData);

        };
        fetchProject();

    }, []);

    if (!projectList) {
        return <div>Loading...</div>;
    }

    const projects = projectList.map(p => (
        <ProjectListItem {...p} key={p.id} />

    ))

    return (
        <>
            {projects}
        </>
    )
}

