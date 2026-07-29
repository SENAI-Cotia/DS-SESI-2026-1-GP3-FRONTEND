import Sidebar from "@/components/sidebar";
import {
  User,
  Headphones,
  Mail,
  FileText,
  Send,
} from "lucide-react";

interface LoggedUser {
  userId: number;
  nome: string;
  email: string;
  foto?: string;
}

export default function Suporte() {
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
            Suporte
          </h1>

          <p className="text-gray-500 mt-1">
            Entre em contato com nossa equipe para dúvidas, sugestões ou problemas.
          </p>
        </header>

        {/* Perfil */}
        <section className="bg-white border rounded-xl p-6 mb-8 shadow-sm">
          <div className="flex items-center gap-6">

            <div className="w-28 h-28 rounded-full bg-[#3E579D] flex items-center justify-center overflow-hidden">

              {loggedUser?.foto ? (
                <img
                  src={loggedUser.foto}
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

        {/* Card */}
        <section className="bg-white border rounded-xl shadow-sm">

          <div className="flex items-center gap-4 p-6 border-b">

            <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
              <Headphones size={22} />
            </div>

            <div>
              <h2 className="text-xl font-semibold">
                Central de suporte
              </h2>

              <p className="text-sm text-gray-500">
                Nossa equipe responderá sua solicitação por e-mail.
              </p>
            </div>

          </div>

          <div className="p-8 space-y-6">

            <div>
              <label className="text-sm text-gray-600">
                Assunto
              </label>

              <div className="relative mt-1">
                <FileText
                  size={18}
                  className="absolute left-3 top-3 text-gray-400"
                />

                <input
                  type="text"
                  placeholder="Ex.: Problema ao cadastrar um livro"
                  className="w-full border rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#3E579D]"
                />
              </div>
            </div>

            <div>
              <label className="text-sm text-gray-600">
                E-mail para resposta
              </label>

              <div className="relative mt-1">
                <Mail
                  size={18}
                  className="absolute left-3 top-3 text-gray-400"
                />

                <input
                  type="email"
                  defaultValue={loggedUser?.email}
                  className="w-full border rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#3E579D]"
                />
              </div>
            </div>

            <div>
              <label className="text-sm text-gray-600">
                Descreva o problema
              </label>

              <textarea
                rows={8}
                placeholder="Explique o que aconteceu para que possamos ajudá-lo."
                className="w-full mt-1 border rounded-lg px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-[#3E579D]"
              />
            </div>

            <div className="flex justify-end">
              <button
                className="flex items-center gap-2 bg-[#3E579D] text-white px-6 py-3 rounded-lg hover:bg-[#26396e] transition cursor-pointer"
              >
                <Send size={18} />
                Enviar solicitação
              </button>
            </div>

          </div>

        </section>

      </main>
    </div>
  );
}