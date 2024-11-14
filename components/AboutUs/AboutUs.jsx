import styles from './aboutus.module.css'

const AboutUs = () => {
    return (
        <>
            <div className={styles.aboutus_container}>
            <h3>Sobre nosotros</h3>
                <div className={styles.presentation_container}>
                    <div className={styles.presentation_text}>
                    <h3>Quienes somos</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Libero natus quae maxime labore voluptate
                            corporis, ipsa impedit! Quos, officiis iste harum
                            saepe quae nisi suscipit dolores quod fugit rerum
                            ipsam officia magnam obcaecati eum assumenda?
                            Aperiam, dolore. Cumque modi libero illum quibusdam
                            culpa rem voluptatem dolores repellendus, odio
                            tempora alias!</p>
                    </div>
                    <video width="100%" controls className={styles.presentation_video}>
                        <source src='/videos/presentacion.mp4' type="" />
                        Tu navegador no soporta la etiqueta de video.
                    </video>
                </div>
                <div className={styles.contact_us}>
                    <div className={styles.img_container}>
                    <img src="/images/aboutus/Daniel.png" alt="" className={styles.img_us} />
                    <p>Teléfono: <a href="tel:+1234567890">+1 234 567 890</a></p>
                    <p>Email: <a href="mailto:contacto1@example.com">correo@carbula.com</a></p>
                    </div>
                    <div className={styles.img_container}>
                    <img src="/images/aboutus/Natasha.png" alt="" className={styles.img_us} />
                    <p>Teléfono: <a href="tel:+1234567890">+1 234 567 890</a></p>
                    <p>Email: <a href="mailto:contacto1@example.com">correo@carbula.com</a></p>
                    </div>
                    <div className={styles.img_container}>
                    <img src="/images/aboutus/Marcelo.png" alt="" className={styles.img_us} />
                    <p>Teléfono: <a href="tel:+1234567890">+1 234 567 890</a></p>
                    <p>Email: <a href="mailto:contacto1@example.com">correo@carbula.com</a></p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AboutUs