import React from "react";
import styles from "./Button.module.css";

const Button = ({ backgroundColor, color, texto }) => {
  const buttonStyle = {
    backgroundColor: backgroundColor,
    color: color,
  };

  return (
    <button className={styles.button} style={buttonStyle}>
      {texto}
    </button>
  );
};

export default Button;
