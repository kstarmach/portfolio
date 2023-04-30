import { JSXElementConstructor, ReactElement } from "react";
import { FaDatabase, FaReact, FaNodeJs, FaCss3Alt, FaHtml5, FaJsSquare } from 'react-icons/fa';
import { SiDotnet, SiMongodb, SiTypescript, SiDocker, SiGraphql, SiTailwindcss, SiMui } from 'react-icons/si';
import { TbBrandNextjs, TbBrandVercel } from "react-icons/tb";

interface Props {
    technology: string;
}

function getIconByTechnology(technology: string) {
    switch (technology) {
        case "GraphQL":
            return <SiGraphql className="w-4 h-4 mr-1" />;
        case "TypeScript":
            return <SiTypescript className="w-4 h-4 mr-1" />;
        case "React Native":
        case "ReactJS":
            return <FaReact className="w-4 h-4 mr-1" />;
        case "CI/CD":
        case "Containers":
            return <SiDocker className="w-4 h-4 mr-1" />;
        case "REST API":
        case "JavaScript":
            return <FaJsSquare className="w-4 h-4 mr-1" />;
        case "HTML":
            return <FaHtml5 className="w-4 h-4 mr-1" />;
        case "CSS":
            return <FaCss3Alt className="w-4 h-4 mr-1" />;
        case "ASP.NET MVC":
            return <SiDotnet className="w-4 h-4 mr-1" />;
        case "SQL Databases":
            return <FaDatabase className="w-4 h-4 mr-1" />;
        case "MongoDB":
            return <SiMongodb className="w-4 h-4 mr-1" />;
        case "Node.js":
            return <FaNodeJs className="w-4 h-4 mr-1" />;
        case "Next.JS":
            return <TbBrandNextjs className="w-4 h-4 mr-1" />;
        case "Vercel":
            return <TbBrandVercel className="w-4 h-4 mr-1" />;
        case "Tailwind CSS":
            return <SiTailwindcss className="w-4 h-4 mr-1" />;
        case "MUI":
            return <SiMui className="w-4 h-4 mr-1" />;
        default:
            return null;
    }
}

export default function TechnologyIcon({ technology }: Props) {
    const icon = getIconByTechnology(technology);

    return <span className="inline-flex m-1 items-center rounded-md bg-gray-50 px-2 py-2 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
        {icon}{technology}
    </span>;
}