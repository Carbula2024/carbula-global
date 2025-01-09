import styles from './aboutus.module.css'

const AboutUs = () => {
    return (
        <>
            <div className={styles.aboutus_container} id='sobre-nosotros'>
                <div className={styles.presentation_container}>
                    <div className={styles.presentation_text}>
                        <span>Sobre Cábula</span>
                        <h3>Conectamos vendedores y compradores desde 2019, con +3000 autos vendidos exitosamente!</h3>
                        <p>En Cárbula, te ofrecemos soluciones personalizadas para comprar y vender autos desde la comodidad de tu hogar. Podemos comprar tu auto de forma directa o ponértelo en consignación para obtener el mejor valor posible. Nuestro equipo profesional se encarga de todo, desde la evaluación hasta la negociación. También ofrecemos financiamiento y la opción de recibir tu auto como parte de pago.
                            <br /><br />
                            <span>Agenda una visita a nuestra nueva oficina en Las Condes.</span>
                        </p>
                    </div>
                    <div className={styles.presentation_video}>
                        <iframe
                            width="100%"
                            height="auto"
                            src="https://www.youtube.com/embed/hkyyrykxrZM?si=anENeeswL2-In7Zn&amp;controls=0&amp;rel=0"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AboutUs