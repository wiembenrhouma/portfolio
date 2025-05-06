import React from "react";
import "../styles/Hero.css";

function Hero() {
  return (
    <section className="hero">
      <h1>Bienvenue sur mon Portfolio</h1>
      <p>Je suis une développeuse passionnée.</p>
      <a href="#projects" className="btn">Voir mes projets</a>
    </section>
  );
}

export default Hero;
