import axios from 'axios';

const TIKTOK_ACCESS_TOKEN = '96178e17fef8d3245a1af7ace0a97cc8bc4f1d0d'; // Reemplaza con tu Access Token
const tiktokpixelID = process.env.NEXT_PUBLIC_TIKTOK_PIXEL_ID;         // Reemplaza con tu Pixel ID

export default async function handler(req, res) {
    if (req.method === 'POST') {
      try {
        const event = {
          pixel_code: tiktokpixelID,
          event: "ViewPage",
          timestamp: Math.floor(Date.now() / 1000),
          context: {
            user: {
              external_id: req.body.userId || "user123",
            },
            page: {
              url: req.body.url || "https://example.com/page",
            }
          }
        };
  
        const response = await axios.post(
          'https://business-api.tiktok.com/open_api/v1.3/events/track/',
          {
            pixel_code: TIKTOK_PIXEL_ID,
            event: "ViewPage",
            event_data: event,
          },
          {
            headers: {
              'Access-Token': TIKTOK_ACCESS_TOKEN,
              'Content-Type': 'application/json',
            },
          }
        );
  
        res.status(200).json({ success: true, data: response.data });
      } catch (error) {
        console.error('Error al enviar evento a TikTok:', error);
        res.status(500).json({ success: false, error: error.message });
      }
    } else {
      res.status(405).json({ error: 'Método no permitido' });
    }
  }