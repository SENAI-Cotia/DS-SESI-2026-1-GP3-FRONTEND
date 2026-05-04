import { Routes, Route } from "react-router-dom"

import Hero from "./pages/hero"
import Sobre from "./pages/sobre"
import Contato from "./pages/contato"
import Livros from "./pages/livros"
import Alunos from "./pages/alunos"
import Dashboard from "./pages/dashboard"
import Config from "./pages/config"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="sobre" element={<Sobre />} />
      <Route path="contato" element={<Contato />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="livros" element={<Livros />} />
      <Route path="alunos" element={<Alunos />} />
      <Route path="config" element={<Config />} />
    </Routes>
  )
}

export default App