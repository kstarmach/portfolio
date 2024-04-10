import { Project } from "@/types/types";

export async function fetchProjects(): Promise<Project[]> {
    const res = await fetch(`/api/projects`);
    const projectData = await res.json();
    return projectData;
}
