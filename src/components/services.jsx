import React from "react";
import { Data } from "../assets/DataServices";
import style from "./Services.module.css";

function Services() {
  return (
    <div id="services" className={style.container}>
      <div>
        <h2 className={style.titlePage}>Services</h2>
      </div>
      <div className={style.containerText}>
        {Data.map((Data, index) => {
          return (
            <div key={index}>
              <CardServices
                key={index}
                Title={Data.Title}
                Description={Data.Description}
              />
            </div>
          );
        })}
        ;
      </div>
    </div>
  );
  function CardServices({ Title, Description }) {
    return (
      <div className={style.cardContainer}>
        <h3 className={style.title}>{Title}</h3>
        <p className={style.description}>{Description}</p>
      </div>
    );
  }
}

export default Services;
