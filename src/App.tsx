import { Routes, Route } from "react-router-dom";

import Hero from "./pages/hero"
import Sobre from "./pages/sobre"
import Contato from "./pages/contato"
import Livros from "./pages/livros"
import Alunos from "./pages/alunos"
import Dashboard from "./pages/dashboard"
import Login from "./pages/login";
import Cadastro from "./pages/cadastro";
import Configuracao from "./pages/configuracao";
import Privacidade from "./pages/privacidade";
import Suporte from "./pages/suporte";
import FAQ from "./pages/faq";
import ProtectedRoute from "./protectedRoute";

export default function App() {
  return (
    <Routes>

      <Route path="/" element={<Hero />} />
      <Route path="sobre" element={<Sobre />} />
      <Route path="contato" element={<Contato />} />
      <Route path="login" element={<Login />} />
      <Route path="cadastro" element={<Cadastro />} />
      <Route path="faq" element={<FAQ />} />

<<<<<<< Updated upstream
      {/* Páginas principais */}
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/contato" element={<Contato />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />

      {/* Configurações */}
      <Route path="/configuracao" element={<Configuracao />} />
      <Route path="/privacidade" element={<Privacidade />} />
      <Route path="/suporte" element={<Suporte />} />
      <Route path="/faq" element={<FAQ />} />
=======
      {/* páginas que exigem login */}
      <Route element={<ProtectedRoute />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="livros" element={<Livros />} />
        <Route path="alunos" element={<Alunos />} />
        <Route path="configuracao" element={<Configuracao />} />
        <Route path="suporte" element={<Suporte />} />
        <Route path="privacidade" element={<Privacidade />} />
      </Route>
>>>>>>> Stashed changes
    </Routes>
  );
}