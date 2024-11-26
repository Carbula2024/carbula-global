import styles from "./card.module.css"

const ArticleCard = (urlimg, title) =>{
    return(
        <>
        <div className={styles.card}>
            <img src={urlimg} alt="" />
            <span>{title}</span>
        </div>
        </>
    )
}
export default ArticleCard 