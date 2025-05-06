import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import mailAnimation from "./mailAnimation.json";
import Lottie from "lottie-react";
import "../styles/Contact.css";  

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6jr8n2d", // Remplacez par votre service ID
        "template_uxdsz1e", // Remplacez par votre template ID
        form.current,
        "MRdwYgFp4kqOgXXbG" // Remplacez par votre user ID
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message envoyé avec succès !");
        },
        (error) => {
          console.log(error.text);
          alert("Une erreur est survenue, veuillez réessayer.");
        }
      );
  };

  return (
    <section id="contact">
      <h2>Contact</h2>
      <div className="contact-content">
        {/* FORMULAIRE À GAUCHE */}
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <label htmlFor="user_name">Nom</label>
          <input type="text" name="user_name" id="user_name" required />

          <label htmlFor="user_email">Email</label>
          <input type="email" name="user_email" id="user_email" required />

          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" required />

          <input type="submit" value="Envoyer" />
        </form>

        {/* ANIMATION À DROITE */}
        <div className="mail-animation">
          <Lottie 
            animationData={mailAnimation} 
            loop={true} 
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
