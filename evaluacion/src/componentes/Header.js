import React from 'react';
import logo from '../Imagenes/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="app-header">
      <div className="logo-container">
        <img src={logo} className="app-logo" alt="logo del directorio" />
      </div>
      <nav className="nav-menu">
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/contact">Contacto</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
