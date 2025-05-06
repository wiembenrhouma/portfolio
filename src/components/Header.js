import React from 'react';
import '../styles/Header.css';

function Header() {
  return (
    <header>
      <nav className="navbar">
        <ul>
          <li><a href="#about">À propos</a></li>
          <li><a href="#skills">Compétences</a></li>
          <li><a href="#projects">Projets</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;