import React from "react";
import s from "./style.module.scss";
import img1 from "../../../assets/1.svg";
import img2 from "../../../assets/2.svg";
import img3 from "../../../assets/3.svg";
import img4 from "../../../assets/4.svg";
import img5 from "../../../assets/5.svg";
import img6 from "../../../assets/6.svg";

const About = () => {
  return (
    <div className={s.container}>
      <span>– ПОЧЕМУ –</span>
      <h2>Н2 (Магний Водород)</h2>
      <div className={s.container_blocks}>
        <div className={s.container_blocks_content}>
          <div>
            <img src={img1} alt="1" />
            <p>100% безопасность применения</p>
          </div>
          <div>
            <img src={img2} alt="2" />
            <p>Ударная сила антиоксидантов</p>
          </div>
          <div>
            <img src={img3} alt="3" />
            <p>Баланс всего организма</p>
          </div>
        </div>
        <div className={s.container_blocks_content}>
          <div>
            <img src={img4} alt="4" />
            <p>Регулирование обменных процессов организма</p>
          </div>
          <div>
            <img src={img5} alt="5" />
            <p>Эффективное противовоспалительное действие</p>
          </div>
          <div>
            <img src={img6} alt="6" />
            <p>Абсолютное отсутствие побочных эффектов</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
