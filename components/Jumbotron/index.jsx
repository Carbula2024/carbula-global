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
  </div>
  )

}

export default Jumbotron;