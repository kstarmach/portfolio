import { Project } from "@/types/types";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function PageTitle() {
    const [project, setProject] = useState<Project>();
    const router = useRouter();
    const segments = router.asPath.split("/").filter(Boolean);
    const firstSegment = segments[0];

    const pid = segments[1];

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

    return <h1 className="text-3xl font-extrabold text-gray-900">{title}</h1>
}