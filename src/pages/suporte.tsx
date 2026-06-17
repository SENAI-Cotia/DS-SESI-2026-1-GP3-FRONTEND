import Sidebar from "@/components/sidebar";
import {
  User,
  Pencil,
  Headphones,
  Send,
} from "lucide-react";

export default function Suporte() {
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

        {/* Card de Suporte */}
        <div className="bg-white rounded-2xl border border-gray-300 shadow-lg overflow-hidden">
          {/* Cabeçalho */}
          <div className="flex items-center gap-4 px-6 py-5 border-b border-gray-300">
            <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
              <Headphones size={22} />
            </div>

            <div>
              <h3 className="text-xl font-semibold text-neutral-800">
                Suporte
              </h3>
              <p className="text-gray-600 text-sm">
                Converse com nossa equipe para tirar dúvidas ou relatar
                problemas.
              </p>
            </div>
          </div>

          {/* Conteúdo */}
          <div className="p-8">
            {/* Caixa de chat */}
            <div className="border border-gray-300 rounded-xl bg-gray-50 p-6 min-h-[400px] flex flex-col justify-between">
              {/* Mensagens de exemplo */}
              <div className="space-y-4">
                <div className="max-w-[75%] bg-white border border-gray-200 rounded-2xl px-4 py-3 shadow-sm">
                  <p className="text-sm text-gray-800">
                    Olá! Como podemos ajudar você hoje?
                  </p>
                </div>

                <div className="max-w-[75%] ml-auto bg-[#4C5DA8] text-white rounded-2xl px-4 py-3">
                  <p className="text-sm">
                    Estou com dúvidas sobre como alterar minha senha.
                  </p>
                </div>

                <div className="max-w-[75%] bg-white border border-gray-200 rounded-2xl px-4 py-3 shadow-sm">
                  <p className="text-sm text-gray-800">
                    Acesse a aba “Privacidade e segurança” e preencha os campos
                    de senha atual e nova senha.
                  </p>
                </div>
              </div>

              {/* Campo de mensagem */}
              <div className="mt-6 flex items-center gap-3">
                <input
                  type="text"
                  placeholder="Digite sua mensagem..."
                  className="flex-1 border border-gray-300 rounded-full px-5 py-3 outline-none focus:ring-2 focus:ring-[#4C5DA8]"
                />

                <button
                  type="button"
                  className="w-12 h-12 rounded-full bg-[#4C5DA8] text-white flex items-center justify-center hover:opacity-90 transition"
                >
                  <Send size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}