import React from "react";
import "../styles/Skills.css";
import { DiPython, DiJava, DiJavascript1, DiNodejs, DiReact,DiPhp } from "react-icons/di";
import { SiHtml5, SiCss3, SiR, SiMysql, SiPostgresql, SiMongodb, SiSpringboot, SiSymfony, SiExpress, SiAngular, SiTailwindcss, SiPandas, SiScikitlearn } from "react-icons/si";
import { FaDatabase } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { FaChartBar } from "react-icons/fa";


function Skills() {
  return (
    <section id="skills">
      <h2>Mes Compétences</h2>
      <div className="tech-icons-container">
        <div className="tech-icons" title="Python"><DiPython /></div>
        <div className="tech-icons" title="Java"><DiJava /></div>
        <div className="tech-icons" title="R"><SiR /></div>
        <div className="tech-icons" title="JavaScript"><DiJavascript1 /></div>
        <div className="tech-icons" title="HTML5"><SiHtml5 /></div>
        <div className="tech-icons" title="CSS3"><SiCss3 /></div>
        <div className="tech-icons" title="PHP"><DiPhp /></div>
        <div className="tech-icons" title="Bases de données"><FaDatabase /></div>
        <div className="tech-icons" title="Symfony"><SiSymfony /></div>
        <div className="tech-icons" title="Spring Boot"><SiSpringboot /></div>
        <div className="tech-icons" title="Angular"><SiAngular /></div>
        <div className="tech-icons" title="React.js"><DiReact /></div>
        <div className="tech-icons" title="Node.js"><DiNodejs /></div>
        <div className="tech-icons" title="Express.js"><SiExpress /></div>
        <div className="tech-icons" title="Tailwind CSS"><SiTailwindcss /></div>
        <div className="tech-icons" title="Scikit-learn"><SiScikitlearn /></div>
        <div className="tech-icons" title="Pandas"><SiPandas /></div>
        <div className="tech-icons" title="Power BI"><FaChartBar /></div>
        <div className="tech-icons" title="MySQL"><SiMysql /></div>
        <div className="tech-icons" title="PostgreSQL"><SiPostgresql /></div>
        <div className="tech-icons" title="MongoDB"><SiMongodb /></div>
      </div>
    </section>
  );
}

export default Skills;
