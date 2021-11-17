import React, { useState } from "react"
import axios from "axios"
import Input from "./Input"
import { Link } from 'react-router-dom';

const formData = {
  email: "",
  password: "" 
}

const Login = () => {
  const [login, setLogin] = useState(formData)
  const [isLoading, setIsLoading] = useState(false)

  const setInput = newValue => {
    setLogin(login => ({...login, ...newValue}))
  }

  const postLogin = async login => {
    try {
      setIsLoading(true)
      const response = await axios.post(`http://xxxx/api/login`, login)
      if(!response || typeof response != "object") throw new Error("Retorno da API incorreto")
      setIsLoading(false)
    }catch(e) {
      console.error("Erro ao enviar os dados de login")
      console.error(e)
      setIsLoading(false)
    }
  }

  const handleSubmit = e => {
    e.preventDefault()
    postLogin(login)
  }

  return (
    <div className="d-flex flex-column justify-center align-center bg-green w-100 h-100">
      <h1 className="text-center mb-4">MOOC</h1>
      <div className="container-sm p-5 bg-dark rounded-1 text-light">
        <h2 className="mb-5"> Login </h2>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="form-group col-md-6">
              <Input
                name="email"
                onChange={e => setInput({ email: e.target.value })}
                label="Email"
              />
            </div>
            <div className="form-group col-md-6">
              <Input
                name="password"
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
            <Link to="/home" className="btn flex-grow-1 bg-dark-green text-light">
              {isLoading ? "Carregando..." : "Acessar"}
            </Link>
          </div>
        </form>
      </div>
      <p className="text-light text-center">Todos os direitos reservados | Mooc 2021 Corporation </p>
    </div>
  )
}

export default Login