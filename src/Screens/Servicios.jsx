import imagenAdmEmpresa from "../assets/imaAdmEmpresa.png";
import styles from './Servicios.module.css';

const Servicios = () => {
  return (
    <div name="Servicios" className={styles.services}>
      <p>Solucionamos los problemas de tu empresa</p>
      <img className={styles.wedImagen} src={imagenAdmEmpresa} alt="Imagen de administración empresarial" />
    </div>
  )
}

export default Servicios
