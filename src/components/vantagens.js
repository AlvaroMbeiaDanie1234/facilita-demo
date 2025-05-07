import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './styles/vantagens.css'; // Arquivo CSS para os serviços
import appImage from '../images/gallery/person2.jpg'; // Use a imagem do app aqui

const servicos = [
  {
    icon: '🏬',
    title: 'MarketPlace',
    description: 'Facilita é um super app! Somos um shopping online onde se concentram as melhores lojas de diversos segmentos.',
    color: '#b3f0ff',
  },
  {
    icon: '💰',
    title: 'Facilita Pay',
    description: 'É uma carteira digital que lhe oferece a maior facilidade para gerir o seu saldo e realizar transações.',
    color: '#fff2b3',
  },
  {
    icon: '🚲',
    title: 'Facilita Pack',
    description: 'Serve para enviar e receber qualquer Facilita.',
    color: '#ffd6e0',
  },
  {
    icon: '🏃‍♂️',
    title: 'Facilita Express',
    description: 'Parceria com a SPAR para entregar produtos em até 30 minutos.',
    color: '#e0d6ff',
  },
];

const Servicos = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="servicos-section">
      <div className="servicos-container">
        <div className="servicos-image" data-aos="fade-right">
        </div>
        <div className="servicos-conteudo" data-aos="fade-left">
          <h2>Saiba mais sobre os nossos serviços.</h2>
          <div className="servicos-lista">
            {servicos.map((item, index) => (
              <div className="servico-item" key={index}>
                <div
                  className="servico-icon"
                  style={{ backgroundColor: item.color }}
                >
                  {item.icon}
                </div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Servicos;
