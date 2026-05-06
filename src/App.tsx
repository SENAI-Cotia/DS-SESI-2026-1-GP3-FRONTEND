import { Routes, Route } from "react-router-dom"

import Hero from "./pages/hero"
import Sobre from "./pages/sobre"
import Contato from "./pages/contato"
import Login from "./pages/login"
import Cadastro from "./pages/cadastro"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/login" element={<Login/>}/>
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/contato" element={<Contato />} />
      <Route path="/cadastrar" element={<Cadastro/>}></Route>
    </Routes>
  )
}

export default App
