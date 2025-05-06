import React from "react";
import "../styles/Footer.css";

import {
  AiFillGithub,
} from "react-icons/ai";


function Footer() {
  return (
    <footer className="footer">
      <p>© 2025 Mon Portfolio - Tous droits réservés</p>
      <a
        href="https://github.com/wiembenrhouma"
        style={{ color: "white" }}
        target="_blank" 
        rel="noopener noreferrer"
      >
          <AiFillGithub />
      </a>
    </footer>
  );
}


export default Footer;