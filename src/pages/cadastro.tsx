<<<<<<< Updated upstream
import { Link } from "react-router-dom";

export default function Cadastro() {
=======
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Api } from "@/lib/api";
import { toast } from "sonner";

export default function Cadastro() {
  const navigate = useNavigate();
  const [erro, setErro] = useState("");
  const [novoUsuario, setNovoUsuario] = useState({
    cpf: "",
    nome: "",
    email: "",
    senha: "",
    confirmarSenha: "",
  });

  /* atualizar os campos */
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setNovoUsuario({
      ...novoUsuario,
      [e.target.name]: e.target.value,
    });
  }

  async function handleCadastro() {
    setErro("");

    /* validacao dos campos */
    if (
      !novoUsuario.cpf ||
      !novoUsuario.nome ||
      !novoUsuario.email ||
      !novoUsuario.senha ||
      !novoUsuario.confirmarSenha
    ) {
      setErro("Preencha todos os campos.");
      return;
    }

    /* tamanho do cpf */
    if (novoUsuario.cpf.length !== 11) {
      setErro("O CPF deve conter 11 dígitos.");
      return;
    }

    /* tamanho da senha */
    if (novoUsuario.senha.length < 8) {
      setErro("A senha deve ter no mínimo 8 caracteres.");
      return;
    }

    /* coincidir senha */
    if (novoUsuario.senha !== novoUsuario.confirmarSenha) {
      setErro("As senhas não coincidem.");
      return;
    }


    try {
      await Api.post("/bibliotecaria", {
        cpf: novoUsuario.cpf,
        nome: novoUsuario.nome,
        email: novoUsuario.email,
        senha: novoUsuario.senha,
      });

      navigate("/login");

      toast.success("Cadastro deletado com sucesso!")
    } catch (error: any) {
      setErro(
        error.response?.data?.error ||
        "Não foi possível conectar ao servidor."
      );
    }
  }

>>>>>>> Stashed changes
  return (
    <div
      className="h-screen w-full flex"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(15,23,42,0.9), rgba(15,23,42,0.6)), url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >

<<<<<<< Updated upstream
      {/* FORMULÁRIO À ESQUERDA */}
      <div className="w-1/2 flex items-center justify-center bg-gradient-to-br from-[#0f172a] to-[#284d8a]">

        <div className="backdrop-blur-md bg-white/20 border border-white/20 p-10 rounded-2xl shadow-2xl w-[400px]">
=======
      {/* Formulário */}
      <div className="w-1/2 flex items-center justify-center">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 p-10 rounded-2xl shadow-2xl w-[400px]">
>>>>>>> Stashed changes

          <h2 className="text-white text-center text-lg tracking-widest mb-6">
            CADASTRO
          </h2>

          <label className="text-gray-200 text-sm">CPF</label>
          <input
            name="cpf"
            placeholder="CPF"
<<<<<<< Updated upstream
=======
            maxLength={11}
            value={novoUsuario.cpf}
            onChange={(e) => {
              const valor = e.target.value;

              if (!/^\d*$/.test(valor)) return;

              setNovoUsuario({
                ...novoUsuario,
                cpf: valor,
              });
            }}
>>>>>>> Stashed changes
            className="w-full mt-1 mb-3 p-3 rounded-lg bg-white text-black outline-none"
          />

          <label className="text-gray-200 text-sm">Nome Completo</label>
          <input
            name="nome"
            placeholder="Nome Completo"
<<<<<<< Updated upstream
=======
            value={novoUsuario.nome}
            onChange={handleChange}
>>>>>>> Stashed changes
            className="w-full mt-1 mb-3 p-3 rounded-lg bg-white text-black outline-none"
          />

          <label className="text-gray-200 text-sm">E-mail</label>
          <input
            name="email"
            placeholder="E-mail"
<<<<<<< Updated upstream
=======
            value={novoUsuario.email}
            onChange={handleChange}
>>>>>>> Stashed changes
            className="w-full mt-1 mb-3 p-3 rounded-lg bg-white text-black outline-none"
          />

          <label className="text-gray-200 text-sm">Senha</label>
          <input
            name="senha"
            placeholder="Senha"
            type="password"
<<<<<<< Updated upstream
            placeholder="Senha"
=======
            value={novoUsuario.senha}
            onChange={handleChange}
>>>>>>> Stashed changes
            className="w-full mt-1 mb-3 p-3 rounded-lg bg-white text-black outline-none"
          />


          <label className="text-gray-200 text-sm">Confirmar Senha</label>
          <input
            name="confirmarSenha"
            placeholder="Confirmar Senha"
<<<<<<< Updated upstream
            className="w-full mt-1 mb-4 p-3 rounded-lg bg-white text-black outline-none"
          />


          <button className="w-full bg-blue-900 hover:bg-blue-800 transition p-3 rounded-lg text-white font-semibold">
=======
            type="password"
            value={novoUsuario.confirmarSenha}
            onChange={handleChange}
            className="w-full mt-1 mb-3 p-3 rounded-lg bg-white text-black outline-none"
            onKeyDown={(e) => e.key === "Enter" && handleCadastro()}
          />

          {erro && (
            <p className="text-red-400 text-sm mb-4 text-center">
              {erro}
            </p>
          )}

          <button
            type="button"
            onClick={handleCadastro}

            className="mt-4 w-full bg-blue-900 hover:bg-blue-800 transition p-3 rounded-lg text-white font-semibold cursor-pointer"
          >
>>>>>>> Stashed changes
            Cadastrar
          </button>

          <p className="text-gray-100 text-sm mt-4 text-center">
            Já possui uma conta?{" "}
            <Link to="/login" className="text-blue-400 cursor-pointer">Login</Link>
          </p>
        </div>
      </div>

      {/* IMAGEM À DIREITA */}
<<<<<<< Updated upstream
      <div
        className="w-1/2 flex flex-col justify-center px-16 text-white relative"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(15,23,42,0.95), rgba(15,23,42,0.7)), url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >

=======
      <div className="w-1/2 flex flex-col justify-center px-16 text-white relative">
>>>>>>> Stashed changes
        <img
          src="/KOR logo.png"
          className="absolute top-5 left-1/2 -translate-x-1/2 w-40 invert mt-15"
        />

        <div className="h-16"></div>

        <h1 className="text-7xl font-serif leading-tight">
          Descubra,<br />
          avalie e<br />
          compartilhe <span>livros</span>
        </h1>

        <p className="mt-6 text-gray-300 max-w-md">
          Descubra novos livros, avalie eles, compartilhe com seus amigos e veja
          o que seus colegas acharam.
        </p>

        <p className="absolute bottom-4 right-4 text-xs text-white">
          © Kingdom of Reading - KOR All rights reserved.
        </p>
      </div>

    </div>
  );
}