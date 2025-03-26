import styles from './ComoTrabajamos.module.css';
import Step from '../componets/Step.jsx';

const ComoTrabajamos = () => {

  const steps =  [
    {
      text: "Cuentanos tu propuesta",
      id: 1,
    },
    {
      text: "Nosotros creamos tu sitio y hacemos una revición",
      id: 2,
    },
    {
      text: "Nosotros Desarrollamos tu wed de bodas",
      id: 3,
    },
    {
      text: "Nosotros desplegamos tu sitio",
      id: 4,
    },
    {
      text: "Disfruta de todos los beneficios de tener un sitio web para tu empresa",
      id: 5,
    },
  ]

  return (
    <div name="ComoTrabajamos" className={styles.comoTrabajamos}>
      <h2 className={styles.titulo}>Como Trabajamos</h2>
      {steps.map((x) => (
        <Step key={x.id} text={x.text} step={x.id} />
      ))}
    </div>
  )
}


export default ComoTrabajamos
