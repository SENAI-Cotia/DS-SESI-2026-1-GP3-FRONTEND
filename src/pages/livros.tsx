import Sidebar from "../components/sidebar"
import { Search, Filter, Pencil, Trash2 } from "lucide-react"
import { useEffect, useState } from "react";

interface Livros {
    id: number,
    titulo: string,
    capaUrl: string,
    ano: number,
    descricao: string,
    autor: string,
    genero: string,
}


function Livros() {
    /* state, uma variável que, quando muda, atualiza a interface automaticamente*/
    const [livros, setLivros] = useState<Livros[]>([]);
    const [busca, setBusca] = useState("");
    const [modalAberto, setModalAberto] = useState(false)

    /* state para criar um novo livro */
    const [novoLivro, setNovoLivro] = useState({
        titulo: "",
        capaUrl: "",
        ano: new Date().getFullYear(),
        descricao: "",
        autor: "",
        genero: ""
    })


    /* executar algo em momentos específicos, useEffect impede que rode infinitamente */
    useEffect(() => {
        fetch("http://10.92.199.25:3000/livros")
            .then((response) => response.json())
            .then(data => setLivros(data))
    }, [])

    const livrosFiltrados = livros.filter((livro) =>

        livro.titulo.toLowerCase().includes(busca.toLowerCase()) ||

        livro.autor.toLowerCase().includes(busca.toLowerCase()) ||

        livro.descricao.toLowerCase().includes(busca.toLowerCase())

    )





    /* ======== Função de enviar a criação de livros para a API ==================*/
    async function adicionarLivro() {


        /* validação do formulário */
        if (
            !novoLivro.titulo ||
            !novoLivro.autor ||
            !novoLivro.genero ||
            !novoLivro.capaUrl ||
            !novoLivro.descricao
        ) {
            alert("Preencha os campos obrigatórios")
            return
        }


        /* validação do ano de lançamento */
        if (
            novoLivro.ano < 1500 ||
            novoLivro.ano > new Date().getFullYear()
        ) {
            alert("Digite um ano válido")
            return
        }

        /* Criação do livro e enviando para API */
        const response = await fetch("http://10.92.199.25:3000/livros", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(novoLivro)
        })

        const livroCriado = await response.json()

        setLivros([...livros, livroCriado])

        setModalAberto(false)
    }





    /* ==================== Função de deletar livro na API ============================ */

    async function deletarLivro(id: number) {

        const confirmar = confirm("Deseja realmente deletar este livro?")

        if (!confirmar) {
            return
        }

        await fetch(`http://10.92.199.25:3000/livros/${id}`, {
            method: "DELETE"
        })

        /* remove da tabela automaticamente */
        setLivros(
            livros.filter((livro) => livro.id !== id)
        )
    }


    return (
        <>
            <div className="flex">
                <Sidebar />

                <div className="bg-[#fafafa] w-full min-h-screen pb-12 ml-90 p-12">
                    {/* Header */}
                    <header className="flex justify-between mb-8 items-center">
                        <div>
                            <h1 className="text-4xl font-medium text-[#2d2d2d]">
                                Gerenciar livros
                            </h1>

                            <p className="text-gray-500 text-x1 mt-1">
                                Cadastre, edite ou remova livros do acervo da biblioteca
                            </p>
                        </div>

                        <button onClick={() => setModalAberto(true)}
                            className="bg-[#3E579D] text-white px-4 py-2 rounded-lg hover:bg-[#26396e] cursor-pointer">
                            + Adicionar livro
                        </button>
                    </header>


                    {/* Filtros */}
                    <div className="bg-white border rounded-xl p-4 mb-6 flex gap-4 items-center flex-wrap justify-between">
                        <div className="flex items-center border rounded-lg px-3 py-2 w-full max-w-sm">
                            <Search size={16} className="text-gray-400 mr-2" />
                            <input
                                type="text"
                                placeholder="Buscar por título ou autor "
                                value={busca}
                                onChange={(e) => setBusca(e.target.value)}
                                className="outline-none w-full text-sm"
                            />
                        </div>

                        <div className="flex items-center gap-4">

                            <div>
                                <p className="text-gray-500 text-sm font-medium">Gênero</p>
                                <select className="border rounded-lg px-2 py-2 text-sm w-55">
                                    <option>Todos</option>
                                    <option></option>
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
                        <table className=" min-w-full text-sm table-fixed">
                            <thead className="bg-gray-50 text-gray-600">
                                <tr>
                                    <th className="text-left p-4 w-[30%]">Livro</th>
                                    <th className="text-left p-4 w-[20%]">Autor</th>
                                    <th className="text-left p-4 w-[20%]">Gênero</th>
                                    <th className="text-left p-4 w-[20%]">Ano de publicação</th>
                                    <th className="text-right p-4 w-[10%]">Ações</th>
                                </tr>
                            </thead>

                            <tbody>
                                {livrosFiltrados.map((livro) => {
                                    return (
                                        <tr className="border-t">
                                            <td className="p-4 flex items-center gap-4">
                                                <img
                                                    src={livro.capaUrl} /* Imagem do livro */
                                                    className="w-12 h-18 object-cover rounded"
                                                />

                                                <div>
                                                    <p className="font-medium">{livro.titulo}</p>
                                                    <p className="text-xs text-gray-400">
                                                        {livro.descricao}
                                                    </p>
                                                </div>

                                            </td>

                                            <td className="p-4">{livro.autor}</td>
                                            <td className="p-4">{livro.genero}</td>
                                            <td className="p-4">{livro.ano}</td>

                                            <td className="p-4">
                                                <div className="flex justify-end gap-2">
                                                    <button className="p-2 rounded-lg bg-blue-50 border border-blue-500 hover:bg-blue-100 cursor-pointer">
                                                        <Pencil size={16} className="text-blue-500" />
                                                    </button>

                                                    <button onClick={() => deletarLivro(livro.id)}
                                                        className="p-2 rounded-lg bg-red-50 border border-red-500 hover:bg-red-100 cursor-pointer">
                                                        <Trash2 size={16} className="text-red-500" />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>


            {/* Formulário de adicionar novo livro */}

            {
                modalAberto && (

                    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

                        <div className="bg-white w-125 rounded-xl p-6">

                            <div className="flex items-center justify-between mb-6">

                                <h2 className="text-2xl font-semibold">
                                    Adicionar livro
                                </h2>

                                <button
                                    onClick={() => setModalAberto(false)}
                                    className="text-gray-500 hover:text-black text-xl cursor-pointer"
                                >
                                    ×
                                </button>

                            </div>

                            <div className="flex flex-col gap-4">

                                <label className="text-sm font-medium text-gray-700">
                                    Título
                                </label>

                                <input
                                    type="text"
                                    placeholder="Título"
                                    value={novoLivro.titulo}
                                    onChange={(e) =>
                                        setNovoLivro({
                                            ...novoLivro,
                                            titulo: e.target.value
                                        })
                                    }
                                    className="border rounded-lg p-3"
                                />

                                <label className="text-sm font-medium text-gray-700">
                                    Autor
                                </label>

                                <input
                                    type="text"
                                    placeholder="Autor"
                                    maxLength={60}
                                    value={novoLivro.autor}
                                    onChange={(e) =>
                                        setNovoLivro({
                                            ...novoLivro,
                                            autor: e.target.value
                                        })
                                    }
                                    className="border rounded-lg p-3"
                                />

                                <label className="text-sm font-medium text-gray-700">
                                    Gênero
                                </label>

                                <input
                                    type="text"
                                    placeholder="Gênero"
                                    value={novoLivro.genero}
                                    onChange={(e) =>
                                        setNovoLivro({
                                            ...novoLivro,
                                            genero: e.target.value
                                        })
                                    }
                                    className="border rounded-lg p-3"
                                />

                                <label className="text-sm font-medium text-gray-700">
                                    URL da Capa
                                </label>

                                <input
                                    type="text"
                                    placeholder="URL da capa"
                                    value={novoLivro.capaUrl}
                                    onChange={(e) =>
                                        setNovoLivro({
                                            ...novoLivro,
                                            capaUrl: e.target.value
                                        })
                                    }
                                    className="border rounded-lg p-3"
                                />

                                <label className="text-sm font-medium text-gray-700">
                                    Ano de lançamento
                                </label>

                                <input
                                    type="text"
                                    placeholder="Ano de publicação"
                                    value={novoLivro.ano || ""}
                                    onChange={(e) => {

                                        const valor = e.target.value

                                        /* aceita apenas números com até 4 dígitos */
                                        if (!/^\d{0,4}$/.test(valor)) {
                                            return
                                        }

                                        /* permite apagar */
                                        if (valor === "") {
                                            setNovoLivro({
                                                ...novoLivro,
                                                ano: 0
                                            })

                                            return
                                        }

                                        setNovoLivro({
                                            ...novoLivro,
                                            ano: Number(valor)
                                        })
                                    }}
                                    className="border rounded-lg p-3 w-full mt-1"
                                />

                                <label className="text-sm font-medium text-gray-700">
                                    Descrição
                                </label>

                                <textarea
                                    placeholder="Descrição"
                                    maxLength={100}
                                    value={novoLivro.descricao}
                                    onChange={(e) =>
                                        setNovoLivro({
                                            ...novoLivro,
                                            descricao: e.target.value
                                        })
                                    }
                                    className="border rounded-lg p-3 resize-none h-32"
                                />

                                <button
                                    onClick={adicionarLivro}
                                    className="bg-[#3E579D] text-white py-3 rounded-lg hover:bg-[#26396e] cursor-pointer"
                                >
                                    Salvar livro
                                </button>

                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default Livros