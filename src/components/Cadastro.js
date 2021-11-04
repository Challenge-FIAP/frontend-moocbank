import React, { useState } from "react"
import axios from "axios"
import Input from "./Input"

const formData = {
  email: "",
  document: "",
  name: "",
  birthDate: "",
  password: ""
}

const Cadastro = () => {
  const [cadastro, setCadastro] = useState(formData)
  const [isLoading, setIsLoading] = useState(false)

  const setInput = newValue => {
    setCadastro(cadastro => ({...cadastro, ...newValue}))
  }

  const postCadastro = async cadastro => {
    try {
      setIsLoading(true)
      const response = await axios.post(`http://xxxx/api/cadastro`, cadastro)
      if(!response || typeof response != "object") throw new Error("Retorno da API incorreto")
      setIsLoading(false)
    }catch(e) {
      console.error("Erro ao enviar os dados de cadastro")
      console.error(e)
      setIsLoading(false)
    }
  }

  const handleSubmit = e => {
    e.preventDefault()
    postCadastro(cadastro)
  }

  return (
    <>
      <h1> Cadastro </h1>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="form-group col-md-4">
            <Input
              name="email"
              onChange={e => setInput({ email: e.target.value })}
              label="Email"
            />
          </div>
          <div className="form-group col-md-4">
            <Input
              name="document"
              onChange={e => setInput({ document: e.target.value })}
              label="Documento"
            />
          </div>
          <div className="form-group col-md-4">
            <Input
              name="name"
              onChange={e => setInput({ name: e.target.value })}
              label="Nome"
            />
          </div>
        </div>
        <div className="row">
          <div className="form-group col-md-6">
            <Input
              name="birthDate"
              type="date"
              onChange={e => setInput({ birthDate: e.target.value })}
              label="Data de Nascimento"
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

export default Cadastro