import React, { useState } from "react"
import axios from "axios"

import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"
import Input from "./Input"

const objClient = {
  id: "",
  documento: "",
  idade: "",
  nome: "",
  senha: ""
}

const Editar = () => {
  const [client, setClient] = useState(objClient)
  const [ID, setID] = useState("")
  const [notFoundMessage, setNotFoundMessage] = useState("")
  const [modalState, setModalState] = useState(false)
  const [updatedData, setUpdatedData] = useState({})
  const [updateMessageResult, setUpdateMessageResult] = useState("")
  const [errorUpdate, setErrorUpdate] = useState(false)

  const handleClose = () => setModalState(false)
  const handleShow = () => setModalState(true)

  const setInputID = newID => {
    setID(newID)
  }

  const setInput = newValue => {
    setUpdatedData(updatedData => ({...updatedData, ...newValue}))
  }

  const getClientByID = async () => {
    try {
      if(!ID) return
      const response = await axios.get(`http://localhost:8080/api/user/${ID}`)
      if(!response || typeof response != "object") throw new Error("Retorno da API incorreto") 
      const { data } = response
      if(!data) {
        setClient(objClient)
        return setNotFoundMessage(`Cliente com o ID ${ID} não foi identificado`)
      }
      setNotFoundMessage("")
      const { id, nome, idade, documento, senha } = data
      setClient({ id, nome, idade, documento, senha })
    }catch(e) {
      console.error("Erro ao receber o cliente")
      console.error(e)
      setClient(objClient)
      setNotFoundMessage("Erro ao receber o cliente")
    }
  }

  const putUpdate = async () => {
    try {
      if(!Object.keys(updatedData).length) return handleClose()
      const filteredData = { id: ID, ...updatedData }
      filteredData.nome = filteredData.nome ? filteredData.nome : client.nome
      filteredData.idade = filteredData.idade ? filteredData.idade : client.idade
      filteredData.documento = filteredData.documento ? filteredData.documento : client.documento
      const response = await axios.put(`http://localhost:8080/api/user`, filteredData)
      if(!response || typeof response != "object") throw new Error("Retorno da API incorreto")
      const { status } = response
      if(status == 200) {
        setErrorUpdate(false)
        return setUpdateMessageResult("Cliente atualizado com sucesso")
      }
      setErrorUpdate(true)
      return setUpdateMessageResult("Houve um erro na atualização do cliente")
    }catch(e) {
      console.error("Erro ao atualizar o cliente")
      console.error(e)
      setUpdateMessageResult("Erro ao realizar a requisição de atualização")
      setErrorUpdate(true)
    }
  }

  return (
    <>
      <Button variant="primary" className="align-self-end" onClick={handleShow}> Editar </Button>
      <Modal show={modalState} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Editar cliente pelo ID</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Input
            name="ID"
            onChange={e => setInputID(e.target.value)}
            label="ID do Cliente"
          />
          <Button variant="secondary" className="my-3 float-end" onClick={getClientByID}> Pesquisar </Button>
          { notFoundMessage &&
            <p className="text-danger">{notFoundMessage}</p>
          }
        </Modal.Body>
        <Modal.Footer>
          {Object.values(client)[0] &&
            Object.values(client).map((value, index) => {
              return (
                index == 0 ? 
                <div className="w-100 fw-bold" key={`${index}-id`}> 
                  <p className="fs-5">Editando - #ID {value}</p> 
                </div> 
                : 
                <div className="w-100 d-flex flex-column" key={`${index}-input`}>
                  <label>{Object.keys(client)[index]}:</label>
                  <input className="form-control" onChange={e => setInput({ [Object.keys(client)[index]]: e.target.value })} defaultValue={value ? value : ''} type={Object.keys(client)[index] == 'senha' ? 'password' : 'text'} />
                </div>
              )
            })
          }
          {
            updateMessageResult &&
            <p className={errorUpdate ? `text-danger` : 'text-success'}>{updateMessageResult}</p>
          }
          <Button variant="primary" onClick={putUpdate}> Atualizar </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Editar