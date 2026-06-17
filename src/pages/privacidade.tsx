import Sidebar from "@/components/sidebar";
import {
  User,
  Pencil,
  Lock,
  Mail,
  Bell,
  Trash2,
  ChevronUp,
} from "lucide-react";

export default function PrivacidadeSeguranca() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      {/* Conteúdo principal */}
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

        {/* Card principal */}
        <div className="bg-white rounded-2xl border border-gray-300 shadow-lg overflow-hidden">
          {/* Cabeçalho do card */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-gray-300">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                <Lock size={22} />
              </div>

              <div>
                <h3 className="text-xl font-semibold text-neutral-800">
                  Privacidade e segurança
                </h3>
                <p className="text-gray-600 text-sm">
                  Gerencie sua senha, dados e preferências de privacidade.
                </p>
              </div>
            </div>

            <ChevronUp size={24} />
          </div>

          {/* Conteúdo */}
          <div className="grid grid-cols-3 gap-12 p-8 min-h-[420px]">
            {/* Alterar senha */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Lock size={18} />
                <h4 className="font-semibold text-lg">Alterar senha</h4>
              </div>

              <div className="space-y-3">
                <div>
                  <label className="text-sm text-gray-600">Senha atual</label>
                  <input
                    type="password"
                    className="w-full border border-gray-400 rounded-md px-3 py-2 mt-1"
                    placeholder="••••••••"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-600">Nova senha</label>
                  <input
                    type="password"
                    className="w-full border border-gray-400 rounded-md px-3 py-2 mt-1"
                    placeholder="••••••••"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-600">
                    Confirmar nova senha
                  </label>
                  <input
                    type="password"
                    className="w-full border border-gray-400 rounded-md px-3 py-2 mt-1"
                    placeholder="••••••••"
                  />
                </div>

                <button
                  type="button"
                  className="w-full bg-[#4C5DA8] text-white py-2 rounded-md hover:opacity-90 transition"
                >
                  Salvar
                </button>
              </div>
            </div>

            {/* Alterar e-mail */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Mail size={18} />
                <h4 className="font-semibold text-lg">Alterar e-mail</h4>
              </div>

              <div className="space-y-3">
                <div>
                  <label className="text-sm text-gray-600">E-mail atual</label>
                  <input
                    type="email"
                    className="w-full border border-gray-400 rounded-md px-3 py-2 mt-1"
                    defaultValue="usuario123@gmail.com"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-600">Novo e-mail</label>
                  <input
                    type="email"
                    className="w-full border border-gray-400 rounded-md px-3 py-2 mt-1"
                    placeholder="alguem222@gmail.com"
                  />
                </div>

                <button
                  type="button"
                  className="w-full border border-[#4C5DA8] text-[#4C5DA8] py-2 rounded-md hover:bg-[#4C5DA8] hover:text-white transition"
                >
                  Atualizar e-mail
                </button>
              </div>
            </div>

            {/* Alertas de segurança */}
            <div className="flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Bell size={18} />
                  <h4 className="font-semibold text-lg">
                    Alertas de segurança
                  </h4>
                </div>

                <div className="space-y-3 text-sm text-gray-700">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" defaultChecked />
                    Receber e-mail ao trocar senha
                  </label>

                  <label className="flex items-center gap-2">
                    <input type="checkbox" defaultChecked />
                    Receber alerta de login em novo dispositivo
                  </label>
                </div>
              </div>

              <button
                type="button"
                className="self-end flex items-center gap-2 px-5 py-2 rounded-full border border-red-500 text-red-500 hover:bg-red-50 transition"
              >
                <Trash2 size={16} />
                Excluir conta
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}