import React, { useEffect, useState } from 'react';
import '../styles/About.css';
import developerAnimation from "./developer.json";
import Lottie from "lottie-react";
import cv from "../cv/CV_WiemBENRHOUMA.pdf";

function About() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="about">
      <div className="about-text">
        <h2>À propos de moi</h2>
        <p>
        Je suis une développeuse full-stack junior passionnée par le développement web moderne. Je travaille principalement avec React.js, Node.js et MongoDB, et j’ai également de l’expérience avec Python, Power BI et les outils de Business Intelligence. Je suis toujours curieuse d’apprendre de nouvelles technologies et je cherche actuellement à contribuer à des projets concrets, que ce soit en freelance ou dans un poste en entreprise.
        </p>
        {/* Bouton placé sous le texte */}
        <a href={cv} download className="download-btn">
          Télécharger CV
        </a>
      </div>

      <div className="right-section animation">
        <Lottie style={{ scale: "1.3" }} animationData={developerAnimation} />
      </div>
    </section>
  );
}

export default About;
