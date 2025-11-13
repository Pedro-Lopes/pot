import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Pedagogia',
      description: 'Acompanhamento pedagógico especializado para crianças e adolescentes, com foco no desenvolvimento educacional e superação de dificuldades de aprendizagem.',
      icon: '📚'
    },
    {
      id: 2,
      title: 'Reforço Escolar',
      description: 'Apoio individualizado nas disciplinas escolares, com metodologias eficazes para melhorar o desempenho acadêmico e a confiança do aluno.',
      icon: '✏️'
    },
    {
      id: 3,
      title: 'Nutricionista',
      description: 'Orientação nutricional personalizada para todas as idades, visando qualidade de vida, saúde e bem-estar através de uma alimentação equilibrada.',
      icon: '🥗'
    },
    {
      id: 4,
      title: 'Psicólogo',
      description: 'Atendimento psicológico para crianças, adolescentes e adultos, oferecendo suporte emocional e tratamento para diversos transtornos mentais.',
      icon: '🧠'
    },
    {
      id: 5,
      title: 'Terapia',
      description: 'Sessões terapêuticas especializadas para auxiliar no desenvolvimento emocional, comportamental e social, promovendo qualidade de vida e autoconhecimento.',
      icon: '💆'
    }
  ];

  return (
    <section className="services" id="servicos">
      <div className="services-container">
        <div className="services-header">
          <h2 className="services-title">Nossos Serviços</h2>
          <p className="services-description">
            Oferecemos atendimento completo e personalizado em diversas áreas da saúde
          </p>
        </div>

        <div className="services-grid">
          {services.map(service => (
            <div key={service.id} className="service-card">
              <div className="service-icon">
                <span>{service.icon}</span>
              </div>
              <div className="service-image">
                {/* IMAGEM DO SERVIÇO - 600x400px */}
                <div className="service-image-placeholder">
                  <p>600 x 400px</p>
                </div>
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
