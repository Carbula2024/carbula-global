import { Fragment } from 'react';
import styles from './jumbotron.module.scss';

const newSubtitle = [
  "Transferimos autos a través de Autofact de manera 100% digital y segura.",
  "Tasamos y verificamos el estado y kilometraje de cada auto con Autored.",
  "Recibimos tu auto en parte de pago, sujeto a evaluación."
];

const Jumbotron = ({ title, subtitle, className }) => {
  return (
    <div className={`${styles.jumbotron__container} ${className}`}>
      <div className={styles.text__container}>
        <h2 className={styles.title}>{title[0]}<br />{title[1]}</h2>
        <h2 className={styles.title_mobile}>Compra o vende tu auto con Cárbula! </h2>
        <p className={styles.subtitle}><ul className={styles.list_jumbotron}>{newSubtitle.map(element => <Fragment><li><img src="./../icons/check.svg" alt="" />{element}</li></Fragment>)}</ul></p>
        <p className={styles.subtitle_mobile}>
          <ul className={styles.list_jumbotron_mobile}>
            <li><a href="#autored-tab-content">Quiero vender mi auto</a></li>
            <li><a href="https://listado.mercadolibre.cl/_Tienda_carbula">Busco mi próximo auto</a></li>
          </ul>
          </p>
      </div>
      <img className={styles.banner_desktop} src="/images/banner/desktop.png" alt="" />
      <img className={styles.banner_mobile} src="/images/banner/mobile.png" alt="" />
    </div>
  )

}

export default Jumbotron;