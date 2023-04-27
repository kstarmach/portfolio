import Image from "next/image"
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaDatabase, FaReact, FaNodeJs, FaCss3Alt, FaHtml5, FaJsSquare } from 'react-icons/fa';
import { SiDotnet, SiMongodb, SiTypescript, SiDocker, SiGraphql } from 'react-icons/si';

const TechnologiesTable = () => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Technology</th>
                    <th>Icon</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>GraphQL</td>
                    <td><SiGraphql /></td>
                </tr>
                <tr>
                    <td>TypeScript</td>
                    <td><SiTypescript /></td>
                </tr>
                <tr>
                    <td>React Native</td>
                    <td><FaReact /></td>
                </tr>
                <tr>
                    <td>CI/CD</td>
                    <td><SiDocker /></td>
                </tr>
                <tr>
                    <td>Containers</td>
                    <td><SiDocker /></td>
                </tr>
                <tr>
                    <td>REST API</td>
                    <td><FaJsSquare /></td>
                </tr>
                <tr>
                    <td>HTML</td>
                    <td><FaHtml5 /></td>
                </tr>
                <tr>
                    <td>CSS</td>
                    <td><FaCss3Alt /></td>
                </tr>
                <tr>
                    <td>JavaScript</td>
                    <td><FaJsSquare /></td>
                </tr>
                <tr>
                    <td>ASP.NET MVC</td>
                    <td><SiDotnet /></td>
                </tr>
                <tr>
                    <td>SQL Databases</td>
                    <td><FaDatabase /></td>
                </tr>
                <tr>
                    <td>MongoDB</td>
                    <td><SiMongodb /></td>
                </tr>
                <tr>
                    <td>Node.js</td>
                    <td><FaNodeJs /></td>
                </tr>
                <tr>
                    <td>ReactJS</td>
                    <td><FaReact /></td>
                </tr>
            </tbody>
        </table>
    );
};

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
                        <h3 className="text-xl font-extrabold text-gray-700" tabIndex={0}>
                            {props.title}
                        </h3>
                        <p className="text-gray-500 text-sm mt-4" aria-label="Date">
                            {formattedDate}
                        </p>
                    </div>
                    <p className="my-4 max-w-2xl text-lg sm:text-xl text-gray-800">
                        {props.shortContent}
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
            const res = await fetch(`/api/projects`);
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
            <TechnologiesTable />
        </>
    )
}


