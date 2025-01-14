import React from "react";
import Link from 'next/link'
import styles from './toolbar.module.scss'
import classNames from 'classnames/bind';
import { getCatalogoURL, getCountryCode, getWhatsappNumber, getTiktokLink } from "../../utils/helpers";
import {useRouter} from 'next/router';


const SideDrawer = ({ show, click, }) => {
  const classNameContext = classNames.bind(styles)
  const router = useRouter()
  const COUNTRY_CODE= getCountryCode(router.locale)

  const sideDrawerClassname = classNameContext({
    'side-drawer': true,
    open: show
  })
  return (
    <nav className={sideDrawerClassname}>
      <img className={styles['side-drawer__logo']} src="/icons/carbula.svg" alt="Cárbula Autos"/>
      <div style={{ textAlign: 'center' }}>
        <ul>
          <li>
            <a href={getCatalogoURL(COUNTRY_CODE)} target="__blank">Catálogo</a>
          </li>
          {/*<li><a href="/">Vender</a></li>*/}
          <li><a href={ COUNTRY_CODE==='ar' ? '/creditos-para-autos' : `http://api.whatsapp.com/send?phone=${getWhatsappNumber(COUNTRY_CODE)}&text=Hola,%20necesito%20financiar%20la%20compra%20de%20un%20auto`}>Financiamiento</a></li>
          <li>
            <a href={`http://api.whatsapp.com/send?phone=${getWhatsappNumber(COUNTRY_CODE)}&text=Hola,%20tengo%20una%20consulta`} target="__blank">Contacto</a>
            <li>
              <a href="#sobre-nosotros">Sobre Nosotos</a>
            </li>
          </li>
          <li><a href="/preguntas-frecuentes">FAQs</a></li>
          <li>
          <div className={styles.icons_nav_side}>
        <a href="https://www.instagram.com/carbula.chile/" target="_blank" rel="noopener noreferrer">
          <img src="/icons/instagram.svg" alt="Instagram" className={styles.icon_insta_side} />
        </a>
        <a href={`http://api.whatsapp.com/send?phone=${getWhatsappNumber(COUNTRY_CODE)}&text=Hola,%20tengo%20una%20consulta`} target="_blank" rel="noopener noreferrer">
          <img src="/icons/whatsapp-white.svg" alt="WhatsApp" className={styles.icon_wsp_side} />
        </a>
        <a href={getTiktokLink(COUNTRY_CODE)} target="_blank" rel="noopener noreferrer">
          <img src="/icons/tiktokgray.svg" alt="Tiktok" className={styles.icon_tiktok_side} />
        </a>
      </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default SideDrawer