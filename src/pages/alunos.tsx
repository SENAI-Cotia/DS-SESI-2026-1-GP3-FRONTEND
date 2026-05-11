import Sidebar from "@/components/sidebar"
import { Search, Filter, Pencil, Trash2, UserRound } from "lucide-react"

function Alunos() {
    return (
        <>
            <div className="flex">
                <Sidebar />

                <div className="bg-[#fafafa] w-[80%] ml-90 p-12">
                    {/* Header */}
                    <header className="flex items-center justify-between mb-8">
                        <div>
                            <h1 className="text-4xl font-medium text-[#2d2d2d]">
                                Gerenciar alunos
                            </h1>

                            <p className="text-gray-500 text-x1 mt-1">
                                Cadastre, edite ou remova alunos da tabela
                            </p>
                        </div>

                         <button className="bg-[#3E579D] text-white px-4 py-2 rounded-lg hover:bg-[#26396e] cursor-pointer">
                            + Adicionar tabela
                        </button>
                    </header>


                    {/* Filtros */}
                    <div className="bg-white border rounded-xl p-4 mb-6 flex gap-4 items-center flex-wrap justify-between">
                        <div className="flex items-center border rounded-lg px-3 py-2 w-full max-w-sm">
                            <Search size={16} className="text-gray-400 mr-2" />
                            <input
                                type="text"
                                placeholder="Buscar por nome, email ou rm..."
                                className="outline-none w-full text-sm"
                            />
                        </div>

                        <div className="flex items-center gap-4">

                            <div>
                                <p className="text-gray-500 text-sm font-medium">Curso</p>
                                <select className="border rounded-lg px-2 py-2 text-sm w-55">
                                    <option>Todas</option>
                                    <option>Desenvolvimento de Sistemas</option>
                                </select>
                            </div>

                            <div>
                                <p className="text-gray-500 text-sm font-medium">Status</p>
                                <select className="border rounded-lg px-2 py-2 text-sm w-55">
                                    <option>Todos</option>
                                    <option>Disponível</option>
                                    <option>Ausente</option>
                                </select>
                            </div>

                            <div>
                                <p className="text-gray-500 text-sm font-medium">Filtrar por</p>
                                <button className="flex items-center w-28 gap-2 border px-6 py-2 rounded-lg text-sm hover:bg-gray-100 cursor-pointer">
                                    <Filter size={16} />
                                    Filtrar
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Tabela */}
                    <div className="bg-white border rounded-xl overflow-hidden">
                        <table className="w-full text-sm table-fixed">
                            <thead className="bg-gray-50 text-gray-600">
                                <tr>
                                    <th className="text-left p-4 w-[40%]">Aluno</th>
                                    <th className="text-left p-4 w-[20%]">RM</th>
                                    <th className="text-left p-4 w-[20%]">Curso</th>
                                    <th className="text-left p-4 w-[10%]">Status</th>
                                    <th className="text-right p-4 w-[10%]">Ações</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr className="border-t">
                                    <td className="p-6 flex items-center gap-4">
                                        <UserRound className="text-gray-400" size={36} />
                                        <div>
                                            <p className="font-medium">Aluno</p>
                                            <p className="text-xs text-gray-400">
                                                aluno@gmail.com
                                            </p>
                                        </div>
                                    </td>

                                    <td className="p-4">1234</td>
                                    <td className="p-4">Desenvolvimento de Sistemas</td>

                                    <td className="p-4 select-none">
                                        <span className="px-3 py-1 rounded-full text-xs bg-green-100 text-green-700">
                                            Online
                                        </span>
                                    </td>

                                    <td className="p-4">
                                        <div className="flex justify-end gap-2">
                                            <button className="p-2 rounded-lg bg-blue-50 border border-blue-500 hover:bg-blue-100 cursor-pointer">
                                                <Pencil size={16} className="text-blue-500" />
                                            </button>

                                            <button className="p-2 rounded-lg bg-red-50 border border-red-500 hover:bg-red-100 cursor-pointer">
                                                <Trash2 size={16} className="text-red-500" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Alunos