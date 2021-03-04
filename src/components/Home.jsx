import React from 'react';

import '../assets/styles/components/Home.scss';

import background from '../assets/static/background-home.jpg';


const Home = ({children}) => (
  <div className="home" style={{ backgroundImage: `url(${background})` }} id="home">
    {children}
<<<<<<< HEAD
    
=======
    <div className="home-text">
      <p className="title-home">Web Developer</p>
      <p className="home-name">Juan Sebastián Ochoa</p>
      <p className="home-description">
        Desarrollador de software colombiano <br/>
        Estudiante de la Universidad Nacional de Colombia <br/>
        20 años de edad <br/>
      </p>
    </div>
>>>>>>> 0e32d588a7b0780b3ba19b9a861a3343246df979
  </div>
);


export default Home;