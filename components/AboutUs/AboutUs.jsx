import styles from './aboutus.module.css'

const AboutUs = () => {
    return (
        <>
            <div className={styles.aboutus_container} id='sobre-nosotros'>
                <h2>Sobre nosotros</h2>
                <div className={styles.presentation_container}>
                    <div className={styles.presentation_text}>
                        <h3>Quienes somos</h3>
                        <p>Hacemos que vender tu auto sea seguro y sencillo. Somos tu socio estratégico para vender tu auto de forma segura y eficiente. Comprendemos las dudas al vender un vehículo usado, por eso ofrecemos un proceso transparente y sin complicaciones, respaldado por un equipo profesional que se encarga de todo: desde la fotografía hasta la gestión de publicaciones y negociaciones. Nuestro objetivo es proteger tus intereses, garantizar el mejor valor posible y brindarte una experiencia positiva, con respaldo constante y profesionalismo para tu tranquilidad.
                        CÁRBULA, establecidos desde 2018.</p>
                    </div>
                    <video  controls className={styles.presentation_video}>
                        <source src='/videos/presentacion.mp4' type="video/mp4" />
                        Tu navegador no soporta la etiqueta de video.
                    </video>
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