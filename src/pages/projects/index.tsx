import TechnologyIcon from "@/components/TechnologyIcon";
import { ProjectListSkeleton, ProjectSkeleton } from "@/components/skeletons";
import { fetchProjects } from "@/lib/data";
import { Project } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Projects',
};


function ProjectListItem({ project }: { project: Project }) {
    const [isHovered, setIsHovered] = useState(false);
    const formattedDate = new Date(project.createDate).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });

    return (
        <>
            <Link
                href={`/projects/${project.id}`}
                passHref
                className=" rounded-lg  cursor-pointer flex flex-col gap-2"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >

                <h3 className="text-xl font-extrabold " tabIndex={0}>
                    {project.id}
                </h3>
                <div className="flex ">
                    {project.technology.map((t, idx) =>
                        <TechnologyIcon technology={t} key={idx} />
                    )}
                </div>

                <p className="text-gray-500 text-sm " aria-label="Date">
                    {formattedDate}
                </p>

                <p className=" text-lg sm:text-xl">
                    {project.shortContent}
                </p>

                <span className={`mb-4 hover:text-gray-400`}>
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



            </Link>

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
            {projectList.map((p, index) => (
                <div key={p.id}>
                    <ProjectListItem project={p} />
                    {index !== projectList.length - 1 && <hr className="border-gray-300 my-8" />}
                </div>
            ))}
        </>
    );

}
