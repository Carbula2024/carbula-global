import { setEstadoLead } from './models/leadModel';

export default async function handler(req, res) {
    if (req.method === 'PUT') {
        try {
            const { id, estado } = req.body;
            const result = await setEstadoLead(id, estado);
            res.status(200).json(result);
        } catch (error) {       
            console.log(error)
            res.status(500).json({ success: false, error: error.message });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}