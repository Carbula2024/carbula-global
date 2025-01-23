import styles from './featured.module.css'
import FeaturedCard from '../FeaturedCard/FeaturedCard';
import { version } from 'react-dom/cjs/react-dom.production.min';

const Featured = () => {
    const data = [
        {
            id: 1,
            marca: "Toyota",
            modelo: "Auris",
            version: "Lei Cvt 1.6 Aut",
            ano: "2019",
            kms: "67.500",
            precio: "12.190.000",
            image: "/images/featured/auris.jpg",
            url:"https://auto.mercadolibre.cl/MLC-1565603227-toyota-auris-lei-cvt-16-aut-2019-_JM"
        },
        {
            id: 2,
            marca: "KIA",
            modelo: "Sportage",
            version: "EX 2.0L",
            ano: "2022",
            kms: "14.897",
            precio: "19.900.000",
            image: "/images/featured/KIA.webp",
            url: "https://auto.mercadolibre.cl/MLC-1541919849-kia-sportage-ex-20l-_JM"
        },
        {
            id: 3,
            marca: "Ford",
            modelo: "Edge",
            version: "Sel Ecoboost",
            ano: "2023",
            kms: "21 000",
            precio: "26.990.000",
            image: "/images/featured/ford.webp",
            url: "https://auto.mercadolibre.cl/MLC-1556810869-ford-edge-sel-ecoboost-_JM"
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