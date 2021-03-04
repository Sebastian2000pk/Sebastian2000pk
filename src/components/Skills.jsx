import React from 'react';

import '../assets/styles/components/Skills.scss';

import SkillCard from './Skill-card';


const Skills = () => (
  <div className="skills" id="skills">
    <p className="title-skills">SKILLS</p>
    <section className="container-skills">
      <SkillCard skill="Node.js" />
      <SkillCard skill="React" />
      <SkillCard skill="MySQL" />
      <SkillCard skill="MongoDB" />
      <SkillCard skill="Passport" />
      <SkillCard skill="Python" />
      <SkillCard skill="Django" />
      <SkillCard skill="Git y Github" />
    </section>
  </div>
);


export default Skills;