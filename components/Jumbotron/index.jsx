import { Fragment } from 'react';
import styles from './jumbotron.module.scss';

const Jumbotron = ({ title, subtitle, className }) => {
  return (
    <div className={`${styles.jumbotron__container} ${className}`}>
      <div className={styles.text__container}>
        <h2 className={styles.title}>{title[0]}<br />{title[1]}</h2>
        <p className={styles.subtitle}><ul className={styles.list_jumbotron}>{subtitle.map(element => <Fragment><li><img src="./../icons/check.svg" alt="" />{element}</li></Fragment>)}</ul></p>
      </div>
      <img className={styles.banner_desktop} src="/images/banner/desktop.png" alt="" />
      <img className={styles.banner_mobile} src="/images/banner/mobile.png" alt="" />
    </div>
  )

}

export default Jumbotron;