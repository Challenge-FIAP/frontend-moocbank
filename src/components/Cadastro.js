import React, { useState } from "react"
import axios from "axios"
import Input from "./Input"
import Menu from "./Menu"
import Footer from "./Footer"

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
      const response = await axios.put(`http://localhost:8080/api/user`, cadastro)
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
    <div className="w-100 h-100 d-flex flex-column">
      <Menu />
      <h1 className="text-center"> Cadastro </h1>
      <form onSubmit={handleSubmit} className="flex-grow-1 container mb-3 d-flex flex-wrap">
        <h2 className="w-100"> Dados Pessoais </h2>
        <div className="row w-100">
          <div className="col-md-3">
            <Input
              name="name"
              onChange={e => setInput({ name: e.target.value })}
              label="Nome"
            />
          </div>
          <div className="col-md-3">
            <Input
              name="document"
              onChange={e => setInput({ document: e.target.value })}
              label="Documento"
            />
          </div>
          <div className="col-md-3">
            <Input
              name="birthDate"
              type="date"
              onChange={e => setInput({ birthDate: e.target.value })}
              label="Data de Nascimento"
            />
          </div>
          <div className="col-md-3">
            <Input
              name="sex"
              onChange={e => setInput({ sex: e.target.value })}
              label="Sexo"
            />
          </div>
        </div>
        <h2 className="w-100"> Endereço </h2>
        <div className="row w-100">
          <div className="col-md-3">
            <Input
              name="email"
              onChange={e => setInput({ email: e.target.value })}
              label="Email"
            />
          </div>
          <div className="col-md-3">
            <Input
              name="phone"
              onChange={e => setInput({ phone: e.target.value })}
              label="Telefone"
            />
          </div>
        </div>
        <br />
        <div className="col-md-12 d-flex justify-content-center align-self-end">
          <button type="submit" className="btn bg-green w-50">
            {isLoading ? "Carregando..." : "Confirmar Cadastro"}
          </button>
        </div>
      </form>
      <Footer />
    </div>
  )
}

export default Cadastro