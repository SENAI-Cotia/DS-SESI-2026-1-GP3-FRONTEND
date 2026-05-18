import { useState } from "react";
import Sidebar from "@/components/sidebar";
import {
  User,
  Pencil,
  CircleHelp,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

export default function FAQ() {
  const [perguntaAberta, setPerguntaAberta] = useState<number | null>(null);

  const perguntas = [
    {
      pergunta: "Como alterar minha senha?",
      resposta:
        "Acesse a aba 'Privacidade e segurança', preencha os campos de senha atual, nova senha e confirmação e clique em 'Salvar'.",
    },
    {
      pergunta: "Como alterar meu e-mail?",
      resposta:
        "Na aba 'Privacidade e segurança', localize a seção 'Alterar e-mail', informe o novo endereço e clique em 'Atualizar e-mail'.",
    },
    {
      pergunta: "Como entrar em contato com o suporte?",
      resposta:
        "Abra a aba 'Suporte', digite sua dúvida no campo de mensagem e envie para conversar com nossa equipe.",
    },
    {
      pergunta: "Como ativar alertas de segurança?",
      resposta:
        "Na aba 'Privacidade e segurança', marque as opções de alerta para receber notificações por e-mail sobre alterações e novos logins.",
    },
    {
      pergunta: "Como excluir minha conta?",
      resposta:
        "Na aba 'Privacidade e segurança', clique no botão 'Excluir conta' localizado no canto inferior direito.",
    },
    {
      pergunta: "Onde encontro respostas para dúvidas comuns?",
      resposta:
        "Na aba 'FAQ' você encontra perguntas frequentes com respostas rápidas sobre as principais funcionalidades do sistema.",
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      {/* Conteúdo principal com scroll apenas na direita */}
      <main className="flex-1 h-screen overflow-y-auto px-10 py-8">
        {/* Título */}
        <div className="mb-6">
          <h1 className="text-4xl font-bold text-neutral-800">
            Configurações
          </h1>
          <p className="mt-2 text-gray-600 max-w-xl leading-relaxed">
            Altere informações ou configurações de acordo com sua preferência.
          </p>
        </div>

        {/* Perfil */}
        <div className="flex flex-col items-center mb-10">
          <div className="w-40 h-40 rounded-full bg-neutral-600 flex items-center justify-center mb-4">
            <User size={90} color="white" />
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center gap-2">
              <h2 className="text-4xl font-bold text-neutral-800">
                Bibliotecária
              </h2>

              <button type="button">
                <Pencil size={24} />
              </button>
            </div>

            <p className="text-sm text-gray-600 mt-1">
              usuario123@gmail.com
            </p>
          </div>
        </div>

        {/* Card FAQ */}
        <div className="bg-white rounded-2xl border border-gray-300 shadow-lg overflow-hidden">
          {/* Cabeçalho */}
          <div className="flex items-center gap-4 px-6 py-5 border-b border-gray-300">
            <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
              <CircleHelp size={22} />
            </div>

            <div>
              <h3 className="text-xl font-semibold text-neutral-800">
                FAQ
              </h3>
              <p className="text-gray-600 text-sm">
                Encontre respostas para as dúvidas mais comuns.
              </p>
            </div>
          </div>

          {/* Perguntas */}
          <div className="p-8 space-y-4">
            {perguntas.map((item, index) => (
              <div
                key={index}
                className="border border-gray-300 rounded-xl overflow-hidden"
              >
                {/* Botão da pergunta */}
                <button
                  type="button"
                  onClick={() =>
                    setPerguntaAberta(
                      perguntaAberta === index ? null : index
                    )
                  }
                  className="w-full flex items-center justify-between px-5 py-4 bg-gray-50 hover:bg-gray-100 transition text-left"
                >
                  <h4 className="font-semibold text-neutral-800">
                    {item.pergunta}
                  </h4>

                  {perguntaAberta === index ? (
                    <ChevronUp size={18} className="text-gray-500" />
                  ) : (
                    <ChevronDown size={18} className="text-gray-500" />
                  )}
                </button>

                {/* Resposta */}
                {perguntaAberta === index && (
                  <div className="px-5 py-4 bg-white border-t border-gray-200">
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {item.resposta}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}