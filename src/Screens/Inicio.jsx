  import { Link } from 'react-scroll';
import styles from './Inicio.module.css';


  const Inicio = () => {
    return (
      <div name="Inicio" className={styles.inicio}>
        <div className={styles.tituloContenedor}>
        <p>
          Expande Tu <br />
          <b>NEGOCIO</b>
        </p>
        <p>
          Con la mejor <br />
          <b>Presencia en línea</b>
        </p>
        </div>

        <div className={styles.ctaContenedor}>
          <Link to={"Contacto"}
                name='Contacto'
                smooth
                duration={500} className={styles.botonLlamada} >Contactanos</Link>
          <Link to={"Contacto"}
                name='Contacto'
                smooth
                duration={500} className={styles.botonLlamada}>Obtener precio</Link>
        </div>
      </div>
    );
  };  

  export default Inicio



  


