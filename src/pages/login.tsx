import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Api } from "@/lib/api";
import { jwtDecode } from 'jwt-decode';
import { toast } from "sonner";


interface LoginType {
  token: string
}

export default function Login() {
  const [usuario, setUsuario] = useState({
    email: "",
    senha: "",
  });
  const [erro, setErro] = useState("");
  const navigate = useNavigate()

  /* Atualizar os campos */
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  }

  async function handleLogin() {
    setErro("");

    if (!usuario.email || !usuario.senha) {
      setErro("Preencha todos os campos.");
      return;
    }

    try {
      const response = await Api.post<LoginType>("/login", {
        email: usuario.email,
        senha: usuario.senha,
      });

      const token = response.data.token

      sessionStorage.setItem("token", token)
      sessionStorage.setItem("user", JSON.stringify(jwtDecode(token)))

      navigate("/");
      toast.success("Login realizado com sucesso!")
    } catch (error: any) {
      setErro(
        error.response?.data?.message ||
        "Não foi possível conectar ao servidor."
      );
    }

  }

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
      {/* LADO ESQUERDO */}
      <div className="w-1/2 flex flex-col justify-center px-16 text-white relative">
        <img
          src="/KOR logo.png"
          alt="Kingdom of Reading"
          className="absolute top-5 left-1/2 -translate-x-1/2 w-40 invert mt-15"
        />

        <div className="h-16" />

        <h1 className="text-7xl font-serif leading-tight">
          Descubra,
          <br />
          avalie e
          <br />
          compartilhe <span>livros</span>
        </h1>

        <p className="mt-6 text-gray-300 max-w-md">
          Descubra novos livros, avalie eles, compartilhe com seus amigos e veja
          o que seus colegas acharam.
        </p>

        <p className="absolute bottom-4 left-4 text-xs text-white">
          © Kingdom of Reading - KOR All rights reserved.
        </p>
      </div>

      {/* LADO DIREITO */}
      <div className="w-1/2 flex items-center justify-center">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 p-10 rounded-2xl shadow-2xl w-[400px]">
          <h2 className="text-white text-center text-lg tracking-widest mb-6">
            LOGIN
          </h2>

          <label className="text-gray-200 text-sm">E-mail ou CPF</label>
          <input
            name="email"
            type="text"
            placeholder="Email/CPF"
            value={usuario.email}
            onChange={handleChange}
            className="w-full mt-1 mb-4 p-3 rounded-lg bg-white text-black outline-none"
          />

          <label className="text-gray-200 text-sm">Senha</label>
          <input
            name="senha"
            type="password"
            placeholder="Senha"
            value={usuario.senha}
            onChange={handleChange}
            onKeyDown={(e) => e.key === "Enter" && handleLogin()}
            className="w-full mt-1 mb-2 p-3 rounded-lg bg-white text-black outline-none"
          />
          {erro && (
            <p className="text-red-400 text-sm mb-4 text-center">
              {erro}
            </p>
          )}

          <p className="text-blue-400 text-sm mb-4 cursor-pointer">
            Esqueci a senha
          </p>

          <button
            type="button"
            onClick={handleLogin}
            className="w-full bg-blue-900 hover:bg-blue-800 transition p-3 rounded-lg text-white font-semibold cursor-pointer"
          >
            Entrar
          </button>

          <p className="text-gray-100 text-sm mt-4 text-center">
            Não possui uma conta?{" "}
            <Link
              to="/cadastro"
              className="text-blue-400 hover:underline"
            >
              Cadastrar
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}