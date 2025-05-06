// modals/form.js
import React, { useEffect } from 'react';
import './styles/form.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import img from '../../images/gallery/person2.jpg'; // ajuste o caminho conforme seu projeto

function FormModal() {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <div
      className="modal fade"
      id="inscreverModal"
      data-bs-target="#inscreverModal"
      tabIndex="-1"
      aria-labelledby="inscreverModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content rounded-2 overflow-hidden shadow">
          <div className="d-flex flex-row flex-wrap">
            {/* Lado esquerdo com imagem */}
            <div
              className="col-md-6 d-none d-md-block bg-cover"
              data-aos="fade-right"
              style={{
                backgroundImage: `url(${img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '400px',
              }}
            ></div>

            {/* Lado direito com formulário */}
            <div className="col-md-6 p-4" data-aos="fade-left">
              <div className="modal-header border-0 pb-0">
                <h5 className="modal-title w-100 text-center" id="inscreverModalLabel" data-aos="zoom-in">
                  Inscreva-se Agora
                </h5>
              </div>
              <div className="modal-body pt-2">
                <form className="row">
                  <div className="mb-3 col-12 text-start" data-aos="fade-up" data-aos-delay="100">
                    <label className="form-label">Nome Completo</label>
                    <input
                      type="text"
                      className="form-control w-100"
                      placeholder="Digite seu nome"
                    />
                  </div>
                  <div className="mb-3 col-12 text-start" data-aos="fade-up" data-aos-delay="200">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control w-100"
                      placeholder="Digite seu email"
                    />
                  </div>
                  <div className="mb-3 col-12 text-start" data-aos="fade-up" data-aos-delay="300">
                    <label className="form-label">Telefone</label>
                    <input
                      type="tel"
                      className="form-control w-100"
                      placeholder="Digite seu telefone"
                    />
                  </div>
                  <div className="col-12" data-aos="fade-up" data-aos-delay="400">
                    <button type="submit" className="btn btn-primary w-100">
                      Enviar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormModal;
