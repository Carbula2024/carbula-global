import styles from './widget.module.css'
import { useEffect } from 'react';
const Widget = () =>{
    useEffect(() => {
        const nextButton = document.getElementById('autored-tab-3'); // ID del botón "Siguiente"
    
        if (nextButton) {
          nextButton.addEventListener('click', () => {
            gtag_report_conversion();
            const script = document.createElement('script');
            script.src = 'https://embeddable.autored.cl/loader.js';
            script.async = true;
            document.body.appendChild(script);
          });
        }
    
        // Limpieza: remueve el evento cuando el componente se desmonta
        return () => {
          if (nextButton) {
            nextButton.removeEventListener('click', () => {
            });
          }
        };
      }, []); // Solo se ejecuta una vez cuando el componente se monta
    
    return(
        <>
        <h3 className={styles.title_cotizer}>Cotiza tu auto</h3>
        <div style={{width: '100%', height: '100%'}} id="autored-frame"></div>
        <script type="text/javascript" src="https://embeddable.autored.cl/loader.js"></script>
        </>
    )
}
export default Widget