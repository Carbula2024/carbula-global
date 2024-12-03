import React from 'react';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import styles from './blog.module.css'
import Jumbotron from '../../components/Jumbotron';
import Link from 'next/link';
import { getWhatsappNumber, getCountryCode, getInstagramLink, getTiktokLink } from '../../utils/helpers';
const Blog = () => {
  const router = useRouter();
  const { id } = router.query; // Extrae el ID desde la URL
  const [article, setArticle] = useState();
  const [content, setContent] = useState(''); // Contenido del artículo HTML
  const [articles, setArticles] = useState([])

  useEffect(() => {
    // Cargar artículos desde el archivo JSON
    const fetchArticles = async () => {
      try {
        const response = await fetch('/articles/articles.json');
        const data = await response.json();
        setArticles(data.articles);
        const foundArticle = data.articles.find((article) => article.id === Number(id));
        setArticle(foundArticle);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };

    fetchArticles();
  }, [id]);

  useEffect(() => {
    // Cargar contenido HTML del artículo
    const fetchArticleContent = async () => {
      if (!id) return;
      try {
        const response = await fetch(`/articles/articles/${id}.html`);
        if (!response.ok) {
          throw new Error(`Error fetching article content: ${response.statusText}`);
        }
        const text = await response.text();
        setContent(text); // Guardar contenido HTML
      } catch (error) {
        console.error('Error fetching article content:', error);
      }
    };

    fetchArticleContent();
  }, [id]);


  if (!article) {
    return <div>Article not found or loading...</div>;
  }

  // Aquí puedes hacer una petición para obtener el artículo según su ID
  return (
    <>
      <nav className={styles.nav}>
        <div><Link href="/">
          <div className={styles.img_logo}>
            <img src="/images/logo.svg" alt="Cárbula Autos" />
          </div></Link></div>
        <div className={styles.elements_nav}>
          <div>
            <div className={styles.toolbar__items}>
              {/* <a href={getCatalogoURL(COUNTRY_CODE)}target="__blank"><b>Comprar un auto</b></a> */}
              <a href="/"><b>Vender</b></a>
              <a href='https://listado.mercadolibre.cl/_Tienda_carbula' target="__blank"><b>Comprar</b></a>
              <a hidden={'cl' === 'pe' ? true : false} href={'cl' === 'ar' ? '/creditos-para-autos' : `http://api.whatsapp.com/send?phone=${getWhatsappNumber('cl')}&text=Hola,%20necesito%20financiar%20la%20compra%20de%20un%20auto`}><b>Financiamiento</b></a>
              <a href="#sobre-nosotros"><b>Nosotros</b></a>
              <a href="/preguntas-frecuentes"><b>FAQs</b></a>
              <a href={`http://api.whatsapp.com/send?phone=${getWhatsappNumber('cl')}&text=Hola,%20tengo%20una%20consulta`} target="__blank"><b>Contacto</b></a>
              {/* <Button><a href={getCatalogoURL(COUNTRY_CODE)} target="__blank">Comprar un auto</a></Button> */}
            </div>
          </div>
          <div className={styles.icons_nav}>
            <a href={getInstagramLink('cl')} target="_blank" rel="noopener noreferrer">
              <img src="/icons/instagram.svg" alt="Instagram" className={styles.icon_insta} />
            </a>
            <a href={`http://api.whatsapp.com/send?phone=${getWhatsappNumber('cl')}&text=Hola,%20tengo%20una%20consulta`} target="_blank" rel="noopener noreferrer">
              <img src="/icons/whatsapp-white.svg" alt="WhatsApp" className={styles.icon_wsp} />
            </a>
            <a href={getTiktokLink('cl')} target="_blank" rel="noopener noreferrer">
              <img src="/icons/tiktok.svg" alt="Tiktok" className={styles.icon_tiktok} />
            </a>
          </div>
        </div>
        <div className={styles.nav_bar}>
        <img src="/icons/nav-bar.svg" alt="Nav Bar" />
        </div>
      </nav >
      <div className={styles.banner}>
        <Jumbotron
          title={['Vende tu auto de forma segura.', 'Gana hasta un 25% más.']}
          subtitle={[
            'Garantizamos el cobro seguro de la venta de tu auto usado',
            'Tasamos tu auto y nos encargamos de todo el proceso',
            'Recibimos tu auto en parte de pago, sujeto a evaluación',
          ]}
          className={styles.customPadding}
        />
      </div>

      <div className={styles.blog}>
        <aside className={styles.aside}>
          <h3>articulos anteriores:</h3>
          <ul>
            {articles.map((article) => (
              <li><a href={`/blog/${article.id}`}><h4>{article.title}</h4></a></li>
            ))}
          </ul>
        </aside>
        <div className={styles.article_container}>
          <h2>{article.title}</h2><span>{article.fecha}</span>
          <img src={article.url} alt="imagen articulo" />
          <div className={styles.text_container} dangerouslySetInnerHTML={{ __html: content }}>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;