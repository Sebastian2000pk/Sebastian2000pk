import React from 'react';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Scrollbar from './components/Scrollbar';
import Skills from './components/Skills';

import './assets/styles/App.scss';


const App = () => (
  <div className="body">

    <Scrollbar />

    <Home>
      <Navbar />
    </Home>

    <Skills />

  </div>
);


export default App;