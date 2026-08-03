import { useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import {
  CircleHelp,
  ChevronDown,
  ChevronUp,
  Search,
} from "lucide-react";

import bolinhas from "@/assets/bolinhas.png";
import linhas from "@/assets/linhas.png";
import { Link } from "react-router-dom";

export default function FAQ() {
  const [perguntaAberta, setPerguntaAberta] = useState<number | null>(null);

  const perguntas = [
    {
      pergunta: "Como alterar minha senha?",
      resposta:
        "Acesse Configurações > Privacidade e Segurança, informe sua senha atual e a nova senha e clique em Salvar.",
    },
    {
      pergunta: "Como editar meu perfil?",
      resposta:
        "Na página Configurações clique no ícone de edição, altere as informações desejadas e salve as alterações.",
    },
    {
      pergunta: "Como cadastrar um novo livro?",
      resposta:
        "Na tela Biblioteca clique em 'Adicionar Livro' e preencha as informações solicitadas.",
    },
    {
      pergunta: "Como cadastro um novo aluno?",
      resposta:
        "Na página de empréstimos selecione o empréstimo ativo e clique em Devolver.",
    },
    {
      pergunta: "Esqueci minha senha. O que faço?",
      resposta:
        "Na tela de login utilize a opção 'Esqueci minha senha' para redefinir seu acesso.",
    },
  ];

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section
        className="relative bg-gradient-to-r from-[#232d5c] to-[#5d55a3] text-white pt-44 pb-28 px-24 overflow-hidden"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        <img
          src={bolinhas}
          className="absolute inset-0 w-full h-full object-cover opacity-40 pointer-events-none"
        />

        <img
          src={linhas}
          className="absolute bottom-0 left-0 w-full opacity-40 pointer-events-none"
        />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <CircleHelp
            size={70}
            className="mx-auto mb-6 text-[#B5C4FF]"
          />

          <h1 className="text-6xl font-bold">
            Central de Ajuda
          </h1>

          <p className="text-xl mt-5 text-[#D8E0FF]">
            Encontre respostas rápidas para as dúvidas mais frequentes sobre o
            sistema KOR.
          </p>

          {/* Pesquisa */}
          <div className="mt-10 max-w-2xl mx-auto relative">
            <Search
              className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              placeholder="Pesquisar uma dúvida..."
              className="w-full bg-white rounded-xl py-4 pl-14 pr-5 text-gray-800 outline-none shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#fafafa] py-20 px-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-semibold text-[#3E579D] mb-10">
            Perguntas frequentes
          </h2>

          <div className="space-y-5">
            {perguntas.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border shadow-sm overflow-hidden"
              >
                <button
                  onClick={() =>
                    setPerguntaAberta(
                      perguntaAberta === index ? null : index
                    )
                  }
                  className="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-gray-50 transition cursor-pointer"
                >
                  <span className="text-lg font-medium text-[#2D2D2D]">
                    {item.pergunta}
                  </span>

                  {perguntaAberta === index ? (
                    <ChevronUp className="text-[#3E579D]" />
                  ) : (
                    <ChevronDown className="text-[#3E579D]" />
                  )}
                </button>

                {perguntaAberta === index && (
                  <div className="px-6 pb-6 border-t">
                    <p className="pt-5 text-gray-600 leading-7">
                      {item.resposta}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-20 bg-gradient-to-r from-[#3E579D] to-[#5D55A3] rounded-3xl p-14 text-center text-white">
            <h2 className="text-4xl font-bold">
              Ainda não encontrou sua resposta?
            </h2>

            <p className="mt-4 text-lg text-[#DCE4FF]">
              Nossa equipe está pronta para ajudar você.
            </p>

            <button
              className="mt-8 px-10 py-4 rounded-lg border border-white hover:bg-white hover:text-[#3E579D] transition cursor-pointer"
            >
              <Link to="/contato">
                Entrar em contato
              </Link>
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}