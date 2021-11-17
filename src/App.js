import Login from "./components/Login"
import Cadastro from "./components/Cadastro"
import Home from "./components/Home"
import QuemSomos from "./components/QuemSomos"

import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <main className="App">
      <Routes>
        <Route path='/' element={<Login />} exact />
        <Route path='/register' element={<Cadastro />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<QuemSomos />} />
        <Route path='*' element={<Login />} />
      </Routes>
    </main>
    // <div className="App container-fluid bg-light-green">
    //   <Login />
    // </div>
  )
}

export default App
