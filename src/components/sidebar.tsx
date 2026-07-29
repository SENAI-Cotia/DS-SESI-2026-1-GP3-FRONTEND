import logo from "../assets/KOR-logo.png"
import { Link, useNavigate } from "react-router-dom"
import { LayoutDashboard, Book, Users, Settings, LogOut } from "lucide-react"

interface LoggedUser {
  nome: string,
  email: string
}

export default function Sidebar() {
  const loggedUser: LoggedUser | null = JSON.parse(sessionStorage.getItem("user") || "null")

  /* função de logout */
  const navigate = useNavigate();
  function handleLogout() {
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("token");

    navigate("/login");
  }

  return (
    <aside className="w-90 h-screen bg-[#3E579D] border-r-2 border-[#4A2B1E] text-white flex flex-col justify-between fixed" style={{ fontFamily: "Inter, sans-serif", fontWeight: 300 }}>

      {/* TOPO */}
      <div>

        {/* Logo */}
        <div className="p-6  flex items-center gap-2 cursor-pointer">
          <Link to="/" className="flex items-center">
            <img src={logo} className="h-16 invert" />
            <h1 className="font-extralight">Kingdom of Reading</h1>
          </Link>
        </div>

        {/* Perfil */}
        <div className="flex items-center gap-3 px-6 pb-4 border-b border-white/20">
          <div className="w-16 h-16 bg-white/30 rounded-full flex items-center justify-center">
            <Users size={40} />
          </div>

          <div className="select-none">
            {
              loggedUser &&
              <p className="font-semibold">
                {loggedUser?.nome}
              </p>
            }
            {
              loggedUser &&
              <p className="text-white/70 text-sm">
                {loggedUser?.email}
              </p>
            }
          </div>
        </div>

        {/* MENU */}
        <nav className="mt-4 flex flex-col">

          <Link
            to="/dashboard"
            className="flex items-center gap-4 px-6 py-6 hover:bg-white/10 transition"
          >
            <LayoutDashboard size={20} />
            Painel da biblioteca
          </Link>

          <Link
            to="/livros"
            className="flex items-center gap-4 px-6 py-6 hover:bg-white/10 transition"
          >
            <Book size={20} />
            Gerenciar livros
          </Link>

          <Link
            to="/alunos"
            className="flex items-center gap-4 px-6 py-6 hover:bg-white/10 transition"
          >
            <Users size={20} />
            Gerenciar alunos
          </Link>

          <Link
            to="/configuracao"
            className="flex items-center gap-4 px-6 py-6 hover:bg-white/10 transition"
          >
            <Settings size={20} />
            Configurações
          </Link>

        </nav>
      </div>

      {/* Sair */}

      <div onClick={handleLogout} className="p-6 border-t border-white/20 hover:bg-[#882b2b] cursor-pointer transition">
        <button className="flex items-center gap-3 cursor-pointer">
          <LogOut size={20} />
          Sair da conta
        </button>
      </div>

    </aside>
  )
}