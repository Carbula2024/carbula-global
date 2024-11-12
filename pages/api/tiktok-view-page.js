
const tiktokAccessToken = process.env.TIKTOK_ACCESS_TOKEN;
const tiktokPixelId = process.env.TIKTOK_PIXEL_ID;

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { url, userAgent, referrer } = req.body;

        if (!url) {
          return res.status(400).json({ error: 'La URL es requerida' });
        }

        try {
          console.log(tiktokAccessToken, tiktokPixelId)
            // Se agrega el código de prueba a la solicitud
            const response = await fetch('https://business-api.tiktok.com/open_api/v1.3/pixel/track/', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Access-Token': tiktokAccessToken,  // Tu token de acceso
              },
              body: JSON.stringify(
              {
                pixel_code: tiktokPixelId,
                event: "Page View",
                context: {
                  page: {
                    url: url,
                    referrer: referrer
                  },
                  user_agent: userAgent
                }
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