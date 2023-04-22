
import { NextApiRequest, NextApiResponse } from 'next';
import projectsData from '../../data/projectsData'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        // Return the list of projects as JSON
        res.status(200).json(projectsData);
    } else {
        // Handle other HTTP methods
        res.status(405).json({ message: 'Method not allowed' });
    }
}