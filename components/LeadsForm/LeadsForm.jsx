import { useState } from "react";
import styles from './leadsForm.module.css'
import { filter } from "lodash";
const LeadsForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    nombre_del_propietario: '',
    numero_de_telefono: '+569',
    correo: '',
    marca: 'Acura',
    modelo: '',
    version: '',
    ano: '2020',
    numero_de_placa: '',
    kilometraje: '',
    tipo_de_combustible: 'gasolina',
    numero_de_duenos: '1',
    transmision: 'automatico',
    precio_esperado: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Validar campos de la etapa actual
  const validateStep = () => {
    if (step === 1) {
      return formData.nombre_del_propietario && formData.correo && formData.numero_de_telefono;
    }
    if (step === 2) {
      return formData.marca && formData.numero_de_placa && formData.ano && formData.modelo && formData.kilometraje;
    }
    if (step === 3) {
      return formData.version && formData.precio_esperado && formData.transmision && formData.tipo_de_combustible && formData.numero_de_duenos;
    }
    return false;
  };



  // Ir al siguiente paso
  const nextStep = (e) => {
    if (validateStep()) {
      let error = true
      console.log(formData.numero_de_telefono.length)
      if (formData.numero_de_telefono.length !== 12) {
        e.preventDefault();
        error = false;
        alert('El numero de telefono no tiene el largo requerido');
      }
      if (formData.ano < 2012) {
        e.preventDefault();
        error = false;
        alert('El año del auto debe ser mayor a 2012')
      }
      if (formData.kilometraje > 140000) {
        e.preventDefault();
        error = false;
        alert('el auto debe tener menos de 140000 kms')
      }
      if (error) {
        setStep(step + 1);
      }
    } else {
      alert("Por favor completa todos los campos requeridos.");
    }
  };

  // Regresar al paso anterior
  const prevStep = (e) => {
    e.preventDefault();
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos del formulario:', formData);
    fetch("/api/leads/createLead", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Error en la solicitud');
        }
        return response.json();
      })
      .then(data => {
        console.log('Respuesta de la API:', data);
        nextStep()
        alert('se envio')
      })
      .catch(error => {
        console.error('Error al hacer la consulta:', error);
      });
  };

  switch (step) {
    case 1:
      return (
        <>
          <h2 className={styles.title_leadsForm}>¿Quieres vender tu auto?<br />
            ¡Completa este formulario y te contactaremos hoy mismo!</h2>
          <form className={styles.form}>
            <h3>Te Contactaremos lo antes posible</h3>
            <div className={styles.input_grup}>
              <label className={styles.label} htmlFor="nombre_del_propietario">Nombre: </label>
              <input
                type="text"
                id="nombre_del_propietario"
                name="nombre_del_propietario"
                value={formData.nombre_del_propietario}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.input_grup}>
              <label className={styles.label} htmlFor="numero_de_telefono">Telefono: </label>
              <input
                type="tel"
                id="numero_de_telefono"
                name="numero_de_telefono"
                value={formData.numero_de_telefono}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.input_grup}>
              <label className={styles.label} htmlFor="correo">Correo: </label>
              <input
                type="email"
                id="correo"
                name="correo"
                value={formData.correo}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.button_grup}>
              <button className={styles.btn_form} onClick={nextStep}>Siguiente</button>
            </div>
          </form>
        </>
      )
      break;
    case 2:
      return (
        <>
          <h2 className={styles.title_leadsForm}>¿Quieres vender tu auto?<br />
            ¡Completa este formulario y te contactaremos hoy mismo!</h2>
          <form className={styles.form}>
            <h3>¿Que auto tienes?</h3>
            <div className={styles.input_grup}>
              <label className={styles.label} htmlFor="marca">Marca: </label>
              <select
                id="marca"
                name="marca"
                value={formData.marca}
                onChange={handleChange}
                required
              >
                <option value="Acura">ACURA</option>
                <option value="Alfa romeo">ALFA ROMEO</option>
                <option value="Asia motors">ASIA MOTORS</option>
                <option value="Aston martin">ASTON MARTIN</option>
                <option value="Audi">AUDI</option>
                <option value="Autorrad">AUTORRAD</option>
                <option value="Baic">BAIC</option>
                <option value="Bentley">BENTLEY</option>
                <option value="Bmw">BMW</option>
                <option value="Brilliance">BRILLIANCE</option>
                <option value="Buick">BUICK</option>
                <option value="Byd">BYD</option>
                <option value="Cadillac">CADILLAC</option>
                <option value="Changan">CHANGAN</option>
                <option value="Changhe">CHANGHE</option>
                <option value="Chery">CHERY</option>
                <option value="Chevrolet">CHEVROLET</option>
                <option value="Chrysler">CHRYSLER</option>
                <option value="Citroen">CITROEN</option>
                <option value="Cupra">CUPRA</option>
                <option value="Daewoo">DAEWOO</option>
                <option value="Daihatsu">DAIHATSU</option>
                <option value="Dodge">DODGE</option>
                <option value="Dongfeng">DONGFENG</option>
                <option value="Ds automobiles">DS AUTOMOBILES</option>
                <option value="Exeed">EXEED</option>
                <option value="Faw">FAW</option>
                <option value="Ferrari">FERRARI</option>
                <option value="Fiat">FIAT</option>
                <option value="Ford">FORD</option>
                <option value="Foton">FOTON</option>
                <option value="Gac gonow">GAC GONOW</option>
                <option value="Geely">GEELY</option>
                <option value="Gmc">G.M.C.</option>
                <option value="Great wall">GREAT WALL</option>
                <option value="Hafei">HAFEI</option>
                <option value="Haima">HAIMA</option>
                <option value="Haval">HAVAL</option>
                <option value="Hino">HINO</option>
                <option value="Honda">HONDA</option>
                <option value="Hummer">HUMMER</option>
                <option value="Hyundai">HYUNDAI</option>
                <option value="Infiniti">INFINITI</option>
                <option value="Iveco">IVECO</option>
                <option value="Jac">JAC</option>
                <option value="Jaecoo">JAECOO</option>
                <option value="Jaguar">JAGUAR</option>
                <option value="Jeep">JEEP</option>
                <option value="Jetour">JETOUR</option>
                <option value="Jim">JIM</option>
                <option value="Jinbei">JINBEI</option>
                <option value="Jmc">JMC</option>
                <option value="Kaiyi">KAIYI</option>
                <option value="Karry">KARRY</option>
                <option value="Kenbo">KENBO</option>
                <option value="Kia motors">KIA MOTORS</option>
                <option value="Kyc">KYC</option>
                <option value="Lada">LADA</option>
                <option value="Lamborghini">LAMBORGHINI</option>
                <option value="Lancia">LANCIA</option>
                <option value="Land rover">LAND ROVER</option>
                <option value="Landwind">LANDWIND</option>
                <option value="Lexus">LEXUS</option>
                <option value="Lifan">LIFAN</option>
                <option value="Lincoln">LINCOLN</option>
                <option value="Lotus">LOTUS</option>
                <option value="Mahindra">MAHINDRA</option>
                <option value="Maserati">MASERATI</option>
                <option value="Maxus">MAXUS</option>
                <option value="Mazda">MAZDA</option>
                <option value="McLaren">MCLAREN</option>
                <option value="Mercedes benz">MERCEDES BENZ</option>
                <option value="Mg">MG</option>
                <option value="Mini">MINI</option>
                <option value="Mitsubishi">MITSUBISHI</option>
                <option value="Morgan">MORGAN</option>
                <option value="Nissan">NISSAN</option>
                <option value="Omada">OMODA</option>
                <option value="Opel">OPEL</option>
                <option value="Peugeot">PEUGEOT</option>
                <option value="Pontiac">PONTIAC</option>
                <option value="Porsche">PORSCHE</option>
                <option value="Proton">PROTON</option>
                <option value="Ram">RAM</option>
                <option value="Renault">RENAULT</option>
                <option value="Rolls royce">ROLLS ROYCE</option>
                <option value="Rover">ROVER</option>
                <option value="Saab">SAAB</option>
                <option value="Samsung">SAMSUNG</option>
                <option value="Seat">SEAT</option>
                <option value="Sg">SG</option>
                <option value="Shifeng">SHIFENG</option>
                <option value="Shineray">SHINERAY</option>
                <option value="Skoda">SKODA</option>
                <option value="Sma">SMA</option>
                <option value="Smart">SMART</option>
                <option value="Ssangyong">SSANGYONG</option>
                <option value="Subaru">SUBARU</option>
                <option value="Suzuki">SUZUKI</option>
                <option value="Swm">SWM</option>
                <option value="Tata">TATA</option>
                <option value="Tesla">TESLA</option>
                <option value="Toyota">TOYOTA</option>
                <option value="Uaz">UAZ</option>
                <option value="Volkswagen">VOLKSWAGEN</option>
                <option value="Volvo">VOLVO</option>
                <option value="Zotye">ZOTYE</option>
                <option value="Zx">ZX</option>
              </select>
            </div>
            <div className={styles.input_grup}>
              <label className={styles.label} htmlFor="modelo">Modelo: </label>
              <input
                type="text"
                id="modelo"
                name="modelo"
                value={formData.modelo}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.input_grup}>
              <label className={styles.label} htmlFor="ano">Año: </label>
              <input
                type="number"
                id="ano"
                name="ano"
                value={formData.ano}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.input_grup}>
              <label className={styles.label} htmlFor="numero_de_placa">Patente: </label>
              <input
                type="text"
                id="numero_de_placa"
                name="numero_de_placa"
                value={formData.numero_de_placa}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.input_grup}>
              <label className={styles.label} htmlFor="kilometraje">Kilometros: </label>
              <input
                type="number"
                id="kilometraje"
                name="kilometraje"
                value={formData.kilometraje}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.button_grup}>
              <button className={styles.btn_form} onClick={prevStep}>Volver</button>
              <button className={styles.btn_form} onClick={nextStep}>Siguiente</button>
            </div>
          </form>
        </>)
      break;
    case 3:
      return (
        <>
          <h2 className={styles.title_leadsForm}>¿Quieres vender tu auto?<br />
            ¡Completa este formulario y te contactaremos hoy mismo!</h2>
          <form onSubmit={handleSubmit} className={styles.form}>
            <h3>Ultimos detalles</h3>
            <div className={styles.input_grup}>
              <label className={styles.label} htmlFor="version">Version: </label>
              <input
                type="text"
                id="version"
                name="version"
                value={formData.version}
                onChange={handleChange}
              />
            </div>
            <div className={styles.input_grup}>
              <label className={styles.label} htmlFor="precio_esperado">Combustible: </label>
              <select
                id="tipo_de_combustible"
                name="tipo_de_combustible"
                value={formData.tipo_de_combustible}
                onChange={handleChange}
                required
              >
                <option value="gasolina">Gasolina</option>
                <option value="diesel">Diésel</option>
                <option value="electrico">Eléctrico</option>
                <option value="hibrido">Híbrido</option>
              </select>
            </div>
            <div className={styles.input_grup}>
              <label className={styles.label} htmlFor="numero_de_duenos">Dueños: </label>
              <input
                type="number"
                id="numero_de_duenos"
                name="numero_de_duenos"
                value={formData.numero_de_duenos}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.input_grup}>
              <label className={styles.label} htmlFor="precio_esperado">Transmision: </label>
              <select
                id="transmision"
                name="transmision"
                value={formData.transmision}
                onChange={handleChange}
                required
              >
                <option value="Dual">Dual</option>
                <option value="manual">Manual</option>
                <option value="automatico">Automática</option>
              </select>
            </div>
            <div className={`${styles.precio_esperado} ${styles.input_grup}`}>
              <label className={styles.label} htmlFor="precio_esperado">Precio esperado: </label>
              <input
                type="number"
                id="precio_esperado"
                inputMode="numeric"
                name="precio_esperado"
                value={formData.precio_esperado}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.button_grup}>
              <button className={styles.btn_form} onClick={prevStep}>Volver</button>
              <button type="submit" className={styles.btn_form}>Enviar</button>
            </div>
          </form>
        </>
      )
      break;
    case 4:
      return (
        <>
          <h2 className={styles.title_leadsForm}>¿Quieres vender tu auto?<br />
            ¡Completa este formulario y te contactaremos hoy mismo!</h2>
          <form className={styles.form}>
            <h3 className="form_ok">¡Hemos recibido tu formulario! <br />
              Nos pondremos en contacto contigo muy pronto.</h3>
          </form>
        </>
      )
  }
}
export default LeadsForm