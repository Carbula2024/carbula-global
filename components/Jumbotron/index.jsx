import { Fragment } from 'react';
import styles from './jumbotron.module.scss';

const Jumbotron = () => {
  return (
    <div className={styles.banner}>
    <div className={styles.banner_desktop}>
      {/* Banner para pantallas grandes */}
      <img
        src="/images/banner/desktop.png"
        alt="Banner Desktop"
        className={styles.banner_image}
      />
    </div>
    <div className={styles.banner_mobile}>
      {/* Banner para pantallas móviles */}
      <img
        src="/images/banner/mobile.png"
        alt="Banner Mobile"
        className={styles.banner_image}
      />
    </div>
    <div className={styles.overlay}>
      <div className={styles.text_container}>
      <h2>Vende tu auto de forma segura</h2>
      <ul>
        <li><p className={styles.nowrap}>Gana hasta un 25% más</p></li>
        <li><p className={styles.nowrap}>Garantizamos el cobro seguro de la venta</p></li>
        <li><p className={styles.wrap}>Recibimos tu auto en parte de pago, sujeto a evaluación</p></li>
      </ul>
      </div>
      <div className={styles.text_container_mobile}>
        <p className={styles.wrap}>Vende tu auto de forma segura.
        Gana hasta un 25% más.</p>
      </div>
      </div>
    </div>
  )

}

export default Jumbotron;