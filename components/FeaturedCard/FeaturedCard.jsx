import styles from './featuredcard.module.css'

const FeaturedCard = (car) =>{
    const {image, marca, modelo, ano, version, kms, precio} = car.car
    return(
    <>
    <div className={styles.card_container}>
        <div className={styles.img_container}>
        <img src={image} alt="image car" />
        </div>
        <div className={styles.text_container}>
        <span className={styles.subtitle}>{marca} {ano}</span>
        <span className={styles.title}>{modelo} {version}</span>
        <span>{kms}kms</span>
        <span className={styles.price}>${precio}</span>
        </div>
    </div>
    </>
    )
}
export default FeaturedCard