import styles from './Beneficios.module.css';
import { FaDoorOpen } from "react-icons/fa";
import { IoPersonAdd } from "react-icons/io5";
import { MdOutlinePriceCheck } from "react-icons/md";
import { Ri24HoursFill } from "react-icons/ri";
import { FaArrowTrendUp } from "react-icons/fa6";

const Beneficios = () => {
  return (
    <div name="Beneficios" className={styles.beneficios}>
      <h2 className={styles.beneficiosTitulo}>Beneficio de tener un desarrollo profecional</h2>
      <p>
      Te abres al mundo
      <FaDoorOpen />
      </p>
      <p>
      Nuevos clientes
      <IoPersonAdd />
      </p>
      <p>
      Costos mucho más bajos
      <MdOutlinePriceCheck />
      </p>
      <p>
      Sin horarios
      <Ri24HoursFill />
      </p>
      <p>
      Marketing ultrasegmentado + alta conversión
      <FaArrowTrendUp />
      </p>
    </div>
  )
}

export default Beneficios;