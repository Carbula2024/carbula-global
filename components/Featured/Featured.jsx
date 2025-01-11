import styles from './featured.module.css'
import Jumbotron from '../Jumbotron/index'

const Featured = () =>{
    return(
        <>
        <div className={styles.carousel}>
        <div className={styles.carousel_track}>
            <div className={styles.img_container} >
                <a href=""><img src="/images/featured/1.JPG" alt="" className={styles.img_us}/></a>
                <button className={styles.btn_details}>detalles</button>
            </div>
            <div className={styles.img_container}>
                <a href=""><img src="/images/featured/2.JPG" alt="" className={styles.img_us}/></a>
                <button className={styles.btn_details}>detalles</button>
            </div>
            <div className={styles.img_container}>
                <a href=""><img src="/images/featured/3.JPG" alt="" className={styles.img_us}/></a>
                <button className={styles.btn_details}>detalles</button>
            </div>
        </div>
    </div>
    </>
    )
}
export default Featured