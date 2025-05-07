import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/header';
import Hero from './components/hero';
import facilitaLogo from '../src/images/logo192.png'; // Substitua pelo seu logo real
import Networks from './components/networks';
import Footer from './components/footer';
import Galeria from './components/gallery';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [userMessage, setUserMessage] = useState("");

  const toggleModal = () => setShowModal(!showModal);

  const handleSend = () => {
    const phoneNumber = '11234567890'; // Substitua com o número real (com DDI sem +)
    const encodedMessage = encodeURIComponent(userMessage || "Olá! Tenho uma dúvida.");
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="App">
      <Header />
      <Hero />
      <Networks/>
      <Galeria/>
      <Footer/>


      {/* Botão flutuante */}
      <a onClick={toggleModal} className="floating-btn" aria-label="WhatsApp">
        <i className="fab fa-whatsapp"></i>
        <span className="notification-dot"></span>
      </a>

      {/* Widget de chat flutuante */}
      {showModal && (
        <div className="chat-widget">
          <div className="chat-header">
            <div className="chat-avatar">
              <img src={facilitaLogo} alt="Logo Facilita" />
            </div>
            <div>
              <strong>Facilita</strong>
              <p className="mb-0">Oline</p>
            </div>
            <button className="chat-close" onClick={toggleModal}>×</button>
          </div>

          <div className="chat-body">
            <div className="chat-bubble">
              <p><strong>Olá!</strong></p>
              <p>
                Bem-vindo à JF Tech, sua fábrica de software em Angola! Como podemos ajudar?
              </p>
              <span className="chat-time">00:19</span>
            </div>
          </div>

          <div className="chat-input-area">
            <input
              type="text"
              className="form-control"
              placeholder="Digite sua mensagem..."
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
            />
            <button className="btn btn-success" onClick={handleSend}>
              <i className="fas fa-paper-plane"></i>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
