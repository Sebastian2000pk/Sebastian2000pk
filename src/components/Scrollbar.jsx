import React, { useState, useEffect  } from 'react';

import '../assets/styles/components/Scrollbar.scss';

const Scrollbar = () => {

  const [ navbar, setNavbar ] = useState(false);
  const height = Math.floor(screen.height / 3);

  const changeColor = () => {
    if (window.scrollY > height) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener('scroll', changeColor);

  return (
    <nav className={navbar ? 'scrollbar purple' : 'scrollbar white' }>
      <ul>
        <a href="#home"><li><div className="scrollbar-point"></div></li></a>
        <a href="#skills"><li><div className="scrollbar-point"></div></li></a>
        <a href="#home"><li><div className="scrollbar-point"></div></li></a>
        <a href="#home"><li><div className="scrollbar-point"></div></li></a>
      </ul>
    </nav>
  )
};


export default Scrollbar;