import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const API = "http://10.92.199.11:3000";

export default function Cadastro() {
  const navigate = useNavigate();
  const [cpf, setCpf] = useState("");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [erro, setErro] = useState("");
  const [carregando, setCarregando] = useState(false);

  async function handleCadastro() {
    setErro("");

    if (!cpf || !nome || !email || !senha || !confirmarSenha) {
      setErro("Preencha todos os campos.");
      return;
    }

    if (senha.length < 8) {
      setErro("Senha deve ter no mínimo 8 caracteres.");
      return;
    }

    if (senha !== confirmarSenha) {
      setErro("As senhas não coincidem.");
      return;
    }

    setCarregando(true);
    try {
      const response = await fetch(`${API}/bibliotecaria`, { // ✅ corrigido
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, email, cpf, senha }), // ✅ curso adicionado
      });

      const data = await response.json();

      if (!response.ok) {
        setErro(data.error || "Erro ao criar conta.");
        return;
      }

      navigate("/login");
    } catch (err) {
      setErro("Não foi possível conectar ao servidor.");
    } finally {
      setCarregando(false);
    }
  }

  return (
    <div className="h-screen w-full flex bg-[#0f172a]">

      {/* FORMULÁRIO À ESQUERDA */}
      <div className="w-1/2 flex items-center justify-center bg-gradient-to-br from-[#0f172a] to-[#284d8a]">
        <div className="backdrop-blur-md bg-white/20 border border-white/20 p-10 rounded-2xl shadow-2xl w-[400px]">

          <h2 className="text-white text-center text-lg tracking-widest mb-6">
            CADASTRO
          </h2>

          <label className="text-gray-200 text-sm">CPF</label>
          <input
            type="text"
            placeholder="CPF"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            className="w-full mt-1 mb-3 p-3 rounded-lg bg-white text-black outline-none"
          />

          <label className="text-gray-200 text-sm">Nome Completo</label>
          <input
            type="text"
            placeholder="Nome Completo"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="w-full mt-1 mb-3 p-3 rounded-lg bg-white text-black outline-none"
          />

          <label className="text-gray-200 text-sm">E-mail</label>
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mt-1 mb-3 p-3 rounded-lg bg-white text-black outline-none"
          />

          

          <label className="text-gray-200 text-sm">Senha</label>
          <input
            type="password"
            placeholder="Senha (mín. 8 caracteres)"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className="w-full mt-1 mb-3 p-3 rounded-lg bg-white text-black outline-none"
          />

          <label className="text-gray-200 text-sm">Confirmar Senha</label>
          <input
            type="password"
            placeholder="Confirmar Senha"
            value={confirmarSenha}
            onChange={(e) => setConfirmarSenha(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleCadastro()}
            className="w-full mt-1 mb-4 p-3 rounded-lg bg-white text-black outline-none"
          />

          {erro && (
            <p className="text-red-400 text-sm mb-4 text-center">{erro}</p>
          )}

          <button
            type="button"
            onClick={handleCadastro}
            disabled={carregando}
            className="w-full bg-blue-900 hover:bg-blue-800 transition p-3 rounded-lg text-white font-semibold disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {carregando ? "Cadastrando..." : "Cadastrar"}
          </button>

          <p className="text-gray-100 text-sm mt-4 text-center">
            Já possui uma conta?{" "}
            <Link to="/login" className="text-blue-400 cursor-pointer">
              Login
            </Link>
          </p>
        </div>
      </div>

      {/* IMAGEM À DIREITA */}
      <div
        className="w-1/2 flex flex-col justify-center px-16 text-white relative"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(15,23,42,0.95), rgba(15,23,42,0.7)), url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <img
          src="/KOR logo.png"
          alt="Kingdom of Reading"
          className="absolute top-5 left-1/2 -translate-x-1/2 w-40 invert mt-15"
        />

        <div className="h-16" />

        <h1 className="text-7xl font-serif leading-tight">
          Descubra,<br />
          avalie e<br />
          compartilhe <span>livros</span>
        </h1>

        <p className="mt-6 text-gray-300 max-w-md">
          Descubra novos livros, avalie eles, compartilhe com seus amigos e veja
          o que seus colegas acharam.
        </p>

        <p className="absolute bottom-4 text-xs text-gray-400">
          © Kingdom of Reading - KOR All rights reserved.
        </p>
      </div>

    </div>
  );
}