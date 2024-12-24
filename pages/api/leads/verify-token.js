import jwt from 'jsonwebtoken';
const key_jwt = process.env.KEY_JWT;

export default function handler(req, res) {
    try {
        // Verificar que la cookie existe
        if (!req.cookies || !req.cookies.auth) {
            return res.status(401).json({ message: 'No autenticado: Cookie no encontrada' });
        }

        const token = req.cookies.auth;

        // Verificar el token
        const decoded = jwt.verify(token, key_jwt);

        // Respuesta exitosa si el token es válido
        return res.status(200).json({ isValid: true, user: decoded });
    } catch (error) {
        // Manejo de errores específicos
        if (error.name === 'JsonWebTokenError') {
            return res.status(401).json({ message: 'Token inválido' });
        }
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({ message: 'Token expirado' });
        }

        // Error genérico
        return res.status(500).json({ message: 'Error al procesar la solicitud' });
    }
}