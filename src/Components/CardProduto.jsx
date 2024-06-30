import React from "react";
import styles from "../styles/CardProduto.module.css";

const CardProduto = ({ titulo, icone, texto }) => {
  return (
    <div className={styles.cardProduto}>
      <h3>{titulo}</h3>
      <div>
        <p>{texto}</p>
        <img src={icone} />
      </div>
    </div>
  );
};

export default CardProduto;
