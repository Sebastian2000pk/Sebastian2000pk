import React from 'react';

import ProjetCard from './Projet-card';

import '../assets/styles/components/Projets.scss';


const Projects = () => {

  return (
    <div className="projects" id="projects">
      <p className="title-projects">PROJECTS</p>
      <div className="container-projects">

        <div className="back-decoration"></div>

        <div className="circle-decoration">
          <div className="circle-decoration__one">
            <div className="circle-decoration__two">
              <div className="circle-decoration__three">
                <div className="circle-decoration__four"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="carousel-projets">
          <ProjetCard />
          <ProjetCard />
          <ProjetCard />
          <ProjetCard />
        </div>
      </div>
    </div>

  );
};


export default Projects;