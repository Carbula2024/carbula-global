import styles from './aboutus.module.css'

const AboutUs = () => {
    return (
        <>
            <div className={styles.aboutus_container}>
                <h3>Sobre nosotros</h3>
                <div className={styles.presentation_container}>
                    <div className={styles.presentation_text}>
                        <h3>Quienes somos</h3>
                        <p>En Cárbula, estamos comprometidos con la compraventa de vehículos en consignación, facilitando todo el proceso desde la comodidad de tu hogar. Nuestro equipo de expertos se dedica a ofrecer un servicio transparente, seguro y eficiente, conectando a vendedores y compradores de manera confiable. Con Cárbula, puedes gestionar la venta o compra de tu vehículo sin complicaciones, aprovechando nuestra plataforma innovadora y el soporte personalizado de nuestros profesionales. ¡Conócenos y descubre cómo hacemos que la experiencia de adquirir o vender tu vehículo sea sencilla y satisfactoria!</p>
                    </div>
                    <video width="100%" controls className={styles.presentation_video}>
                        <source src='/videos/presentacion.mp4' type="" />
                        Tu navegador no soporta la etiqueta de video.
                    </video>
                </div>
                <div className={styles.contact_us}>
                    <div>
                        <img src="/images/aboutus/Daniel.png" alt="" className={styles.img_us} />
                        <div className={styles.info_container}>
                        <p className={styles.phone}><img src="/images/aboutus/phone.svg" alt="" /><a href="">+1 234 567 890</a></p>
                        <p className={styles.email}><img src="/images/aboutus/email.svg" alt="" /><a href="">correo@carbula.com</a></p>
                        </div>
                    </div>
                    <div>
                        <img src="/images/aboutus/Natasha.png" alt="" className={styles.img_us} />
                        <p className={styles.phone}><img src="/images/aboutus/phone.svg" alt="" /><a href="">+1 234 567 890</a></p>
                        <p className={styles.email}><img src="/images/aboutus/email.svg" alt="" /><a href="">correo@carbula.com</a></p>
                    </div>
                    <div>
                        <img src="/images/aboutus/Marcelo.png" alt="" className={styles.img_us} />
                        <p className={styles.phone}><img src="/images/aboutus/phone.svg" alt="" /><a href="">+1 234 567 890</a></p>
                        <p className={styles.email}><img src="/images/aboutus/email.svg" alt="" /><a href="">correo@carbula.com</a></p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AboutUs