import React from "react";
import style from "./About.module.css";
import Yo from "../assets/juan.png";
import Curriculum from "../assets/curriculum.pdf";

function About() {
  return (
    <div id="about" className={style.container}>
      <div className={style.containerImg}>
        <img src={Yo} className={style.Img} alt="..." />
      </div>
      <div className={style.aboutMe}>
        <h2 className={style.title}>About me</h2>
        <p className={style.description}>
          I am a student of Systems Engineering at UDO (Universidad de Oriente),
          currently doing my degree work. I am 23 years old with interest in
          programming and web development. I am able to adapt to any work
          scenario. Committed to projects and teamwork to best meet each of the
          proposed goals.
        </p>
        <div className={style.list}>
          <ul className={style.list1}>
            <li>
              Name:
              <br /> Juan Carlos Santil
            </li>
            <li>
              Phone:
              <br /> +58 412 948 9604
            </li>
            <li>
              Experience:
              <br /> 2 years
            </li>
          </ul>
          <ul className={style.list2}>
            <li>
              Email:
              <br /> santiljuan179@gmail.com
            </li>
            <li>
              Age:
              <br /> 23 years old
            </li>
            <li>
              Country:
              <br /> Venezuela
            </li>
          </ul>
        </div>
        <a
          href={Curriculum}
          download="curriculumJuan.pdf"
          className={style.btnCv}
        >
          Download Cv
        </a>
      </div>
    </div>
  );
}

export default About;
