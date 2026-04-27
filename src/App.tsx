import { Routes, Route } from "react-router-dom"

import Hero from "./pages/hero"
import Sobre from "./pages/sobre"
import Contato from "./pages/contato"
import Login from "./pages/login"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/login" element={<Login/>}/>
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/contato" element={<Contato />} />
    </Routes>
  )
}

export default App
