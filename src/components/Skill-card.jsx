import React from 'react';

import '../assets/styles/components/Skill-card.scss';

import Logo from '../assets/static/js.png';


const SkillCard = (props) => (
  <div className="skill-card">
    <div className="skill-card__container">
      <img src={props.icon} alt="skill-icon"/>
      <p className="skill-name">{props.skill}</p>
    </div>
  </div>
);


export default SkillCard;