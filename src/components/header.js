// Header.js
import React from 'react';
import logo from '../images/logo192.png';
import './styles/header.css';
import FormModal from './modals/form';

function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg custom-navbar shadow-sm sticky-top">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="Logo da Loja" style={{ width: '100px' }} />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <div className="d-flex align-items-center gap-3 mt-3 mt-lg-0">
              <a href="#" className="nav-link text-black">Sobre</a>
              <a href="#" className="nav-link text-black">Tornar-se Sócio</a>
              <a
                href="#"
                className="inscrever-btn"
                data-bs-toggle="modal"
                data-bs-target="#inscreverModal"
              >
                Inscrever-se
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Modal incluído aqui */}
      <FormModal />
    </>
  );
}

export default Header;
