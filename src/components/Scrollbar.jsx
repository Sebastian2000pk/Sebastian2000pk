import React from 'react';

import '../assets/styles/components/Scrollbar.scss';

const Scrollbar = () => (
  <nav className="scrollbar">
    <ul>
      <li><div className="scrollbar-point"></div></li>
      <li><div className="scrollbar-point"></div></li>
      <li><div className="scrollbar-point"></div></li>
      <li><div className="scrollbar-point"></div></li>
    </ul>
  </nav>
);


export default Scrollbar;