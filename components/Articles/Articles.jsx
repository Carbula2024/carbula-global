
import ArticleCard from '../ArticleCard/ArticleCard'

const Articles = () =>{
    console.log('Received articles:', articles);  // Check what is being passed
    if (!articles || articles.length === 0) {
        return <div>No articles available.</div>;
    }
    return(
        <>
        <div>
            <h2>Lista de Articulos</h2>
            <div>
                {articles.map((article)=>(
                    <ArticleCard
                    key={article.id}
                    urlimg={article.photoName}
                    title={article.title}
                />
                ))}
            </div>
        </div>
        </>
    )
}
export default Articles