import Login from "./views/Login";
import Cadastro from "./views/Cadastro";
import Home from "./views/Home";
import QuemSomos from "./views/QuemSomos";
import Admin from "./views/Admin";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <main className="App">
      <Routes>
        <Route path="/" element={<Login />} exact />
        <Route path="/register" element={<Cadastro />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<QuemSomos />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </main>
  );
}

export default App;
