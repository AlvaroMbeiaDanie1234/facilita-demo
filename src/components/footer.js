// src/components/Footer.js
import React from 'react';
import './styles/footer.css'; // Arquivo CSS para estilização
import logo from '../images/logo192.png'; // Substitua pelo seu logo real

const Footer = () => {
  return (
    <footer className="modern-footer">
      <div className="footer-container">
        <div className="footer-brand">
          <img src={logo} alt="Logo da Facilita" style={{ width: '150px' }} />
        </div>

        <div className="footer-links">
          <h4>Links Rápidos</h4>
          <ul style={{ textAlign: 'left', padding: 0 }}>
            <li><a href="#home">Sobre</a></li>
            <li><a href="#services">Tornar-se sócio</a></li>
            <li><a href="#about">Inscrever-se</a></li>

          </ul>
        </div>

        <div className="footer-links">
        <h4>Edereços</h4>
          <ul style={{ textAlign: 'left', padding: 0 }}>
            <li><a href="#home">geral@facilita.com</a></li>
            <li><a href="#services">facilita@gmail.com</a></li>
       
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Facilita. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
