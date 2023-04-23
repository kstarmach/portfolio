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
    const [isHovered, setIsHovered] = useState(false);
    const formattedDate = new Date(props.createDate).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });


    return (
        <Link href={`/projects/${props.id}`} passHref>


        <div
            className="relative rounded-lg overflow-hidden cursor-pointer "
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="my-10">
                <div>
                    <h3 className="text-2xl font-extrabold text-gray-900 ">{props.title}</h3>
                    <p className="text-gray-500 text-sm mt-4">{formattedDate}</p>
                </div>
                <p className="mt-4 w-2xl text-xl text-gray-500">
                    {props.shortContent}{' '}
                    {/* <Link href={`/projects/${props.id}`} passHref>
                        <span className={`text-gray-900  hover:border-b-2 hover:border-gray-900 hover:text-gray-900`}>
                            Read More →
                        </span>
                    </Link> */}
                </p>
                <div className=" mt-4 p-5">

                    <Image
                        src={props.imgUrl}
                        alt="Example image from Picsum"
                        width={600}
                        height={400}
                        className={`rounded-xl  w-full h-auto transition-all duration-500 ${isHovered ? 'transform scale-105' : ''
                            }`}
                    />
                </div>

            </div>
        </div>
        </Link>
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

