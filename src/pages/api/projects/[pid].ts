import { NextApiRequest, NextApiResponse } from 'next';
import projectsData from '../../../data/projectsData'
import { Project } from '../../../types/types';


export default function handler(req: NextApiRequest, res: NextApiResponse<Project>) {
    const { pid } = req.query;
    // Fetch data based on the pid parameter
    if (!pid) { return res.status(400) }

    const data = projectsData.find(p => p.id === pid)

    if (data) {
        return res.status(200).json(data);
    }

}