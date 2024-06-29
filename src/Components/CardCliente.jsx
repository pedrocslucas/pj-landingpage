import React from "react";
import styles from "./CardCliente.module.css";

const CardCliente = ({ nome, foto, texto }) => {
  return (
    <div className={styles.cardCliente}>
      <img src={foto} />
      <p className={styles.nome}>{nome}</p>
      <p className={styles.texto}>{texto}</p>
    </div>
  );
};

export default CardCliente;
