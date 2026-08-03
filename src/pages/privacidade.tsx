import Sidebar from "@/components/sidebar";
import {
  User,
  Lock,
  Mail,
  Bell,
  Trash2,
} from "lucide-react";

interface LoggedUser {
  userId: number;
  nome: string;
  email: string;
  foto?: string;
}

export default function PrivacidadeSeguranca() {
  const loggedUser: LoggedUser | null = JSON.parse(
    sessionStorage.getItem("user") || "null"
  );

  return (
    <div className="flex">
      <Sidebar />

      <main className="bg-[#fafafa] w-full min-h-screen ml-90 p-12">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-4xl font-medium text-[#2d2d2d]">
            Privacidade e segurança
          </h1>

          <p className="text-gray-500 mt-1">
            Gerencie sua senha, dados pessoais e preferências de segurança.
          </p>
        </header>

        {/* Perfil */}
        <section className="bg-white border rounded-xl p-6 mb-8 shadow-sm">
          <div className="flex items-center gap-6">
            <div className="w-28 h-28 rounded-full bg-[#3E579D] overflow-hidden flex items-center justify-center">
              {loggedUser?.foto ? (
                <img
                  src={loggedUser.foto}
                  alt="Foto do usuário"
                  className="w-full h-full object-cover"
                />
              ) : (
                <User
                  size={55}
                  className="text-white"
                />
              )}
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-neutral-800">
                {loggedUser?.nome}
              </h2>

              <p className="text-gray-500">
                {loggedUser?.email}
              </p>
            </div>
          </div>
        </section>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-6">

          {/* Alterar senha */}
          <section className="bg-white border rounded-xl shadow-sm p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-full bg-gray-100 flex items-center justify-center">
                <Lock size={20} />
              </div>

              <div>
                <h2 className="font-semibold text-lg">
                  Alterar senha
                </h2>

                <p className="text-sm text-gray-500">
                  Atualize sua senha.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-sm text-gray-600">
                  Senha atual
                </label>

                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full border rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-[#3E579D]"
                />
              </div>

              <div>
                <label className="text-sm text-gray-600">
                  Nova senha
                </label>

                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full border rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-[#3E579D]"
                />
              </div>

              <div>
                <label className="text-sm text-gray-600">
                  Confirmar senha
                </label>

                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full border rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-[#3E579D]"
                />
              </div>

              <button
                className="w-full bg-[#3E579D] text-white py-2 rounded-lg hover:bg-[#26396e] transition cursor-pointer"
              >
                Salvar senha
              </button>
            </div>
          </section>

          {/* Alterar email */}
          <section className="bg-white border rounded-xl shadow-sm p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-full bg-gray-100 flex items-center justify-center">
                <Mail size={20} />
              </div>

              <div>
                <h2 className="font-semibold text-lg">
                  Alterar e-mail
                </h2>

                <p className="text-sm text-gray-500">
                  Atualize seu endereço de e-mail.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-sm text-gray-600">
                  E-mail atual
                </label>

                <input
                  type="email"
                  value={loggedUser?.email}
                  disabled
                  className="w-full border rounded-lg px-3 py-2 mt-1 bg-gray-100"
                />
              </div>

              <div>
                <label className="text-sm text-gray-600">
                  Novo e-mail
                </label>

                <input
                  type="email"
                  placeholder="novo@email.com"
                  className="w-full border rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-[#3E579D]"
                />
              </div>

              <button
                className="w-full border border-[#3E579D] text-[#3E579D] py-2 rounded-lg hover:bg-[#3E579D] hover:text-white transition cursor-pointer"
              >
                Atualizar e-mail
              </button>
            </div>
          </section>

          {/* Segurança */}
          <section className="bg-white border rounded-xl shadow-sm p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 rounded-full bg-gray-100 flex items-center justify-center">
                  <Bell size={20} />
                </div>

                <div>
                  <h2 className="font-semibold text-lg">
                    Segurança
                  </h2>

                  <p className="text-sm text-gray-500">
                    Preferências de notificações.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <label className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    defaultChecked
                  />

                  <span className="text-sm text-gray-700">
                    Receber e-mail ao alterar a senha
                  </span>
                </label>

                <label className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    defaultChecked
                  />

                  <span className="text-sm text-gray-700">
                    Avisar quando houver login em outro dispositivo
                  </span>
                </label>
              </div>
            </div>

            <button
              className="mt-8 flex items-center justify-center gap-2 border border-red-500 text-red-500 rounded-lg px-4 py-2 hover:bg-red-50 transition cursor-pointer"
            >
              <Trash2 size={18} />
              Excluir conta
            </button>
          </section>

        </div>
      </main>
    </div>
  );
}