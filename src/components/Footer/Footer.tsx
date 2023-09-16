import React from "react";
import "./Footer.scss";
import fPagamento from "../../assets/icons/formas_pagamento.svg";
import facebook from "../../assets/icons/023-facebook.svg";
import instagram from "../../assets/icons/044-instagram.svg";
import youtube from "../../assets/icons/116-youtube.svg";
import logo from "../../assets/icons/Group 831.svg";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="footer-container">
      <div className="contact-div">
        <div className="contact-container">
          <div className="about">
            <span className="about-title">Sobre nós</span>

            <p className="about-text">Conheça</p>
            <p className="about-text">Como comprar</p>
            <p className="about-text">Indicação e desconto</p>

            <div className="social-div">
              <img className="social-icon" src={facebook} alt="facebook-icon" />
              <img
                className="social-icon"
                src={instagram}
                alt="instagram-icon"
              />
              <img className="social-icon" src={youtube} alt="youtube-icon" />
            </div>
          </div>
          <div className="information-div">
            <span className="information-title">Informações úteis</span>

            <p className="information-text">Fale conosco</p>
            <p className="information-text">Dúvidas</p>
            <p className="information-text">Prazos de entrega</p>
            <p className="information-text">Formas de pagamento</p>
            <p className="information-text">Política de privacidade</p>
            <p className="information-text">Trocas e devoluções</p>
          </div>
          <div className="payment-div">
            <span className="payment-title">Formas de pagamento</span>

            <img className="payment-img" src={fPagamento} alt="payment-img" />
          </div>

          <div className="register-div">
            <div className="register-card">
              <h3 className="register-title">
                Cadastre-se e Receba nossas{" "}
                <span className="register-bold-text">
                  novidades e promoções
                </span>
                <p className="register-text">
                  Excepteur sint occaecat cudatat non ent, sunt in culpa qui
                  officia lorem ipsum
                </p>
                <input
                  type="text"
                  placeholder="SEU E-MAIL"
                  className="register-input"
                />
                <button className="ok-button">ok</button>
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="copyrigth-div">
        <div className="text-container">
          <p className="copy-text">
            Copyright © 2019. Todos os direitos reservados. Todas as marcas e
            suas imagens são de propriedade de seus respectivos donos. É vedada
            a reprodução, total ou parcial, de qualquer conteúdo sem expressa
            autorização.
          </p>
          <img className="copy-logo" src={logo} alt="logo" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
