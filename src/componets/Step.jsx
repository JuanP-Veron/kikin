import styles from "./Step.module.css";

const Step = ({ text, step }) => {
  return (
    <div className={styles.container}>
      <div className={styles.stepContainer}>
        <p className={styles.stepNumero}>{step}</p>
        <p className={styles.texto}>{text}</p>
      </div>
      <div className={styles.stepBorde}></div>
    </div>
  );
};

export default Step;
