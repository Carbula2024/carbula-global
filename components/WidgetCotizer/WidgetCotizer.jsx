import styles from './widget.module.css'
const WidgetCotizer = () => {
    return (
        <>
            <div className={styles.widget_container}>
                <div style={{ width: '100%', height: '100%' }} id='autored-frame'></div>
                <script type="text/javascript" src="https://embeddable.autored.cl/loader.js"></script>
            </div>
        </>
    )
}
export default WidgetCotizer