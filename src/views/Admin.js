import React, { useState, useEffect } from "react"
import axios from "axios"
import Menu from "../components/Menu"
import Footer from "../components/Footer"
import Editar from "../components/Editar"

const Admin = () => {
  const [listaClientes, setListaClientes] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [errorMessage, setErrorMessage] = useState("")

  const getClientes = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/user")
      if(!response || typeof response != "object") throw new Error("Retorno da API incorreto")
      const { data } = response
      setIsLoading(false)
      if(!data.length) setErrorMessage("Lista de clientes vazia")
      setListaClientes(data)
    }catch(e) {
      setIsLoading(false)
      setErrorMessage("Erro na requisição, tente novamente mais tarde")
      console.error("Erro ao receber a lista de clientes")
      console.error(e)
    }
  }

  useEffect(() => {
    getClientes()
  }, [])

  return (
    <div className="w-100 h-100 d-flex flex-column">
      <Menu admin={true} />
      <div className="flex-grow-1 container d-flex flex-column w-100">
        {isLoading && <p className="mt-3"> Carregando.. </p>}
        {errorMessage && <p className="mt-3"> {errorMessage} </p>}
        {listaClientes.length && 
        <>
          <h1>Lista de clientes</h1>
          <table className="table table-dark table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nome</th>
                <th scope="col">Idade</th>
                <th scope="col">Documento</th>
              </tr>
            </thead>
            <tbody>
              {listaClientes.map(({ id, nome, idade, documento }, index) => {
                return(
                  <tr key={index}>
                    <th scope="row">{id}</th>
                    <td>{nome}</td>
                    <td>{idade}</td>
                    <td>{documento}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
          <Editar />
        </>
        }
      </div>
      <Footer />
    </div>
  )
}

export default Admin