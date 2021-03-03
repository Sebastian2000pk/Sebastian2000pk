import React from 'react';

import '../assets/styles/components/Home.scss';

import background from '../assets/static/background-home.jpg';


const Home = ({children}) => (
  <div className="home" style={{ backgroundImage: `url(${background})` }}>
    {children}
  </div>
);


export default Home;