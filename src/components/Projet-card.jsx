import React from 'react';

import '../assets/styles/components/Projet-card.scss';

import iconPollo from '../assets/static/icon-pollo.png';


const ProjetCard = () => (
  <section className="project-card">
    <div className="image-projet">
      <img className="image-projet__icon" src={iconPollo} alt="project image"/>
    </div>
    <div className="container-project__text">
      <p className="project-card__title">Sistema de gestión de inventario</p>
      <p className="project-card__description">Sistema desarrollado para un restaurante, en el cual se resuelve el problema de gestión de inventario...</p>
    </div>
  </section>
);


export default ProjetCard;