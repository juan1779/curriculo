import React from "react";
import style from "./Footer.module.css";
import {
  FaFacebook,
  FaLinkedinIn,
  FaInstagramSquare,
  FaGithub,
  FaRegCopyright,
} from "react-icons/fa";

function Footer() {
  return (
    <div className={style.footContainer}>
      <div className={style.footText}>
        <h3>
          <FaRegCopyright /> Todos los derechos reservados.
        </h3>
      </div>

      <div className={style.RedesSociales}>
        <a
          className={style.RedesBtn}
          href="https://www.facebook.com/JCSN32"
          target="_BLANK"
        >
          <FaFacebook />
        </a>
        <a
          className={style.RedesBtn}
          href="https://www.linkedin.com/in/juan-santil/"
          target="_BLANK"
        >
          <FaLinkedinIn />
        </a>
        <a
          className={style.RedesBtn}
          href="https://www.instagram.com/juuancarlossn/"
          target="_BLANK"
        >
          <FaInstagramSquare />
        </a>
        <a
          className={style.RedesBtn}
          href="https://github.com/juan1779"
          target="_BLANK"
        >
          <FaGithub />
        </a>
      </div>
    </div>
  );
}

export default Footer;
