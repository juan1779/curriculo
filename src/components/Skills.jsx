import React from "react";
import style from "./Skills.module.css";
import { Data } from "../assets/Data";

function Skills() {
  return (
    <div id="skills" className={style.container}>
      <div>
        <h2>skills</h2>
      </div>
      <div className={style.containerText}>
        {Data.map((Data, index) => {
          return (
            <div key={index}>
              <Card key={index} Img={Data.Img} />
            </div>
          );
        })}
        ;
      </div>
    </div>
  );

  function Card({ Img }) {
    return (
      <div className={style.cardContainer}>
        <img className={style.Img} src={Img} />
      </div>
    );
  }
}

export default Skills;
