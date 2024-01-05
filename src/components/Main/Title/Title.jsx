import React from "react";
import s from "./style.module.scss";
import MainImg from "../../../assets/mainImg.png";

const Title = () => {
  return (
    <div className={s.container}>
      <img src={MainImg} alt="MainImg" />
      <div>
        <p className={s.container_p}>– Н2 (Магний Водород) –</p>
        <h1>DANDELION</h1>
        <p>
          <span>Н2 (Магний Водород)</span> – Современный продукт для поддержания всех функций
          организма. <br />
          <br />
          <span>Основное действие</span> - Антикоагулянт (функция разжижения крови).
        </p>
      </div>
    </div>
  );
};

export default Title;
