import React, { useState } from "react"
import axios from "axios"
import Input from "./Input"

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
    <>
      <h1> Login </h1>
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
        <div className="form-group col-md-12">
          <button type="submit" className="btn btn-primary">
            {isLoading ? "Carregando..." : "Enviar"}
          </button>
        </div>
      </form>
    </>
  )
}

export default Login