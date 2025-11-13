import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Clínica Multidisciplinar</h3>
            <p className="footer-description">
              Cuidando de você com excelência e dedicação. 
              Atendimento multidisciplinar para toda a família.
            </p>
            <div className="footer-social">
              <a href="#" className="social-link" aria-label="Facebook">
                <span className="social-icon">📘</span>
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                <span className="social-icon">📷</span>
              </a>
              <a href="#" className="social-link" aria-label="LinkedIn">
                <span className="social-icon">💼</span>
              </a>
              <a href="#" className="social-link" aria-label="YouTube">
                <span className="social-icon">📹</span>
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Serviços</h4>
            <ul className="footer-list">
              <li><a href="#servicos">Pedagogia</a></li>
              <li><a href="#servicos">Reforço Escolar</a></li>
              <li><a href="#servicos">Nutricionista</a></li>
              <li><a href="#servicos">Psicólogo</a></li>
              <li><a href="#servicos">Terapia</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Links Rápidos</h4>
            <ul className="footer-list">
              <li><a href="#inicio">Início</a></li>
              <li><a href="#sobre">Sobre Nós</a></li>
              <li><a href="#contato">Contato</a></li>
              <li><a href="#contato">Agendar Consulta</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Contato</h4>
            <ul className="footer-contact">
              <li>
                <span className="contact-icon">📍</span>
                Rua Exemplo, 123 - Centro<br />
                Cidade - UF, CEP: 00000-000
              </li>
              <li>
                <span className="contact-icon">📞</span>
                (00) 0000-0000
              </li>
              <li>
                <span className="contact-icon">📱</span>
                (00) 00000-0000
              </li>
              <li>
                <span className="contact-icon">✉️</span>
                contato@clinica.com.br
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {currentYear} Clínica Multidisciplinar. Todos os direitos reservados.
          </p>
          <p className="footer-dev">
            Desenvolvido com 💙 para cuidar de você
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
