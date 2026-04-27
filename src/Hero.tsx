// npm create vite@latest
// npm install tailwindcss @tailwindcss/vite
// Outras dependências olhar no app
// npm run dev

import Navbar from "./components/navbar"
import books from "./assets/books.png"
import bolinhas from "./assets/bolinhas.png"
import linhas from "./assets/linhas.png"
import phones from "./assets/phones.png"
import app_store from "./assets/app_store.png"
import play_store from "./assets/play_store.png"
import qrcode from "./assets/qrcode.png"

function Hero() {
  return (
    <>
      <Navbar />

      {/* =================== HERO ====================== */}

      {/* draggable={false} impede de arrastar a imagem no site */}

      <div className="relative bg-gradient-to-r from-[#232d5c] to-[#5d55a3] text-white min-h-screen flex items-start pt-60 px-24 overflow-hidden" style={{ fontFamily: "Inter, sans-serif" }} draggable={false}>


        {/* bolinhas decorativas */}
        <img
          src={bolinhas}
          alt=""
          className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none select-none opacity-80"
        />

        {/* linhas decorativas */}
        <img
          src={linhas}
          alt=""
          className="absolute bottom-0 left-0 w-full pointer-events-none select-none opacity-70"
        />

        {/* Texto esquerda */}
        <div className="max-w-2xl z-10">

          <h1 className="text-8xl font-bold">
            EXPLORE
          </h1>

          <h2 className="text-6xl font-light mt-2 text-[#B5C4FF]">
            O universo da leitura
          </h2>

          <div className="w-160 h-0.5 bg-[#B5C4FF] my-6"></div>

          <p className="text-[16px] leading-6 max-w-[500px]">
            Transformando leitura em experiência, conectando leitores ao universo dos livros de forma moderna e acessível.
          </p>

          <button className="mt-8 border text-lg border-white px-24 py-4 rounded-lg hover:bg-white hover:text-[#3E579D] transition cursor-pointer">
            Explorar
          </button>

        </div>

        {/* imagem */}
        <div className="absolute right-[-250px] bottom-0">
          <img
            src={books}
            alt="Livros"
            className="w-[1200px] object-contain select-none pointer-events-none" draggable={false}
          />
        </div>


        {/* formatos diferentes são gerados por site */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg
            viewBox="0 0 1440 320" /* largura e altura */
            className="w-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* path gerado automaticamente pro formato da onda */}
            <path
              fill="#ffffff"
              d="M0,224L60,240C120,256,240,288,360,282.7C480,277,600,235,720,202.7C840,171,960,149,1080,154.7C1200,160,1320,192,1380,208L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            />
          </svg>
        </div>
      </div>









      {/* ================= DESTAQUES ================= */}

      <div className="bg-white py-40 px-24">

        <h2
          className="text-6xl text-center text-[#3E579D] mb-12"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Destaques
        </h2>

        {/* card azul grande */}
        <div className="w-full h-96 bg-[#4A5EA8] rounded-2xl border border-[#5B3A29]">
        </div>

      </div>


      {/* ================= APP SECTION ================= */}

      <div className="relative bg-[#4A5EA8] border-y border-[#5B3A29] px-24 py-10 flex items-center justify-between overflow-visible">

        {/* celular esquerda */}
        <div className="absolute left-8">
          <img
            src={phones}
            alt="Celulares"
            className="w-[450px]"
          />
        </div>

        {/* espaço reservado pro celular */}
        <div className="w-[280px]"></div>

        {/* texto central */}
        <div className="flex flex-col items-center justify-center text-center text-white flex-1">

          <p className="text-4xl">
            ACESSE O CELULAR E
          </p>

          <h2 className="text-6xl font-bold">
            USE JÁ NO APP
          </h2>

          <div className="flex gap-4 justify-center mt-6">

            <img
              src={app_store}
              alt="App Store"
              className="w-[220px] h-auto cursor-pointer hover:scale-105 transition"
            />

            <img
              src={play_store}
              alt="Google Play"
              className="w-[220px] h-16 cursor-pointer  hover:scale-105 transition"
            />

          </div>
        </div>

        {/* qr code direita */}
        <div className="flex flex-col items-center justify-center text-center text-white w-[300px]">

          <p className="text-3xl mb-4">
            Ou acesse o QR Code
          </p>

          <img
            src={qrcode}
            alt="QR Code"
            className="w-[250px]"
          />

        </div>

      </div>


      {/* ================= FOOTER ================= */}

      <footer className="bg-[#1E1E1E] text-white px-12 py-24">

        <div className="flex items-start justify-center gap-20 text-center">

          {/* Logo + nome */}
          <div>
            <h2 className="text-3xl font-bold">
              Kingdom of Reading
            </h2>

            <p className="text-gray-400 mt-3 max-w-sm">
              Transformando leitura em experiência, conectando leitores
              ao universo dos livros de forma moderna e acessível.
            </p>
          </div>

          {/* Links rápidos */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Navegação
            </h3>

            <div className="flex flex-col gap-2 text-gray-300">
              <a href="" className="hover:text-white transition">
                Início
              </a>

              <a href="" className="hover:text-white transition">
                Sobre
              </a>

              <a href="" className="hover:text-white transition">
                Contato
              </a>
            </div>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Contato
            </h3>

            <div className="flex flex-col gap-2 text-gray-300">
              <p>contato@kor.com</p>
              <p>(11) 99999-9999</p>
              <p>São Paulo - SP</p>
            </div>
          </div>

        </div>

        {/* linha */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400">
          © 2026 Kingdom of Reading — Todos os direitos reservados
        </div>

      </footer>
    </>
  )
}

export default Hero
