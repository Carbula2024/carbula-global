import jwt from 'jsonwebtoken';

const key_jwt = process.env.KEY_JWT;
const user = process.env.USER;
const pass = process.env.PASS;

export default function handler(req, res) {
    if (req.method === 'POST') {
        const { username, password } = req.body;

        // Verifica las credenciales (esto es solo un ejemplo)
        if (username === user && password === pass) {
            const token = jwt.sign({ username }, key_jwt, { expiresIn: '1h' });
            // Configura la cookie con HttpOnly
            res.setHeader('Set-Cookie', `auth=${token}; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=3600`);

            return res.status(200).json({ message: 'Autenticación exitosa' });
        }

        return res.status(401).json({ message: 'Credenciales incorrectas' });
    }

    res.status(405).json({ message: 'Método no permitido' });
}