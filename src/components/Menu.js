import React from 'react'
import { Link } from 'react-router-dom';

const Menu = () => {
  return(
    <nav className="navbar w-100 bg-dark text-light p-4">
      <ul className="m-0 p-0 mx-3 navbar-nav flex-row justify-content-between align-items-center w-100">
        <Link className="navbar-brand text-light" to="/">
          <img src="./images/mooc_logo_branco.png" className="w-150px" alt="Logo Mooc Branco" />
        </Link>
        <li className="nav-item">
          <a href="#" className="nav-link text-light">Nosso Trabalho</a>
        </li>
        <Link className="nav-item d-flex justify-content-center align-items-center text-light text-decoration-none" to="/about">
          Quem Somos
        </Link>
        <li className="nav-item">
          <a href="#" className="nav-link text-light">Quero me Cadastrar</a>
        </li>
        <Link className="nav-item btn btn-outline-green" to="/">
          Acessar minha conta
        </Link>
      </ul>
    </nav>
  )
}

export default Menu