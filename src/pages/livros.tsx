import { Api } from "@/lib/api";
import Sidebar from "../components/sidebar"
import { Search, Pencil, Trash2 } from "lucide-react"
import { useEffect, useState, type ChangeEvent } from "react";
import { toast } from "sonner"

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
    const [modalCsvAberto, setModalCsvAberto] = useState(false)
    const [file, setFile] = useState<File>()
    const [livroEditando, setLivroEditando] = useState<Livros | null>(null)
    const [generoFiltro, setGeneroFiltro] = useState("Todos")
    const [ordenacao, setOrdenacao] = useState("Nenhum")
    const [modalExcluirAberto, setModalExcluirAberto] = useState(false)
    const [livroParaExcluir, setLivroParaExcluir] = useState<number | null>(null)

    /* state para criar um novo livro */
    const [novoLivro, setNovoLivro] = useState({
        titulo: "",
        capaUrl: "",
        ano: new Date().getFullYear(),
        descricao: "",
        autor: "",
        genero: ""
    })

    /* função para editar um livro já existente */
    function abrirEdicao(livro: Livros) {
        setLivroEditando(livro)

        setNovoLivro({
            titulo: livro.titulo,
            capaUrl: livro.capaUrl,
            ano: livro.ano,
            descricao: livro.descricao,
            autor: livro.autor,
            genero: livro.genero
        })

        setModalAberto(true)
    }


    /* executar algo em momentos específicos, useEffect impede que rode infinitamente */
    useEffect(() => {
        Api.get("/livros")
            .then(response => setLivros(response.data))
    }, [])

    const livrosFiltrados = livros.filter((livro) => {

        const correspondeBusca =
            livro.titulo.toLowerCase().includes(busca.toLowerCase()) ||
            livro.autor.toLowerCase().includes(busca.toLowerCase()) ||
            livro.descricao.toLowerCase().includes(busca.toLowerCase())

        const correspondeGenero =
            generoFiltro === "Todos" ||
            livro.genero === generoFiltro

        return correspondeBusca && correspondeGenero
    })
        .sort((a, b) => {

            switch (ordenacao) {

                case "Nenhum":
                default:
                    return 0

                case "titulo-asc":
                    return a.titulo.localeCompare(b.titulo)

                case "titulo-desc":
                    return b.titulo.localeCompare(a.titulo)

                case "autor-asc":
                    return a.autor.localeCompare(b.autor)

                case "autor-desc":
                    return b.autor.localeCompare(a.autor)

                case "ano-asc":
                    return a.ano - b.ano

                case "ano-desc":
                    return b.ano - a.ano

            }
        })



    /* ======== Função de enviar a criação de livros para a API ==================*/
    async function adicionarCSV() {
        const formData = new FormData();

        if (file == null) {
            toast.error("Selecione um arquivo")
            return;
        }

        formData.append("file", file)

        try {
            const response = await Api.post("/livros/upload", formData)

            const livroCriado = response.data

            console.log(livroCriado)

            setLivros([...livros, ...livroCriado])

            setModalCsvAberto(false)

            toast.success("Livros adicionados com sucesso")
        } catch (error) {
            toast.error("Ocorreu um erro para processar o arquivo, tente novamente mais tarde")
        }


    }

    async function adicionarLivro() {


        /* validação do formulário */
        if (
            !novoLivro.titulo ||
            !novoLivro.autor ||
            !novoLivro.genero ||
            !novoLivro.capaUrl ||
            !novoLivro.descricao ||
            !novoLivro.ano
        ) {
            toast.warning("Preencha os campos obrigatórios")
            return
        }


        /* validação do ano de lançamento */
        if (
            novoLivro.ano < 1500 ||
            novoLivro.ano > new Date().getFullYear()
        ) {
            toast.warning("Digite um ano válido")
            return
        }

        /* Criação do livro e enviando para API */
        const response = await Api.post("/livros", novoLivro)
        console.log(response)

        const livroCriado = response.data

        setLivros([...livros, livroCriado])


        toast.success("Livro adicionado com sucesso!")

        setModalAberto(false)
    }




    /* ==================== Função de editar livro na API ============================ */

    async function editarLivro() {

        if (!livroEditando) return

        const response = await Api.put(`/livros/${livroEditando.id}`, novoLivro)


        const livroAtualizado = response.data

        setLivros(
            livros.map((livro) =>
                livro.id === livroEditando.id
                    ? livroAtualizado
                    : livro
            )
        )


        toast.success("Livro atualizado com sucesso!")


        setLivroEditando(null)
        setModalAberto(false)
    }




    /* ==================== Função de deletar livro na API ============================ */

    async function deletarLivro() {


        if (!livroParaExcluir) {
            return
        }

        await Api.delete(`/livros/${livroParaExcluir}`)

        /* remove da tabela automaticamente */
        setLivros(
            livros.filter((livro) => livro.id !== livroParaExcluir)
        )

        toast.success("Livro deletado com sucesso!")

        setModalExcluirAberto(false)
        setLivroParaExcluir(null)
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

                        <div className="flex items-center justify-between">

                            <button className="bg-[#3E579D] text-white mx-4 px-4 py-2 rounded-lg hover:bg-[#26396e] cursor-pointer" onClick={() => {
                                setModalCsvAberto(true)
                            }}>
                                + Adicionar planilha Excel
                            </button>


                            <button onClick={() => {
                                setModalAberto(true)
                                setLivroEditando(null)
                            }}
                                className="bg-[#3E579D] text-white px-4 py-2 rounded-lg hover:bg-[#26396e] cursor-pointer">
                                + Adicionar livro
                            </button>
                        </div>
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

                                <select
                                    value={generoFiltro}
                                    onChange={(e) => setGeneroFiltro(e.target.value)}
                                    className="border rounded-lg px-2 py-2 text-sm w-55"
                                >
                                    <option value="Todos">Todos</option>
                                    <option value="Fantasia">Fantasia</option>
                                    <option value="Ficção Científica">Ficção Científica</option>
                                    <option value="Romance">Romance</option>
                                    <option value="Técnico">Técnico</option>
                                    <option value="Terror">Terror</option>
                                    <option value="Suspense">Suspense</option>
                                    <option value="Aventura">Aventura</option>
                                    <option value="Drama">Drama</option>
                                    <option value="Biografia">Biografia</option>
                                    <option value="História">História</option>
                                    <option value="Poesia">Poesia</option>
                                    <option value="Infantil">Infantil</option>
                                    <option value="Mangá">Mangá</option>
                                    <option value="HQ">HQ</option>
                                </select>
                            </div>


                            <div>
                                <p className="text-gray-500 text-sm font-medium">Filtrar por</p>

                                <select
                                    value={ordenacao}
                                    onChange={(e) => setOrdenacao(e.target.value)}
                                    className="border rounded-lg px-2 py-2 text-sm w-55"
                                >
                                    <option value="nenhum">Nenhum</option>
                                    <option value="titulo-asc">Título (A-Z)</option>
                                    <option value="titulo-desc">Título (Z-A)</option>
                                    <option value="ano-asc">Ano (mais antigo)</option>
                                    <option value="ano-desc">Ano (mais recente)</option>
                                    <option value="autor-asc">Autor (A-Z)</option>
                                    <option value="autor-desc">Autor (Z-A)</option>
                                </select>
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
                                {livrosFiltrados.length === 0 ? (
                                    <tr>
                                        <td
                                            colSpan={5}
                                            className="text-center py-16"
                                        >
                                            <div className="flex flex-col items-center gap-2">
                                                <p className="text-lg font-medium text-gray-700">
                                                    Nenhum livro encontrado
                                                </p>

                                                <p className="text-sm text-gray-500">
                                                    Adicione um livro ou altere os filtros de busca.
                                                </p>
                                            </div>
                                        </td>
                                    </tr>
                                ) : (
                                    livrosFiltrados.map((livro) => (
                                        <tr key={livro.id} className="border-t">
                                            <td className="p-4 flex items-center gap-4">
                                                <img
                                                    src={livro.capaUrl}
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
                                                    <button className="p-2 rounded-lg bg-blue-50 border border-blue-500 hover:bg-blue-100 cursor-pointer" onClick={() => abrirEdicao(livro)}>
                                                        <Pencil size={16} className="text-blue-500" />
                                                    </button>

                                                    <button
                                                        onClick={() => {
                                                            setLivroParaExcluir(livro.id)
                                                            setModalExcluirAberto(true)
                                                        }}
                                                        className="p-2 rounded-lg bg-red-50 border border-red-500 hover:bg-red-100 cursor-pointer">
                                                        <Trash2 size={16} className="text-red-500" />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                    )
                                )
                                }

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

                                {/* muda o titulo com base na função chamada */}
                                <h2 className="text-2xl font-semibold">
                                    {livroEditando ? "Editar livro" : "Adicionar livro"}
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

                                <select
                                    value={novoLivro.genero}
                                    onChange={(e) => setNovoLivro({
                                        ...novoLivro,
                                        genero: e.target.value
                                    })}
                                    className="border rounded-lg p-3"
                                >
                                    <option value="Fantasia">Fantasia</option>
                                    <option value="Ficção Científica">Ficção Científica</option>
                                    <option value="Romance">Romance</option>
                                    <option value="Terror">Terror</option>
                                    <option value="Técnico">Técnico</option>
                                    <option value="Suspense">Suspense</option>
                                    <option value="Aventura">Aventura</option>
                                    <option value="Drama">Drama</option>
                                    <option value="Biografia">Biografia</option>
                                    <option value="História">História</option>
                                    <option value="Poesia">Poesia</option>
                                    <option value="Infantil">Infantil</option>
                                    <option value="Mangá">Mangá</option>
                                    <option value="HQ">HQ</option>
                                </select>

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
                                    maxLength={200}
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
                                    onClick={   /* decide a alteração com base no que foi clicado - adicionar livro, ou editar */
                                        livroEditando
                                            ? editarLivro
                                            : adicionarLivro
                                    }
                                    className="bg-[#3E579D] text-white py-3 rounded-lg hover:bg-[#26396e] cursor-pointer my-4"
                                >
                                    {livroEditando ? "Atualizar livro" : "Salvar livro"}
                                </button>

                            </div>
                        </div>
                    </div>
                )
            }


            {/* Formulário de adicionar novo livro .csv */}

            {
                modalCsvAberto && (

                    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

                        <div className="bg-white w-125 rounded-xl p-6">

                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-2xl font-semibold">
                                    Adicionar planilha
                                </h2>

                                <button
                                    onClick={() => {
                                        setModalCsvAberto(false)
                                    }}
                                    className="text-gray-500 hover:text-black text-xl cursor-pointer"
                                >
                                    ×
                                </button>
                            </div>

                            <div className="flex flex-col gap-4">


                                <label className="text-sm font-medium text-gray-700">
                                    Planilha Csv
                                </label>

                                <div className="w-20 text-gray-400">
                                    <p className="text-black">Requer:</p>
                                    <p>*Título
                                        *Autor
                                        *Gênero
                                        *Ano
                                        *Descrição
                                        *URL capa
                                    </p>
                                </div>

                                <input
                                    type="file"
                                    className="border rounded-lg p-3"
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                        const files = e.target.files

                                        if (files && files.length > 0) {
                                            setFile(files[0])
                                        }
                                    }}
                                />

                                <button
                                    onClick={() => adicionarCSV()}
                                    className="bg-[#3E579D] text-white py-3 rounded-lg hover:bg-[#26396e] cursor-pointer my-4"
                                >
                                    Salvar planilha
                                </button>

                            </div>
                        </div>
                    </div>


                )
            }

            {/* modal de deletar livro */}

            {
                modalExcluirAberto && (
                    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
                        <div className="bg-white rounded-xl p-6 w-[400px] shadow-lg">

                            <h2 className="text-xl font-semibold mb-2">
                                Confirmar exclusão
                            </h2>

                            <p className="text-gray-600 mb-6">
                                Tem certeza que deseja excluir este livro?
                                Esta ação não poderá ser desfeita.
                            </p>

                            <div className="flex justify-end gap-3">

                                <button
                                    onClick={() => {
                                        setModalExcluirAberto(false)
                                        setLivroParaExcluir(null)
                                    }}
                                    className="px-4 py-2 border rounded-lg hover:bg-gray-300 cursor-pointer"
                                >
                                    Cancelar
                                </button>

                                <button
                                    onClick={deletarLivro}
                                    className="px-4 py-2 bg-red-700 text-white rounded-lg hover:bg-red-800 cursor-pointer"
                                >
                                    Excluir
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