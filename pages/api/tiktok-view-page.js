import axios from 'axios';

const TIKTOK_ACCESS_TOKEN = '96178e17fef8d3245a1af7ace0a97cc8bc4f1d0d'; // Reemplaza con tu Access Token
const tiktokpixelID = 'CSC5TTJC77U3K05H6C1G';         // Reemplaza con tu Pixel ID

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { url } = req.body;

        if (!url) {
          return res.status(400).json({ error: 'La URL es requerida' });
        }
        
        try {
            // Se agrega el código de prueba a la solicitud
            const response = await fetch('https://business-api.tiktok.com/open_api/v1.2/pixel/track/', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Access-Token': process.env.TIKTOK_ACCESS_TOKEN,  // Tu token de acceso
              },
              body: JSON.stringify({
                pixel_code: process.env.TIKTOK_PIXEL_ID,  // Tu ID de Pixel de TikTok
                event: 'PageView',  // El evento de tipo 'PageView'
                properties: {
                  url: window.location.href,  // La URL de la página actual
                },
                test_event_code: 'TEST04972', // El código de prueba proporcionado por TikTok
              }),
            });
      
            // Si la llamada a la API de TikTok falla
            if (!response.ok) {
              const errorData = await response.json();
              throw new Error(`Error al registrar evento: ${errorData.message || 'Desconocido'}`);
            }
      
            const data = await response.json();
            return res.status(200).json({ success: true, message: 'Evento de página registrado', data });
          } catch (error) {
            console.error('Error al procesar el evento:', error);
            return res.status(500).json({ error: error.message || 'Error al procesar el evento' });
          }
        } else {
          return res.status(405).json({ error: 'Método no permitido, solo POST' });
        }
      }