import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about" id="sobre">
      <div className="about-container">
        <div className="about-content">
          <h2 className="about-title">Sobre a Clínica</h2>
          <div className="about-text">
            <p>
              Nossa clínica multidisciplinar foi fundada com o propósito de oferecer atendimento 
              humanizado e de excelência em diversas áreas da saúde. Acreditamos que o cuidado 
              integral do ser humano envolve corpo, mente e desenvolvimento educacional.
            </p>
            <p>
              Com uma equipe de profissionais altamente qualificados e especializados, oferecemos 
              tratamentos personalizados que respeitam a individualidade de cada paciente. Nossa 
              missão é promover qualidade de vida, bem-estar e desenvolvimento pleno.
            </p>
            <p>
              Contamos com instalações modernas e confortáveis, equipadas com o que há de mais 
              atual em tecnologia e recursos terapêuticos. Nosso ambiente acolhedor foi 
              especialmente projetado para proporcionar segurança e tranquilidade durante os 
              atendimentos.
            </p>
            <div className="about-values">
              <div className="value-item">
                <span className="value-icon">🎯</span>
                <h4>Missão</h4>
                <p>Promover saúde e bem-estar através de atendimento multidisciplinar de excelência</p>
              </div>
              <div className="value-item">
                <span className="value-icon">👥</span>
                <h4>Equipe</h4>
                <p>Profissionais especializados e comprometidos com seu desenvolvimento</p>
              </div>
              <div className="value-item">
                <span className="value-icon">💙</span>
                <h4>Atendimento</h4>
                <p>Cuidado humanizado e personalizado para cada paciente</p>
              </div>
            </div>
          </div>
        </div>
        <div className="about-image">
          {/* FOTO SOBRE A CLÍNICA - 1000x800px */}
          <div className="about-image-placeholder">
            <p>1000 x 800px</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
