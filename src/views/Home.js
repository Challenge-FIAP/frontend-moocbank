import React from "react";
import Menu from "../components/Menu";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="w-100 h-100 d-flex flex-column">
      <Menu />
      <div className="flex-grow-1 container d-flex flex-wrap w-100">
        <div className="d-flex flex-wrap justify-content-center align-items-center w-100">
          <h1 className="me-5">O que é a MOOC?</h1>
          <img
            className="img-fluid"
            src="./images/imagem.jpg"
            alt="Imagem com árvores, céu e sol"
          />
        </div>
        <div className="d-flex justify-content-center w-100">
          <div className="bg-yellow w-100 d-flex flex-column p-3">
            <p className="text-center m-0 p-0 mb-3">Plataforma</p>
            <p className="m-0 p-0">
              Disponibilizamos uma plataforma simples e intuitiva onde você pode
              ajudar nosso planeta e ainda ser recomenpesado com isso.
            </p>
          </div>
          <div className="bg-green w-100 d-flex flex-column p-3">
            <p className="text-center m-0 p-0 mb-3">Começando</p>
            <p className="m-0 p-0">
              Para começar você deve se cadastrar na nossa plataforma, através
              do nosso formulário onde você também decide como quer utilizar a
              nossa plataforma.
            </p>
          </div>
          <div className="bg-water-blue w-100 d-flex flex-column p-3">
            <p className="text-center">Aplicando</p>
            <p className="m-0 p-0">
              Aqui na Mooc, você consegue acompanhar todo o processo de suas
              atividades de maneira bem simples através dos nossos dashboards
              intuitivos, as aplicações são seguras e nós prezamos pela
              integridade de nossos usuários.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
