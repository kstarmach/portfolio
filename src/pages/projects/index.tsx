import TechnologyIcon from "@/components/TechnologyIcon";
import { Project } from "@/types/types";
import Image from "next/image"
import Link from "next/link";
import { useState, useEffect } from "react";

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
                        <h3 className="text-xl font-extrabold text-gray-700 my-2" tabIndex={0}>
                            {props.title}

                        </h3>
                        {props.technology.map((t, idx) =>
                            <TechnologyIcon technology={t} key={idx} />
                        )}

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
        </>
    )
}


