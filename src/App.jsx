import React from 'react';

// components
import Navbar from './components/Navbar';
import Home from './components/Home';
import Scrollbar from './components/Scrollbar';
import Skills from './components/Skills';
import Projets from './components/Projets';
import Contact from './components/Contact';

import './assets/styles/App.scss';


const App = () => (
  <div className="body">

    <Scrollbar />

    <Home>
      <Navbar />
    </Home>

    <Skills />

    <Projets />

    <Contact />

  </div>
);


export default App;