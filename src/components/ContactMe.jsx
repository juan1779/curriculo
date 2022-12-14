import React from "react";
import emailjs from "emailjs-com";
import style from "./ContactMe.module.css";

function ContactMe() {
  function enviarEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_9sva60u",
        "template_a9c7uh3",
        e.target,
        "FrEtbPb49sb9gcevM"
      )
      .then((res) => {
        alert("Se ha enviado correctamente");
        console.log(res);
      });
  }

  return (
    <div id="contact" className={style.container}>
      <h2>Contact</h2>
      <form onSubmit={enviarEmail}>
        <div className={style.text}>
          <label>Full Name</label>
          <input type="text" name="name" required="required" />
        </div>
        <div className={style.text}>
          <label>Email</label>
          <input type="email" name="email" required="required" />
        </div>
        <div className={style.text}>
          <label>Phone number</label>
          <input type="tel" name="phone" required="required" />
        </div>
        <div className={style.text}>
          <label>type of application</label>
          <input type="text" name="description" required="required" />
        </div>
        <input className={style.btn} type="submit" value="Send Email" />
      </form>
    </div>
  );
}

export default ContactMe;
