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
import { useState } from "react";
import { Api } from "@/lib/api"
import { toast } from "sonner";

interface LoggedUser {
  userId: number;
  nome: string;
  email: string;
}

export default function Configuracao() {
  const navigate = useNavigate();

  const loggedUser: LoggedUser | null = JSON.parse(
    sessionStorage.getItem("user") || "null"
  );

  const [editando, setEditando] = useState(false);
  const [nome, setNome] = useState(
    loggedUser?.nome || ""
  );
  const [email, setEmail] = useState(
    loggedUser?.email || ""
  );


  const cards = [
    {
      icon: Shield,
      title: "Privacidade e segurança",
      subtitle:
        "Gerencie suas senhas, dados pessoais e preferências de privacidade.",
      onClick: () => navigate("/privacidade"),
    },
    {
      icon: Headphones,
      title: "Suporte",
      subtitle:
        "Entre em contato com a equipe ou abra uma solicitação.",
      onClick: () => navigate("/suporte"),
    },
    {
      icon: CircleHelp,
      title: "FAQ",
      subtitle:
        "Encontre respostas para dúvidas frequentes.",
      onClick: () => navigate("/faq"),
    },
  ];


  /* salvar */
  async function salvarAlteracoes() {

    if (!loggedUser) return;

    try {

      const response = await Api.put(
        `/usuarios/${loggedUser.userId}`,
        {
          nome,
        }
      );


      const usuarioAtualizado = {
        ...loggedUser,
        ...response.data
      };

      sessionStorage.setItem(
        "user",
        JSON.stringify(usuarioAtualizado)
      );

      setEditando(false);

      toast.success("Perfil atualizado com sucesso!");
    } catch (error: any) {
      console.log(error.response);

      toast.error(
        error.response?.data?.error || "Erro ao atualizar perfil"
      );
    }

  }

  return (
    <div className="flex">

      <Sidebar />


      <main className="bg-[#fafafa] w-full min-h-screen ml-90 p-12">

        {/* Header */}
        <header className="mb-8">

          <h1 className="text-4xl font-medium text-[#2d2d2d]">
            Configurações
          </h1>

          <p className="text-gray-500 text-base mt-1">
            Altere informações da conta ou configure preferências do sistema.
          </p>

        </header>



        {/* Perfil */}

        <section className="bg-white border rounded-xl p-6 mb-8 shadow-sm relative">

          <div className="flex items-center gap-6">

            <div className="w-28 h-28 rounded-full bg-[#3E579D] flex items-center justify-center overflow-hidden">
              <User size={55} className="text-white"></User>
            </div>


            <div className="flex-1">

              <div className="flex items-center gap-3">

                <div>
                  {
                    editando ? (

                      <input
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        className="text-2xl font-semibold border rounded-lg px-2 w-100"
                      />
                    ) : (

                      <h2 className="text-2xl font-semibold text-neutral-800">
                        {nome}
                      </h2>

                    )
                  }
                </div>


              </div>


              <p className="text-gray-500 mt-1">
                {email}
              </p>


              <p className="text-sm text-gray-400 mt-2">
                Bibliotecária
              </p>

            </div>

            {
              editando ? (

                <button
                  onClick={salvarAlteracoes}
                  className="absolute top-4 right-4 bg-[#3E579D] text-white px-4 py-2 rounded-lg hover:bg-[#26396e] cursor-pointer"
                >
                  Salvar
                </button>

              ) : (

                <button
                  onClick={() => setEditando(true)}
                  className=" absolute top-4 right-4 p-2 rounded-lg hover:bg-gray-100 transition cursor-pointer "
                >
                  <Pencil
                    size={18}
                    className="text-gray-500"
                  />
                </button>

              )
            }
          </div>


        </section>



        {/* Configurações */}

        <section>

          <h2 className="text-xl font-semibold text-[#2d2d2d] mb-4">
            Preferências
          </h2>


          <div className="flex flex-col gap-4">

            {cards.map((card, index) => {

              const Icon = card.icon;

              return (

                <button
                  key={index}
                  onClick={card.onClick}
                  className="
                  bg-white 
                  border 
                  rounded-xl 
                  p-5 
                  flex 
                  items-center 
                  justify-between
                  hover:shadow-md
                  transition
                  cursor-pointer
                  text-left
                  "
                >


                  <div className="flex items-center gap-4">


                    <div className="
                    w-12
                    h-12
                    rounded-full
                    bg-gray-100
                    flex
                    items-center
                    justify-center
                    ">

                      <Icon
                        size={22}
                        className="text-[#3E579D]"
                      />

                    </div>



                    <div>

                      <h3 className="font-semibold text-neutral-800">
                        {card.title}
                      </h3>


                      <p className="text-sm text-gray-500">
                        {card.subtitle}
                      </p>

                    </div>


                  </div>



                  <ChevronRight
                    size={22}
                    className="text-gray-400"
                  />


                </button>

              );

            })}

          </div>


        </section>


      </main>

    </div>



  );

}