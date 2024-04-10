import TechnologyIcon from "@/components/TechnologyIcon";
import { ProjectListSkeleton, ProjectSkeleton } from "@/components/skeletons";
import { fetchProjects } from "@/lib/data";
import { Project } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

function ProjectListItem({ project }: { project: Project }) {
    const [isHovered, setIsHovered] = useState(false);
    const formattedDate = new Date(project.createDate).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });

    return (
        <>
            <Link href={`/projects/${project.id}`} passHref>
                <div
                    className="flex flex-col gap-2"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >

                    <div>
                        <h3 className="text-xl font-extrabold my-2" tabIndex={0}>
                            {project.title}
                        </h3>
                        {project.technology.map((t, idx) =>
                            <TechnologyIcon technology={t} key={idx} />
                        )}
                        <p className="text-gray-500 text-sm mt-4" aria-label="Date">
                            {formattedDate}
                        </p>
                    </div>
                    <p className="my-4 text-lg sm:text-xl">
                        {project.shortContent}
                    </p>
                    <span className={`border-b-2 border-gray-900 hover:border-b-2 hover:border-gray-400 hover:text-gray-400`}>
                        <b>Read more &rarr;</b>
                    </span>

                    <Image
                        src={project.imgUrl}
                        priority={true}
                        alt="Example image from Picsum"
                        width={600}
                        height={384}
                        className={`rounded-xl w-full h-auto transition-all duration-500 ${isHovered ? 'transform scale-105' : ''}`}
                    />


                </div>
            </Link>
            <hr className="border-gray-300 my-8" />
        </>
    );
}

export default function Projects() {
    const [loading, setLoading] = useState(true);
    const [projectList, setProjectList] = useState<Project[]>([]);

    useEffect(() => {
        const fetchProjectData = async () => {
            try {
                const data = await fetchProjects();
                setProjectList(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching projects:', error);
                setLoading(false);
            }
        };

        fetchProjectData();

    }, []);


    if (loading) {
        return <ProjectListSkeleton />;
    }

    return (
        <>

            {projectList.map(p => (
                <ProjectListItem project={p} key={p.id} />
            ))}
        </>
    );
}
