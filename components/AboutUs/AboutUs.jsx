import styles from './aboutus.module.css'

const AboutUs = () => {
    return (
        <>
            <div className={styles.aboutus_container} id='sobre-nosotros'>
                <div className={styles.presentation_container}>
                    <div className={styles.presentation_text}>
                        <span>Sobre Carbula</span>
                        <h3>Conectamos compradores y vendedores <b>en un entorno seguro y eficiente.</b> </h3>
                        <p>Hacemos que vender tu auto usado sea seguro y sencillo. Somos tu socio estratégico para vender tu auto de forma segura y eficiente. Comprendemos las dudas al vender un vehículo usado, por eso ofrecemos un proceso transparente y sin complicaciones, respaldado por un equipo profesional que se encarga de todo: desde la fotografía hasta la gestión de publicaciones y negociaciones. Además, si encuentras el auto de tus sueños en nuestro catálogo, podemos recibir tu auto como parte de pago y ayudarte con el financiamiento. Nuestro objetivo es proteger tus intereses, garantizar el mejor valor posible y brindarte una experiencia positiva, con respaldo constante y profesionalismo para tu tranquilidad.
                            CÁRBULA, establecidos desde 2018.</p>
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
                <div className={styles.contact_us}>
                    <div className={styles.img_container}>
                        <img src="/images/aboutus/Daniel.png" alt="Miembro del equipo" className={styles.img_us} />
                        <h3>Gerente comercial</h3>
                        <p className={styles.phone}><img src="/images/aboutus/phone.svg" alt="phone" />+56975867678</p>
                        <p className={styles.email}><img src="/images/aboutus/email.svg" alt="email" />daniel@carbula.com</p>
                    </div>
                    <div className={styles.img_container}>
                        <img src="/images/aboutus/Natasha.png" alt="Miembro del equipo" className={styles.img_us} />
                        <h3>Gerente marketing</h3>
                        <p className={styles.phone}><img src="/images/aboutus/phone.svg" alt="phone" />+56935317622</p>
                        <p className={styles.email}><img src="/images/aboutus/email.svg" alt="email" />natasha@carbula.com</p>
                    </div>
                    <div className={styles.img_container}>
                        <img src="/images/aboutus/Marcelo.png" alt="Miembro del equipo" className={styles.img_us} />
                        <h3>Gerente operaciones</h3>
                        <p className={styles.phone}><img src="/images/aboutus/phone.svg" alt="phone" />+56971550647</p>
                        <p className={styles.email}><img src="/images/aboutus/email.svg" alt="email" />marcelo@carbula.com</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AboutUs