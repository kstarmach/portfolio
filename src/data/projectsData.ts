import { Project } from "../types/types";

const projectsData: Project[] = [
    {
        id: 'portfolio',
        title: 'Portfolio',
        technology: ['Next.JS', 'Vercel', 'Tailwind CSS', 'ReactJS', 'TypeScript'],
        content: 'Portfolio project built with Next.js, React.js, TypeScript, and Tailwind CSS. Hosted on Vercel. The website showcases my skills, projects, and experiences through an easy-to-navigate interface with responsive design.',
        shortContent: 'Personal portfolio website to test the Next.js and Tailwind CSS possibilities.',
        createDate: new Date('2023-04-20'),
        demoUrl: 'http://portfolio-kstarmach.vercel.app/',
        githubUrl: 'https://github.com/kstarmach/portfolio',
        imgUrl: '/portfolio-screenshot.png',
    },
    {
        id: 'every-day-checklist',
        title: 'Everyday Checklist',
        technology: ['ReactJS', 'TypeScript', 'REST API', 'MongoDB', 'Node.js', 'MUI'],
        content: 'Everyday Checklist is a web application built with ReactJS and TypeScript that allows users to create and manage daily to-do lists. The frontend has a modern UI design and leverages the power of ReactJS to provide a smooth user experience. Users can create accounts and log in to access their personalization lists. The application is built on a TypeScript and ExpressJS backend, and uses Mongoose to connect to a MongoDB database. It provides a reliable and scalable infrastructure to securely store user data. The main purpose of Every Day Checklist is to create a simple, yet effective, tool for users to track their daily tasks and build positive habits. Users can customize their to-do lists based on their daily routines and goals, and the application refreshes each day to provide a clean slate for new tasks. The platform also provides statistics to help users track their progress and stay motivated. Overall, Every Day Checklist is a powerful productivity tool that leverages the latest web technologies to help users build better habits and achieve their goals.',
        shortContent: 'Every Day Checklist is a ReactJS and TypeScript web application that allows users to create and manage daily to-do lists.',
        createDate: new Date("2023-03-29"),
        demoUrl: 'https://example.com/demo1',
        githubUrl: 'https://github.com/kstarmach/every-day-checklist',
        imgUrl: '/everyday-todo-screenshot.png',
    }

];

export default projectsData