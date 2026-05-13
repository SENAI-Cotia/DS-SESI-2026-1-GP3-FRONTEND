import Sidebar from "@/components/sidebar";
import { useNavigate } from "react-router-dom";
import {
  User,
  Pencil,
  Shield,
  Headphones,
  CircleHelp,
  ChevronRight,
} from "lucide-react";

export default function Configuracoes() {
  // Hook do React Router para navegar entre páginas
  const navigate = useNavigate();

  const cards = [
    {
      icon: Shield,
      title: "Privacidade e segurança",
      subtitle:
        "Gerencie suas senhas, dados e preferências de privacidade.",
      onClick: () => navigate("/privacidade"),
    },
    {
      icon: Headphones,
      title: "Suporte",
      subtitle: "Fale com nossa equipe ou abra uma solicitação.",
      onClick: () => navigate("/suporte"),
    },
    {
      icon: CircleHelp,
      title: "FAQ",
      subtitle: "Encontre respostas para as dúvidas mais comuns.",
      onClick: () => navigate("/faq"),
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Conteúdo da direita */}
      <main className="flex-1 h-screen overflow-y-auto px-6 pt-8 pb-10">
        {/* Cabeçalho */}
        <div className="mb-6">
          <h1 className="text-4xl font-bold text-neutral-800">
            Configurações
          </h1>
          <p className="mt-1 max-w-[500px] text-base leading-6 text-gray-500">
            Altere informações ou configurações de acordo com sua preferência.
          </p>
        </div>

        {/* Perfil */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-32 h-32 rounded-full bg-neutral-600 flex items-center justify-center mb-3">
            <User size={64} color="#FFFFFF" strokeWidth={1.8} />
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center gap-2">
              <h2 className="text-2xl font-bold text-neutral-800">
                Bibliotecária
              </h2>

              <button type="button" className="p-1">
                <Pencil size={16} color="#444" />
              </button>
            </div>

            <p className="text-sm text-gray-500 mt-1">
              usuario123@gmail.com
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="flex flex-wrap justify-center gap-4">
          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <button
                key={index}
                type="button"
                onClick={card.onClick}
                className="w-[290px] min-h-[78px] bg-white rounded-xl border border-gray-300 px-4 py-3 flex items-center justify-between shadow-md text-left hover:shadow-lg transition"
              >
                <div className="flex flex-1 mr-2">
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center mr-3 mt-0.5">
                    <Icon size={18} color="#5B5B5B" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-sm font-bold text-neutral-800 mb-1">
                      {card.title}
                    </h3>
                    <p className="text-xs leading-4 text-gray-500">
                      {card.subtitle}
                    </p>
                  </div>
                </div>

                <ChevronRight size={20} color="#6B7280" />
              </button>
            );
          })}
        </div>
      </main>
    </div>
  );
}