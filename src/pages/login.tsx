export default function Login() {
  return (
    <div className="h-screen w-full flex bg-[#0f172a]">

      {/* LADO ESQUERDO */}
      <div
        className="w-1/2 flex flex-col justify-center px-16 text-white relative"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(15,23,42,0.95), rgba(15,23,42,0.7)), url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}


      >


        <div className="w-1/2 relative flex flex-col justify-center px-16 text-white"/>

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

          <p className="absolute bottom-4 text-xs text-gray-400">
            © Kingdom of Reading - KOR All rights reserved.
          </p>
        </div>


        <div className="w-1/2 flex items-center justify-center bg-gradient-to-br from-[#0f172a] to-[#284d8a]">

          <div className="backdrop-blur-md bg-white/20 border border-white/20 p-10 rounded-2xl shadow-2xl w-[400px]">

            <h2 className="text-white text-center text-lg tracking-widest mb-6">
              LOGIN
            </h2>

            <label className="text-gray-200 text-sm">E-mail ou CPF</label>
            <input
              type="text"
              placeholder="Email/CPF"
              className="w-full mt-1 mb-4 p-3 rounded-lg bg-white text-black outline-none"
            />

            <label className="text-gray-200 text-sm">Senha</label>
            <input
              type="password"
              placeholder="Senha"
              className="w-full mt-1 mb-2 p-3 rounded-lg bg-white text-black outline-none"
            />

            <p className="text-blue-400 text-sm mb-4 cursor-pointer">
              Esqueci a senha
            </p>

            <button className="w-full bg-blue-900 hover:bg-blue-800 transition p-3 rounded-lg text-white font-semibold">
              Entrar
            </button>

            <p className="text-gray-100 text-sm mt-4 text-center">
              Não possui uma conta?{" "}
              <span className="text-blue-400 cursor-pointer">Cadastrar</span>
            </p>
          </div>

        </div>
      </div>
      );
}