import Sidebar from "@/components/sidebar"
import { Search, Filter, Pencil, Trash2 } from "lucide-react"

function Livros() {
    return (
        <>
            <div className="flex">
                <Sidebar />

                <div className="p-6 w-[80%]">
                    {/* Header */}
                    <div className="flex justify-between items-center mb-10">
                        <div>
                            <h1 className="text-2xl font-semibold">Gerenciar livros</h1>
                            <p className="text-gray-500 text-sm">
                                Cadastre, edite ou remova livros do acervo da biblioteca
                            </p>
                        </div>

                        <button className="bg-[#3E579D] text-white px-4 py-2 rounded-lg hover:bg-[#26396e] cursor-pointer">
                            + Adicionar livro
                        </button>
                    </div>

                    {/* Filtros */}
                    <div className="bg-white border rounded-xl p-4 mb-6 flex gap-4 items-center flex-wrap">
                        <div className="flex items-center border rounded-lg px-3 py-2 w-full max-w-sm">
                            <Search size={16} className="text-gray-400 mr-2" />
                            <input
                                type="text"
                                placeholder="Buscar por título, livro ou ISBN..."
                                className="outline-none w-full text-sm"
                            />
                        </div>

                        <select className="border rounded-lg px-3 py-2 text-sm">
                            <option>Todas</option>
                            <option>Tecnologia</option>
                        </select>

                        <select className="border rounded-lg px-3 py-2 text-sm">
                            <option>Todos</option>
                            <option>Disponível</option>
                            <option>Indisponível</option>
                        </select>

                        <button className="flex items-center gap-2 border px-3 py-2 rounded-lg text-sm hover:bg-gray-100 cursor-pointer">
                            <Filter size={16} />
                            Filtrar
                        </button>
                    </div>

                    {/* Tabela */}
                    <div className="bg-white border rounded-xl overflow-hidden">
                        <table className="w-full text-sm table-fixed">
                            <thead className="bg-gray-50 text-gray-600">
                                <tr>
                                    <th className="text-left p-4 w-[40%]">Livro</th>
                                    <th className="text-left p-4 w-[20%]">Autor</th>
                                    <th className="text-left p-4 w-[20%]">Categoria</th>
                                    <th className="text-left p-4 w-[10%]">Status</th>
                                    <th className="text-right p-4 w-[10%]">Ações</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr className="border-t">
                                    <td className="p-4 flex items-center gap-4">
                                        <img
                                            src="" /* Imagem do livro */
                                            className="w-10 h-14 object-cover rounded"
                                        />
                                        <div>
                                            <p className="font-medium">Eletrônica Básica</p>
                                            <p className="text-xs text-gray-400">
                                                ISBN: 123-1234567671
                                            </p>
                                        </div>
                                    </td>

                                    <td className="p-4">Newton C. Braga</td>
                                    <td className="p-4">Tecnologia</td>

                                    <td className="p-4 select-none">
                                        <span className="px-3 py-1 rounded-full text-xs bg-green-100 text-green-700">
                                            Disponível
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

export default Livros