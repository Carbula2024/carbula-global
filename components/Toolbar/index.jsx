import { useState, useEffect } from "react";
import DrawerToggleButton from './DrawerToggleButton';
import Link from 'next/link';
import Button from '../Button';
import styles from './toolbar.module.scss';
import classNames from 'classnames/bind';
import { useSpring } from 'react-spring';
import { getCatalogoURL, getCountryCode, getWhatsappNumber, getInstagramLink, getTiktokLink } from "../../utils/helpers";
import { useRouter } from 'next/router';

const Toolbar = ({ drawerClickHandler }) => {
  // const [isTop, setIsTop] = useState('');
  const router = useRouter()
  const COUNTRY_CODE = getCountryCode(router.locale)
  const [sideMenu, setSideMenu] = useState(false);

  const classNameContext = classNames.bind(styles)

  const toolbarClassName = classNameContext({
    toolbar: true,
    gradient: true
  })

  const props = useSpring({
    from: { transform: 'translate3d(0px,-20px,0)', opacity: 0 },
    opacity: 1, transform: 'translate3d(0,0px,0)',
  })

  // useEffect(() => {
  //   document.addEventListener("scroll", () => {
  //     setIsTop(window.scrollY < 50)
  //   });
  //   return () => document.removeEventListener("scroll", this);
  // })

  const toggleMenu = () => setSideMenu(!sideMenu)

  return (
    <header className={toolbarClassName}>
      <div className={styles['toolbar__container-items']} style={props}>
        <div><Link href="/">
          <div className={styles.toolbar__logo}>
            <img src="/images/logo.svg" alt="Cárbula Autos" />
          </div></Link></div>
        <div className={styles.spacer} />
        <div className={styles.toolbar__items}>
          {/* <a href={getCatalogoURL(COUNTRY_CODE)}target="__blank"><b>Comprar un auto</b></a> */}
          <a href="/"><b>Vender</b></a>
          <a href='https://listado.mercadolibre.cl/_Tienda_carbula' target="__blank"><b>Comprar</b></a>
          <a hidden={COUNTRY_CODE === 'pe' ? true : false} href={COUNTRY_CODE === 'ar' ? '/creditos-para-autos' : `http://api.whatsapp.com/send?phone=${getWhatsappNumber(COUNTRY_CODE)}&text=Hola,%20necesito%20financiar%20la%20compra%20de%20un%20auto`}><b>Financiamiento</b></a>
          <a href="#sobre-nosotros"><b>Nosotros</b></a>
          <a href="/preguntas-frecuentes"><b>FAQs</b></a>
          <a href={`http://api.whatsapp.com/send?phone=${getWhatsappNumber(COUNTRY_CODE)}&text=Hola,%20tengo%20una%20consulta`} target="__blank"><b>Contacto</b></a>
          {/* <Button><a href={getCatalogoURL(COUNTRY_CODE)} target="__blank">Comprar un auto</a></Button> */}
        </div>
      </div>
      <div className={styles.icons_nav}>
        <a href={getInstagramLink(COUNTRY_CODE)} target="_blank" rel="noopener noreferrer">
          <img src="/icons/instagram.svg" alt="Instagram" className={styles.icon_insta} />
        </a>
        <a href={`http://api.whatsapp.com/send?phone=${getWhatsappNumber(COUNTRY_CODE)}&text=Hola,%20tengo%20una%20consulta`} target="_blank" rel="noopener noreferrer">
          <img src="/icons/whatsapp-white.svg" alt="WhatsApp" className={styles.icon_wsp} />
        </a>
        <a href={getTiktokLink(COUNTRY_CODE)} target="_blank" rel="noopener noreferrer" className={styles.icon_disp_none}>
          <img src="/icons/tiktok.svg" alt="Tiktok" className={styles.icon_tiktok} />
        </a>
      </div>
      <div className={styles['toolbar__toggle-button']}>
        <DrawerToggleButton click={drawerClickHandler} />
      </div>
    </header>
  )
}
export default Toolbar