import styles from './contactus.module.css'

const ContactUs = () =>{
    return(
        <>
            <div className={styles.carousel}>
        <div className={styles.carousel_track}>
            <div className={styles.img_container}>
                <img src="/images/aboutus/Daniel.png" alt="Miembro del equipo" className={styles.img_us} />
                <h3>Gerente Comercial</h3>
                <p className={styles.phone}><img src="/images/aboutus/phone.svg" alt="phone" />+56975867678</p>
                <p className={styles.email}><img src="/images/aboutus/email.svg" alt="email" />daniel@carbula.com</p>
            </div>
            <div className={styles.img_container}>
                <img src="/images/aboutus/esme.png" alt="Miembro del equipo" className={styles.img_us} />
                <h3>Gerente Digital</h3>
                <p className={styles.phone}><img src="/images/aboutus/phone.svg" alt="phone" />+56987660071</p>
                <p className={styles.email}><img src="/images/aboutus/email.svg" alt="email" />esmeralda.sayagues@gmail.com</p>
            </div>
            <div className={styles.img_container}>
                <img src="/images/aboutus/Marcelo.png" alt="Miembro del equipo" className={styles.img_us} />
                <h3>Gerente Operaciones</h3>
                <p className={styles.phone}><img src="/images/aboutus/phone.svg" alt="phone" />+56971550647</p>
                <p className={styles.email}><img src="/images/aboutus/email.svg" alt="email" />marcelo@carbula.com</p>
            </div>
        </div>
    </div>
        </>
    )
}
export default ContactUs