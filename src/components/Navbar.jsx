import React, { useState } from 'react';

import '../assets/styles/components/Navbar.scss';


const Navbar = () => {

  function HamburguerClick() {
    const navbar = document.getElementById('navbar');
    const hamburguer = document.getElementById("hamburguer-button");
    if (!hamburguer.checked) {
      navbar.classList.add('nav-purple');
    }
     else if(window.scrollY < height) {
      navbar.classList.remove('nav-purple');
     }
  }

  const [ navbar, setNavbar ] = useState(false);
  const height = Math.floor(screen.height / 3);
  
  const changeColor = () => {
    const hamburguer = document.getElementById("hamburguer-button");
    if (window.scrollY > height) {
      setNavbar(true);
    } else if (!hamburguer.checked) {
      setNavbar(false);
    }
  };

  window.addEventListener('scroll', changeColor);

  return (
    <div className={navbar ? 'navbar nav-purple' : 'navbar nav-transparent' } id="navbar">
      <input className="h-button" type="checkbox" value="false" id="hamburguer-button"/>
      <label htmlFor="hamburguer-button" className="hamburguer-button" onClick={HamburguerClick}></label>
      <nav>
        <ul>
          <li><a href="#home" >Home</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  )
};


export default Navbar;