import { NextApiRequest, NextApiResponse } from 'next';
import projectsData from '../../data/projectsData'
import { Project } from '@/pages/types';


export default function handler(req: NextApiRequest, res: NextApiResponse<Project>) {
    const { pid } = req.query;
    // Fetch data based on the pid parameter
    const p = projectsData.find(p => p.id === pid);
    if (!p) {
        throw new Error('s')
    }
    const data: Project = p;

    // Return the data as JSON
    res.status(200).json(data);
}