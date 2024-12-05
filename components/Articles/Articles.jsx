import { useState, useEffect } from 'react';
import ArticleCard from '../ArticleCard/ArticleCard'
import styles from './articles.module.css'



const Articles = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        // Cargar artículos desde el archivo JSON
        const fetchArticles = async () => {
            try {
                const response = await fetch('/articles/articles.json');
                const data = await response.json();
                setArticles(data.articles);
            } catch (error) {
                console.error('Error fetching articles:', error);
            }
        };

        fetchArticles();
    }, []);


    if (!articles || articles.length === 0) {
        return <div>No articles available.</div>;
    }

    const sortedArticles = [...articles].sort((a, b) => b.id - a.id).slice(0, 3);

    return (
        <>
            <div className={styles.content}>
                <h2>Artículos</h2>
                <div className={styles.card_articles_content}>
                    {sortedArticles.map((article) => (
                        <ArticleCard
                            key={article.id}
                            id={article.id}
                            urlimg={article.url}
                            title={article.title}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}
export default Articles