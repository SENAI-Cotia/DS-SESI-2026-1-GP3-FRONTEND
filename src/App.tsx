import { Routes, Route } from "react-router-dom";

import Hero from "./pages/hero";
import Sobre from "./pages/sobre";
import Contato from "./pages/contato";
import Login from "./pages/login";
import Cadastro from "./pages/cadastro";
import Configuracao from "./pages/configuracao";
import Privacidade from "./pages/privacidade";
import Suporte from "./pages/suporte";
import FAQ from "./pages/faq";

export default function App() {
  return (
    <Routes>
      {/* Página inicial */}
      <Route path="/" element={<Hero />} />

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
    </Routes>
  );
}