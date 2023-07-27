import { Project } from "@/types/types";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Head from 'next/head';
export default function PageTitle() {
    const [project, setProject] = useState<Project>();
    const router = useRouter();
    const segments = router.asPath.split("/").filter(Boolean);
    const firstSegment = segments[0];

    const pid = segments[1];

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

    let title =
        firstSegment === undefined
            ? 'Kamil Starmach'
            : firstSegment === 'about'
                ? 'About Me'
                : firstSegment === 'projects'
                    ? pid && project
                        ? project.title
                        : 'Projects'
                    : firstSegment;

    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <h1 className="text-3xl font-extrabold text-gray-900" tabIndex={0}>
                {title}
            </h1>
        </>
    )

}