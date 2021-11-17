import React from "react"
import Menu from "./Menu"
import Footer from "./Footer"

const QuemSomos = () => {
  return (
    <div className="w-100 h-100 d-flex flex-column">
      <Menu />
      <div className="flex-grow-1 container d-flex flex-column w-100">
        <div className="d-flex justify-content-center align-items-center w-100 p-5 bg-green">
          <h1 className="fs-3">Conheça nosso time</h1>
        </div>
        <div className="d-flex flex-wrap justify-content-center align-items-center w-100 flex-grow-1 my-3">
          <img src="./images/grande_beicola.jpg" className="img-responsive m-3" alt="Foto do Beiçola" />
          <img src="./images/grande_beicola.jpg" className="img-responsive m-3" alt="Foto do Beiçola" />
          <img src="./images/grande_beicola.jpg" className="img-responsive m-3" alt="Foto do Beiçola" />
          <img src="./images/grande_beicola.jpg" className="img-responsive m-3" alt="Foto do Beiçola" />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default QuemSomos