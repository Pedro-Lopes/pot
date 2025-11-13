import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const [currentImage1, setCurrentImage1] = useState(0);
  const [currentImage2, setCurrentImage2] = useState(0);

  // Imagens para o card 1 (superior esquerdo)
  const imagesCard1 = [
    { id: 1, label: 'Recepção', size: '400x500px' },
    { id: 2, label: 'Consultório', size: '400x500px' },
    { id: 3, label: 'Atendimento', size: '400x500px' },
    { id: 4, label: 'Sala de Espera', size: '400x500px' }
  ];

  // Imagens para o card 2 (inferior direito)
  const imagesCard2 = [
    { id: 1, label: 'Terapia', size: '400x500px' },
    { id: 2, label: 'Atividades', size: '400x500px' },
    { id: 3, label: 'Área Infantil', size: '400x500px' },
    { id: 4, label: 'Reforço Escolar', size: '400x500px' }
  ];

  // Rotação automática do card 1
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage1((prev) => (prev + 1) % imagesCard1.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [imagesCard1.length]);

  // Rotação automática do card 2 (com delay diferente para efeito visual)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage2((prev) => (prev + 1) % imagesCard2.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [imagesCard2.length]);

  const scrollToServices = () => {
    const element = document.getElementById('servicos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" id="inicio">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Cuidando de Você com Excelência e Dedicação
          </h1>
          <p className="hero-subtitle">
            Atendimento multidisciplinar com profissionais especializados para cuidar da sua saúde física, mental e emocional. 
            Nossa equipe está pronta para oferecer o melhor tratamento personalizado para você e sua família.
          </p>
          <button className="hero-btn" onClick={scrollToServices}>
            Conheça nossos serviços
          </button>
        </div>
        <div className="hero-image">
          <div className="hero-images-wrapper">
            <div className="hero-image-card hero-image-1">
              {/* IMAGENS CARD 1 - 400x500px cada */}
              <div className="image-carousel">
                {imagesCard1.map((img, index) => (
                  <div
                    key={img.id}
                    className={`image-placeholder ${index === currentImage1 ? 'active' : ''}`}
                  >
                    <p>{img.label}</p>
                    <span>{img.size}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="hero-image-card hero-image-2">
              {/* IMAGENS CARD 2 - 400x500px cada */}
              <div className="image-carousel">
                {imagesCard2.map((img, index) => (
                  <div
                    key={img.id}
                    className={`image-placeholder ${index === currentImage2 ? 'active' : ''}`}
                  >
                    <p>{img.label}</p>
                    <span>{img.size}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
