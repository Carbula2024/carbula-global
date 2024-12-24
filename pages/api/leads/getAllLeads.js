import { getAllLeads } from './models/leadModel';

export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            const leads = await getAllLeads();
            res.status(200).json({ success: true, leads });
        } catch (error) {
            res.status(500).json({ success: false, error: error.message });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}