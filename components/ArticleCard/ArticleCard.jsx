import styles from "./card.module.css"

const ArticleCard = ({ urlimg, title, id}) => {

    return (
      <a href={`/blog/${id}`} className={styles.card}>
        <div className={styles.card_image}>
          <img src={urlimg} alt={title} />
        </div>
        <h3>{title}</h3>
      </a>
    );
  };
  
  export default ArticleCard;