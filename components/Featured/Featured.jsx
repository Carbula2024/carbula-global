import styles from './featured.module.css'
import FeaturedCard from '../FeaturedCard/FeaturedCard';

const Featured = () => {
    const data = [
        {
            id: 1,
            marca: "Toyota",
            modelo: "Auris",
            ano: "2019",
            kms: "67.500",
            precio: "12.190.000",
            image: "/images/featured/auris.jpg",
            url:"https://auto.mercadolibre.cl/MLC-1565603227-toyota-auris-lei-cvt-16-aut-2019-_JM"
        },
        {
            id: 2,
            marca: "Jaguar",
            modelo: "XF",
            ano: "2018",
            kms: "29.500",
            precio: "28.990.000",
            image: "/images/featured/jaguar.webp",
            url: "https://auto.mercadolibre.cl/MLC-2829762764-jaguar-xf-30-sc-s-_JM"
        },
        {
            id: 3,
            marca: "Toyota",
            modelo: "Yaris",
            ano: "2017",
            kms: "72.000",
            precio: "7.990.000",
            image: "/images/featured/yaris.jpg",
            url: "https://auto.mercadolibre.cl/MLC-1564659859-toyota-yaris-sport-15-_JM"
        }
    ];

    return (
        <>
            <div className={styles.featured_container}>
                <h3 className={styles.title_featured}>Destacados de la semana</h3>
                <div className={styles.carousel}>
                    <div className={styles.carousel_track}>
                        {data.map((car) =>
                        (<>
                        <a href={car.url} className={styles.container_item_carruel}>
                        <FeaturedCard key={car.id} car={car}></FeaturedCard>
                        </a>
                        </>)
                        )}
                    </div>
                </div>
            </div>

        </>
    )
}
export default Featured