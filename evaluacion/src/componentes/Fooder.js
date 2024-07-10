import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="app-footer">
      <div className="contact-info">
        <h3>Contacto</h3>
        <p>Email: contacto@example.com</p>
        <p>Teléfono: +123 456 7890</p>
      </div>
      <div className="social-links">
        <h3>Síguenos</h3>
        <ul>
          <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
          <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
