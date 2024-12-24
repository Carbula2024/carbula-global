import { createLead } from './models/leadModel';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const id = await createLead(req.body);
            res.status(201).json({ success: true, id });
        } catch (error) {
            res.status(500).json({ success: false, error: error.message });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}