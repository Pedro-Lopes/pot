import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact" id="contato">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="contact-title">Entre em Contato</h2>
          <p className="contact-description">
            Estamos prontos para atendê-lo. Agende sua consulta ou tire suas dúvidas
          </p>
        </div>

        <div className="contact-content-centered">
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">📍</div>
              <h3>Endereço</h3>
              <p>Rua Exemplo, 123<br />Centro, Cidade - UF<br />CEP: 00000-000</p>
            </div>

            <div className="info-card">
              <div className="info-icon">📞</div>
              <h3>WhatsApp</h3>
              <p>(21) 98309-9482</p>
              <a href="https://wa.me/5521983099482" target="_blank" rel="noopener noreferrer" className="whatsapp-btn">
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
          </div>

          <div className="map-container">
            <iframe
              src="https://www.google.com/maps?q=-22.961920312849735,-42.99115587368746&hl=pt-BR&z=15&output=embed"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: '10px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da Clínica"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
