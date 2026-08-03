import logo from "../assets/KOR-logo.png"
import { Search, UserRound, } from "lucide-react"
import { Link, NavLink } from "react-router-dom"

interface LoggedUser {
    nome: string
}

export default function Navbar() {
    const loggedUser: LoggedUser | null = JSON.parse(sessionStorage.getItem("user") || "null")

    /* funcao para a linha da navbar */
    const navLinkClass = ({ isActive }) =>
        `relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:bg-white after:transition-all after:duration-300 ${isActive
            ? "after:w-full"
            : "after:w-0 hover:after:w-full"
        }`;

    return (
        <div className="bg-[#3E579D] text-white font-extralight p-8 h-24 flex items-center justify-between" style={{ fontFamily: "Inter, sans-serif", fontWeight: 300 }}>


            {/* logo */}
            <div className="cursor-pointer">
                <Link to="/" className="flex items-center">
                    <img src={logo} alt="KOR logo" className="h-16 invert" />
                    <p className="text-white p-4 font-light">Kingdom of Reading</p>
                </Link>
            </div>


            {/* interações e pesquisa */}
            <div className="flex gap-12 items-center ">
                <NavLink to="/" end className={navLinkClass}>
                    Início
                </NavLink>

                <NavLink to="/sobre" className={navLinkClass}>
                    Sobre
                </NavLink>

                <NavLink to="/contato" className={navLinkClass}>
                    Contato
                </NavLink>

                <NavLink to="/faq" className={navLinkClass}>
                    FAQ
                </NavLink>


                <div className="flex items-center bg-white rounded-full px-4 py-1.5 w-80 border border-gray-300 focus-within:ring-1 focus-within:ring-blue-400" >

                    <Search className="text-gray-500 mr-2" size={18}></Search>

                    <input
                        type="text"
                        placeholder="Buscar..."
                        className="w-full text-black outline-none">
                    </input>
                </div>


                {
                    loggedUser &&
                    <p className="text-white select-none">
                        Olá, {loggedUser?.nome}
                    </p>

                }
                <Link to="/dashboard">
                    <UserRound className="text-white cursor-pointer hover:scale-110 transition" size={36} />
                </Link>


            </div>
        </div>

    )
}