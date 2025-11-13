import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você implementaria o envio do formulário
    console.log('Formulário enviado:', formData);
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section className="contact" id="contato">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="contact-title">Entre em Contato</h2>
          <p className="contact-description">
            Estamos prontos para atendê-lo. Agende sua consulta ou tire suas dúvidas
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nome Completo</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Digite seu nome"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">E-mail</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="seu@email.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Telefone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(00) 00000-0000"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Mensagem</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Como podemos ajudá-lo?"
                  rows="5"
                  required
                ></textarea>
              </div>

              <button type="submit" className="form-submit-btn">
                Enviar Mensagem
              </button>
            </form>
          </div>

          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">📍</div>
              <h3>Endereço</h3>
              <p>Rua Exemplo, 123<br />Centro, Cidade - UF<br />CEP: 00000-000</p>
            </div>

            <div className="info-card">
              <div className="info-icon">📞</div>
              <h3>WhatsApp</h3>
              <p>(00) 00000-0000</p>
              <a href="https://wa.me/5500000000000" target="_blank" rel="noopener noreferrer" className="whatsapp-btn">
                Chamar no WhatsApp
              </a>
            </div>

            <div className="info-card">
              <div className="info-icon">🕐</div>
              <h3>Horário de Atendimento</h3>
              <p>
                Segunda a Sexta: 8h às 18h<br />
                Sábado: 8h às 12h
              </p>
            </div>

            <div className="map-container">
              {/* Área reservada para mapa - pode usar iframe do Google Maps */}
              <div className="map-placeholder">
                <p>📍 Mapa</p>
                <span>Integrar Google Maps aqui</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
