
import styles from './Contacto.module.css';


const Contacto = () => {

  return (
    <div name="Contacto" className={styles.contacto}>
      <h2>Contacto</h2>
      <form className={styles.form} method='POST' action="https://getform.io/f/bpjjkkvb">
      <label htmlFor="userName">User Name</label>
        <input
          name="Usuario"
          id='Usuario'
          className={styles.input}
          type="text"
          placeholder="Enter al Usuario"
        />
        <label htmlFor="email">Gmail</label>
        <input
        className={styles.input}
          type="Gmail"
          id='Gmail'
          name="Gmail"
          aria-describedby="emailHelp"
          placeholder="Enter Gmail">
          </input>
        <label> Comentario </label>
        <textarea className={styles.textArea}></textarea>
        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}

export default Contacto;
