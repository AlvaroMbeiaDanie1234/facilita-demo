import React, { useEffect } from 'react';
import '../components/styles/hero.css'; // Arquivo CSS para o fundo
import person1 from '../images/gallery/person1.jpg';
import person2 from '../images/gallery/person2.jpg';
import person3 from '../images/gallery/person3.jpg';
import person4 from '../images/gallery/person4.jpeg';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <section className="hero-section position-relative text-white">
      {/* Imagem de fundo com sobreposição */}
      <div className="hero-background"></div>

      <div className="container position-relative z-2 py-5">
        <div className="row align-items-center">
          {/* Texto principal */}
          <div className="col-md-6 text-center text-md-start" data-aos="fade-right">
            <h1 className="display-5 fw-bold">
              Facilita <span className="text-warning">chegou</span> para facilitar a sua vida
            </h1>
            <p className="lead my-3" data-aos="fade-up" data-aos-delay="100">
              Uma plataforma feita para te conectar ao que realmente importa.
            </p>
            <div className="d-flex gap-3 justify-content-center justify-content-md-start mt-3">
              <a href="#" className="btn btn-success d-flex align-items-center gap-2" data-aos="fade-up" data-aos-delay="200">
                <i className="bi bi-google-play"></i> Play Store
              </a>
              <a href="#" className="btn btn-dark d-flex align-items-center gap-2" data-aos="fade-up" data-aos-delay="300">
                <i className="bi bi-apple"></i> Apple Store
              </a>
            </div>
          </div>

          {/* Imagens de usuários ou exemplos */}
          <div className="col-md-6 d-flex flex-wrap justify-content-center gap-3 mt-4 mt-md-0" data-aos="fade-left">
            {[person1, person2, person3, person4].map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Pessoa ${index + 1}`}
                className="rounded-circle shadow"
                style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                data-aos="zoom-in"
                data-aos-delay={`${100 * index}`}
              />
            ))}
          </div>
        </div>

        {/* Parceiros */}
        {/* Vantagens */}
        <div className="text-center mt-5" data-aos="fade-up">
          <h5 className="text-white-50 mb-3">Vantagens</h5>
          <div className="d-flex justify-content-center gap-3 mt-2 flex-wrap">
            {['Rapidez', 'Segurança', 'Facilitado'].map((item, index) => (
              <span
                key={index}
                className="vantagem-item text-white"
                data-aos="fade-up"
                data-aos-delay={`${200 + index * 100}`}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
