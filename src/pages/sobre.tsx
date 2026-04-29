import Footer from "@/components/footer"
import Navbar from "../components/navbar"

function Sobre() {
  return (
    <>
      <Navbar />

      <main className="bg-white text-[#1E1E1E]">

        {/* HERO */}
        <section className="bg-gradient-to-r from-[#232d5c] to-[#5d55a3] text-white py-32 px-6 md:px-12 lg:px-24 text-center">

          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Sobre a KOR
          </h1>

          <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
            Facilitando a gestão de bibliotecas escolares com tecnologia, simplicidade e eficiência.
          </p>

        </section>

        {/* HISTÓRIA */}
        <section className="py-20 px-6 md:px-12 lg:px-24 text-center max-w-4xl mx-auto">

          <h2 className="text-4xl text-[#3E579D] mb-6">
            Nossa História
          </h2>

          <p className="text-gray-600 leading-relaxed">
            A KOR surgiu com o objetivo de simplificar a organização de bibliotecas escolares.
            Desde o início, buscamos criar uma solução prática para o gerenciamento de alunos,
            livros e atividades, tornando o dia a dia mais eficiente.
            Com o tempo, evoluímos nossa plataforma, sempre focando em usabilidade e clareza.
          </p>

        </section>


        {/* VALORES */}
        <section className="py-20 px-6 md:px-12 lg:px-24 text-center bg-[#F5F7FF]">

          <h2 className="text-4xl text-[#3E579D] mb-10">
            O que nos guia
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white shadow-md rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-2">Missão</h3>
              <p className="text-gray-600">
                Facilitar a gestão de bibliotecas escolares com soluções simples e eficientes.
              </p>
            </div>

            <div className="bg-white shadow-md rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-2">Visão</h3>
              <p className="text-gray-600">
                Tornar-se referência em sistemas educacionais acessíveis.
              </p>
            </div>

            <div className="bg-white shadow-md rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-2">Valores</h3>
              <p className="text-gray-600">
                Simplicidade, eficiência e foco no usuário.
              </p>
            </div>

          </div>

        </section>

        {/* EQUIPE */}
        <section className=" py-20 px-6 md:px-12 lg:px-24 text-center">

          <h2 className="text-4xl text-[#3E579D] mb-10">
            Nosso Time
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">

            {[
              { nome: "Ana Carvalho", funcao: "Desenvolvedora Mobile" },
              { nome: "Breno Amaral", funcao: "Dev Front & Designer" },
              { nome: "Gabriel Bento", funcao: "Desenvolvedor Mobile" },
              { nome: "Lavínia Bispo", funcao: "Analista de APIs" },
              { nome: "Miguel Francelino", funcao: "Desenvolvedor Full-Stack" },
              { nome: "Samuel Santos", funcao: "Desenvolvedor Back-End & APIs" }
            ].map((membro, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md">

                <div className="w-40 h-40 bg-gray-200 rounded-full mx-auto mb-3"></div>

                <h4 className="font-semibold">{membro.nome}</h4>
                <span className="text-sm text-gray-500">{membro.funcao}</span>

              </div>
            ))}

          </div>

        </section>

        {/* CTA */}
        <section className="py-20 text-center px-6">

          <h2 className="text-4xl text-[#3E579D] mb-4">
            Quer conhecer o sistema?
          </h2>

          <p className="text-gray-600 mb-6">
            Comece a organizar sua biblioteca agora mesmo.
          </p>

          <button className="bg-[#4A5EA8] text-white px-8 py-3 rounded-lg hover:scale-105 transition cursor-pointer">
            Começar agora
          </button>

        </section>

      </main>

      <Footer/>
    </>
  )
}

export default Sobre