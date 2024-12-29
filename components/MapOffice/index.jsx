import styles from './mapoffice.module.css'
const Office = () => {
  return (
    <>
      <div className={styles.map_container}>
        <div className={styles.text_office}>
          <h2>Visítanos en nuestra nueva oficina</h2>
        </div>
        <div style={{ position: 'relative', width: '100%' }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3330.910197584984!2d-70.5720901!3d-33.39950699999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662ced79704a3f1%3A0x6e907a877de505f3!2sAv.%20Manquehue%20Nte.%20958%2C%20Las%20Condes%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses-419!2scl!4v1735436519763!5m2!1ses-419!2scl"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              border: 0,
            }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </>
  )
}
export default Office