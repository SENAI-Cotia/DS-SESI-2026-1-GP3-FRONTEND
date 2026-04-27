import logo from "../assets/KOR-logo.png"
import { Search, UserRound, } from "lucide-react"

export default function Navbar() {
    return (
        <div className="bg-[#3E579D] text-white font-extralight p-8 h-24 flex items-center justify-between" style={{ fontFamily: "Inter, sans-serif", fontWeight: 300 }}>


            {/* logo */}
            <div className="flex items-center cursor-pointer">
                <img src={logo} alt="KOR logo" className="h-16 invert" />
                <p className="text-white p-4 font-light">Kingdom of Reading</p>
            </div>


            {/* interações e pesquisa */}
            <div className="flex gap-12 items-center ">
                <a href="" className="relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full">Início</a>
                <a href="" className="relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full">Sobre</a>
                <a href="" className="relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full">Contato</a>

                <div className="flex items-center bg-white rounded-full px-4 py-1.5 w-80 border border-gray-300 focus-within:ring-1 focus-within:ring-blue-400" >

                    <Search className="text-gray-500 mr-2" size={18}></Search>

                    <input
                    type="text"
                    placeholder="Buscar..."
                    className="w-full text-black outline-none">
                    </input>
                </div>

                <UserRound  className="text-white cursor-pointer hover:scale-110 transition" size={36} />


            </div>
        </div>

    )
}