import React, { useState } from "react"
import Input from "../components/Input"
import { Link } from 'react-router-dom';

const formData = {
  email: "",
  password: "" 
}

const Login = () => {
  const [login, setLogin] = useState(formData)

  const setInput = newValue => {
    setLogin(login => ({...login, ...newValue}))
  }

  return (
    <div className="d-flex flex-column justify-center align-center w-100 h-100">
      <h1 className="fs-4 text-center">
        <img src="./images/mooc_logo.png" className="w-250px" alt="Logo da Mooc" />
      </h1>
      <div className="container-sm p-5 bg-dark rounded-1 text-light">
        <h2 className="mb-5"> Login </h2>
        <form>
          <div className="row d-flex flex-column">
            <div className="form-group col-md-12">
              <Input
                name="email"
                onChange={e => setInput({ email: e.target.value })}
                label="Email"
              />
            </div>
            <div className="form-group col-md-12">
              <Input
                name="password"
                type="password"
                onChange={e => setInput({ password: e.target.value })}
                label="Senha"
              />
            </div>
          </div>
          <br />
          <div className="form-group col-md-12 mb-5">
            <a href="#" className="text-light">Esqueci minha senha</a>
          </div>
          <div className="d-flex">
            <Link to="/register" className="btn bg-green flex-grow-1 me-4">Cadastre-se</Link>
            <Link to="/home" className="btn flex-grow-1 bg-dark-green text-light">Acessar</Link>
          </div>
        </form>
      </div>
      <p className="text-center">Todos os direitos reservados | Mooc 2021 Corporation </p>
    </div>
  )
}

export default Login