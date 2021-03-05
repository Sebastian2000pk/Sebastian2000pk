import React from 'react';

import '../assets/styles/components/Contact.scss';

const Contact = () => (
  <div className="contact" id="contact">
    <div>
      <div className="contact-container">
        <div className="sub-container">
          <section className="container__contact">
            <p className="contact-title">CONTACT</p>
            <p className="contact-description">uncorreomio@gmail.com</p>
          </section>
        </div>

        <div className="sub-container">
          <section className="container__residence">
            <p className="contact-title">RESIDENCE</p>
            <p className="contact-description">Bogotá D.C, Colombia</p>
            <p className="contact-description">Colombiano</p>
          </section>
        </div>     
      </div>
    </div>
  </div>
);


export default Contact;
