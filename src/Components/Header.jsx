import React from "react";
import styles from "./Header.module.css";
import logoPointJob from "../assets/logoPointJob.png";
import Button from "./Button";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.namedLogo}>
        <img src={logoPointJob} alt="Logo Point Job" />
        <span>PointJob</span>
      </div>
      <nav>
        <ul>
          <li>
            <a href="#produtos">Produtos</a>
          </li>
          <li>
            <a href="#casos">Casos</a>
          </li>
          {/*Esse button embaixo tem que virar componente*/}
          <li>
            <Button
              backgroundColor="white"
              color="#236742de"
              texto="Fale Conosco"
            />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
