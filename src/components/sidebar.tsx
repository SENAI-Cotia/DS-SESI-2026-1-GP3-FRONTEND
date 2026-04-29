import logo from "../assets/KOR-logo.png"
import { Link } from "react-router-dom"
import { LayoutDashboard, Book, Users, Settings, LogOut } from "lucide-react"

export default function Sidebar() {
  return (
    <aside className="w-[300px] h-screen bg-[#3E579D] border-r-2 border-[#4A2B1E] text-white flex flex-col justify-between" style={{ fontFamily: "Inter, sans-serif", fontWeight: 300 }}>

      {/* TOPO */}
      <div>

        {/* Logo */}
        <div className="p-6  flex items-center gap-2 cursor-pointer">
          <img src={logo} className="w-12 invert" />
          <h1 className="font-extralight">Kingdom of Reading</h1>
        </div>

        {/* Perfil */}
        <div className="flex items-center gap-3 p-6 border-b border-white/20">
          <div className="w-16 h-16 bg-white/30 rounded-full flex items-center justify-center">
            <Users size={40} />
          </div>

          <div className="select-none">
            <p className="font-semibold">Bibliotecária</p>
            <span className="text-sm text-white/70">
              usuario@email.com
            </span>
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
            to="/config"
            className="flex items-center gap-4 px-6 py-6 hover:bg-white/10 transition"
          >
            <Settings size={20} />
            Configurações
          </Link>

        </nav>
      </div>

      {/* Sair */}
      <div className="p-6 border-t border-white/20 hover:bg-red-700 cursor-pointer transition">
        <button className="flex items-center gap-3 cursor-pointer">
          <LogOut size={20} />
          Sair da conta
        </button>
      </div>

    </aside>
  )
}