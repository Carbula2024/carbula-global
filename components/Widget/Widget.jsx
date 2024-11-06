import styles from './widget.module.css'
const Widget = () =>{
    return(
        <>
        <h3 className={styles.title_cotizer}>Cotiza tu vehículo</h3>
        <div style={{width: '100%', height: '100%'}} id="autored-frame"></div>
        <script type="text/javascript" src="https://embeddable.autored.cl/loader.js"></script>
        </>
    )
}
export default Widget