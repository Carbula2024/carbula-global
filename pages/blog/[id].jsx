import React from 'react';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import styles from './blog.module.css'

const Blog = () => {
  const router = useRouter();
  const { id } = router.query; // Extrae el ID desde la URL
  const [article, setArticle] = useState();
  const [content, setContent] = useState(''); // Contenido del artículo HTML

  useEffect(() => {
    // Cargar artículos desde el archivo JSON
    const fetchArticles = async () => {
      try {
        const response = await fetch('/articles/articles.json');
        const data = await response.json();
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
      <div className={styles.article_container}>
        <h2>{article.title}</h2>
        <img src={article.url} alt="imagen articulo" />
        <div className={styles.text_container} dangerouslySetInnerHTML={{ __html: content }}>          
        </div>
      </div>
    </>
  );
};

export default Blog;