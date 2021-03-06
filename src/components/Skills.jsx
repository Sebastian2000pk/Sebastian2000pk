import React from 'react';

import '../assets/styles/components/Skills.scss';

import SkillCard from './Skill-card';

// icons skills
import iconJs from '../assets/static/js.png';
import iconReact from '../assets/static/react.png';
import iconMySQL from '../assets/static/sql.png';
import iconDjango from '../assets/static/django.png';
import iconGithub from '../assets/static/github.png';
import iconMongoDB from '../assets/static/mongodb.png';
import iconPassport from '../assets/static/passport.png';
import iconPython from '../assets/static/python.png';


const Skills = () => (
  <div className="skills" id="skills">
    <p className="title-skills">SKILLS</p>
    <section className="container-skills">
      <SkillCard skill="Node.js" icon={iconJs} />
      <SkillCard skill="React" icon={iconReact} />
      <SkillCard skill="MySQL" icon={iconMySQL} />
      <SkillCard skill="MongoDB" icon={iconMongoDB} />
      <SkillCard skill="Passport" icon={iconPassport} />
      <SkillCard skill="Python" icon={iconPython} />
      <SkillCard skill="Django" icon={iconDjango} />
      <SkillCard skill="Git y Github" icon={iconGithub} />
    </section>
  </div>
);


export default Skills;
