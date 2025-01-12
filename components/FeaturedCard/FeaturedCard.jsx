import styles from './featuredcard.module.css'

const FeaturedCard = (car) =>{
    const {image, marca, modelo, ano, kms, precio} = car.car
    return(
    <>
    <div className={styles.card_container}>
        <div className={styles.img_container}>
        <img src={image} alt="image car" />
        </div>
        <div className={styles.text_container}>
        <span className={styles.title}>{marca} {modelo}</span>
        <span className={styles.title}>{ano}</span>
        <span></span>
        <span>{kms}kms</span>
        <span>${precio}</span>
        </div>
    </div>
    </>
    )
}
export default FeaturedCard