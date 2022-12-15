import React from "react";
import Yo from "../assets/logoo.jpg";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import style from "./Head.module.css";

function Head() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle(style.responsiveNav);
  };
  return (
    <div id="home" className={style.container}>
      <header>
        <a href="#" className={style.title}>
          Resume
        </a>
        <nav className={style.nav} ref={navRef}>
          <a onClick={showNavbar} href="#home">
            Home
          </a>
          <a onClick={showNavbar} href="#about">
            About
          </a>
          <a onClick={showNavbar} href="#skills">
            Skills
          </a>
          <a onClick={showNavbar} href="#services">
            Services
          </a>
          <a onClick={showNavbar} className={style.navContact} href="#contact">
            Contact
          </a>
          <button
            className={`${style.navBtn} ${style.navCloseBtn}`}
            onClick={showNavbar}
          >
            <FaTimes />
          </button>
        </nav>
        <a className={style.btnContact} href="#contact">
          Contact me
        </a>
        <button className={style.navBtn} onClick={showNavbar}>
          <FaBars />
        </button>
      </header>

      <div className={style.containerImg}>
        <img src={Yo} className={style.Img} alt="..." />
        <h1 className={style.containerImgName}>Juan Carlos Santil</h1>
        <p className={style.containerImgText}>
          Freelancer & Front End Developer
        </p>
      </div>
    </div>
  );
}

export default Head;
