import { FaDatabase, FaReact, FaNodeJs, FaCss3Alt, FaHtml5, FaJsSquare } from 'react-icons/fa';
import { SiDotnet, SiMongodb, SiTypescript, SiDocker, SiGraphql } from 'react-icons/si';

interface Props {
    technology: string;
}

function getIconByTechnology(technology: string) {
    switch (technology) {
        case "GraphQL":
            return <SiGraphql />;
        case "TypeScript":
            return <SiTypescript />;
        case "React Native":
        case "ReactJS":
            return <FaReact />;
        case "CI/CD":
        case "Containers":
            return <SiDocker />;
        case "REST API":
        case "JavaScript":
            return <FaJsSquare />;
        case "HTML":
            return <FaHtml5 />;
        case "CSS":
            return <FaCss3Alt />;
        case "ASP.NET MVC":
            return <SiDotnet />;
        case "SQL Databases":
            return <FaDatabase />;
        case "MongoDB":
            return <SiMongodb />;
        case "Node.js":
            return <FaNodeJs />;
        default:
            return null;
    }
}

export default function TechnologyIcon({ technology }: Props) {
    const icon = getIconByTechnology(technology);
    return icon;
}