import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img 
            src="/logo-potencial.png" 
            alt="Clínica Potencial - Logo" 
            className="logo-image"
          />
        </div>

        <button 
          className="menu-toggle" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={menuOpen ? 'menu-icon open' : 'menu-icon'}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>

        <nav className={menuOpen ? 'nav-menu active' : 'nav-menu'}>
          <ul className="nav-list">
            <li><a href="#inicio" onClick={() => scrollToSection('inicio')}>Início</a></li>
            <li><a href="#servicos" onClick={() => scrollToSection('servicos')}>Serviços</a></li>
            <li><a href="#sobre" onClick={() => scrollToSection('sobre')}>Sobre</a></li>
            <li><a href="#contato" onClick={() => scrollToSection('contato')}>Contato</a></li>
          </ul>
          <button className="btn-schedule" onClick={() => scrollToSection('contato')}>
            Agendar Atendimento
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
