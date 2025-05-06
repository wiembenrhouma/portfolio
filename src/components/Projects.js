// src/components/Projects.js
import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Projects.css';
import Imagedata from '../assets/data.PNG';
import Imagedata1 from '../assets/data1.PNG';
import ImageWeb from '../assets/Capture.PNG';
import ImageWeb1 from '../assets/capture1.PNG';
import Imageportfilio from '../assets/portfilio.PNG';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

function Projects() {
  const projets = [
    {
      titre: 'E-commerce MERN',
      images: [ImageWeb,ImageWeb1], // un seul slide possible aussi
      description:
        'Développement d’un site e-commerce full stack avec le stack MERN (MongoDB, Express, React, Node.js), incluant une interface client, une API REST et un espace admin pour gérer les produits',
      url: 'https://e-commerce-app-4upc.vercel.app',
    },
    {
      titre: 'Prédiction des Ventes',
      images: [Imagedata1, Imagedata],
      description:
        'Optimisation de la prédiction des ventes avec LSTM et ARIMA, Développement d’un dashboard interactif et d’une application web de visualisation (Python, Power BI, Flask)',
      url: '#',
    },
    {
      titre: 'Portfolio Personnel',
      images: [Imageportfilio],
      description:
        'Site web responsive réalisé avec React, Framer Motion et Swiper pour présenter mes projets.',
      url: '#',
    },
  ];

  return (
    <section id="projects">
      <h2>Mes Projets</h2>
      <div className="projects-list">
        {projets.map((projet, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
          >
            <div className="project-content">
              <h3>{projet.titre}</h3>

              <Swiper
                modules={[Pagination]}
                pagination={{ clickable: true }} // active les points de pagination
                spaceBetween={10}
                slidesPerView={1}
                className="project-swiper"
              >
                {projet.images.map((img, i) => (
                  <SwiperSlide key={i}>
                    <img src={img} alt={`${projet.titre}-${i}`} className="project-image" />
                  </SwiperSlide>
                ))}
              </Swiper>

              <p>{projet.description}</p>
              <a href={projet.url} target="_blank" rel="noopener noreferrer">
                Voir le projet
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
