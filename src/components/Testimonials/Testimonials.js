import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Maria Silva',
      role: 'Paciente',
      text: 'O atendimento na clínica superou todas as minhas expectativas. Os profissionais são extremamente atenciosos e competentes. Meu filho teve grande evolução no reforço escolar e hoje está muito mais confiante.'
    },
    {
      id: 2,
      name: 'João Santos',
      role: 'Paciente',
      text: 'Excelente estrutura e profissionais qualificados. O acompanhamento nutricional me ajudou a transformar minha relação com a alimentação e alcançar meus objetivos de saúde. Recomendo muito!'
    },
    {
      id: 3,
      name: 'Ana Costa',
      role: 'Paciente',
      text: 'Ambiente acolhedor e tratamento humanizado. As sessões de terapia têm sido fundamentais para meu bem-estar emocional. A equipe realmente se dedica a entender e ajudar cada paciente.'
    }
  ];

  return (
    <section className="testimonials">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h2 className="testimonials-title">Depoimentos</h2>
          <p className="testimonials-description">
            Veja o que nossos pacientes têm a dizer sobre nossos serviços
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-photo">
                {/* FOTO DO PACIENTE - 300x300px */}
                <div className="photo-placeholder">
                  <span>👤</span>
                </div>
              </div>
              <div className="testimonial-content">
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-author">
                  <h4 className="author-name">{testimonial.name}</h4>
                  <p className="author-role">{testimonial.role}</p>
                </div>
                <div className="testimonial-stars">
                  ⭐⭐⭐⭐⭐
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
