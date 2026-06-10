import { Api } from "@/lib/api"
import Sidebar from "../components/sidebar"
import { Search, Pencil, Trash2, UserRound } from "lucide-react"
import { useEffect, useState, type ChangeEvent } from "react"
import { toast } from "sonner"

interface Aluno {
    id: number
    nome: string
    email: string
    cpf: string
    curso: string
    senha: string
}

function Alunos() {

    /* states */
    const [alunos, setAlunos] = useState<Aluno[]>([])
    const [cursoFiltro, setCursoFiltro] = useState("Todos")
    const [busca, setBusca] = useState("")
    const [ordenacao, setOrdenacao] = useState("Nenhum")
    const [modalAberto, setModalAberto] = useState(false)
    const [modalCsvAberto, setModalCsvAberto] = useState(false)
    const [file, setFile] = useState<File>()
    const [alunoEditando, setAlunoEditando] = useState<Aluno | null>(null)
    const [modalExcluirAberto, setModalExcluirAberto] = useState(false)
    const [alunoParaExcluir, setAlunoParaExcluir] = useState<number | null>(null)

    const [novoAluno, setNovoAluno] = useState({
        nome: "",
        email: "",
        cpf: "",
        curso: "",
        senha: "Senai2026"
    })


    /* filtro de alunos */
    const alunosFiltrados = alunos
        .filter((aluno) => {

            const correspondeBusca =
                aluno.nome?.toLowerCase().includes(busca.toLowerCase()) ||
                aluno.email?.toLowerCase().includes(busca.toLowerCase()) ||
                aluno.cpf?.includes(busca)

            const correspondeCurso =
                cursoFiltro === "Todos" ||
                aluno.curso?.trim() === cursoFiltro

            return correspondeBusca && correspondeCurso
        })
        .sort((a, b) => {
            switch (ordenacao) {
                case "Nenhum":
                default:
                    return 0

                case "nome-asc":
                    return a.nome.localeCompare(b.nome)

                case "nome-desc":
                    return b.nome.localeCompare(a.nome)

                case "email-asc":
                    return a.email.localeCompare(b.email)

                case "email-desc":
                    return b.email.localeCompare(a.email)

                case "cpf-asc":
                    return a.cpf.localeCompare(b.cpf)

                case "cpf-desc":
                    return b.cpf.localeCompare(a.cpf)
            }
        })


    /* função para editar um aluno já existente */
    function abrirEdicao(aluno: Aluno) {

        setAlunoEditando(aluno)

        setNovoAluno({
            nome: aluno.nome,
            email: aluno.email,
            cpf: aluno.cpf,
            curso: aluno.curso,
            senha: "Senai2026"
        })

        setModalAberto(true)
    }

    useEffect(() => {
        Api.get("/alunos")
            .then(response => setAlunos(response.data))
    }, [])



    /* ======== Função de enviar a criação de alunos para a API ==================*/

    async function adicionarCSV() {
        const formData = new FormData();

        if (file == null) {
            toast.error("Selecione um arquivo")
            return;
        }

        formData.append("file", file)

        try {
            const response = await Api.post("/alunos/upload", formData)

            const alunoCriado = response.data

            console.log(alunoCriado)

            setAlunos([...alunos, ...alunoCriado])

            setModalCsvAberto(false)

            toast.success("Usuarios adicionados com sucesso")
        } catch (error) {
            toast.error("Ocorreu um erro para processar o arquivo, tente novemante mais tarde")
        }


    }

    async function adicionarAluno() {
        try {
            if (
                !novoAluno.nome ||
                !novoAluno.email ||
                !novoAluno.cpf ||
                !novoAluno.curso
            ) {
                toast.warning("Preencha os campos obrigatórios")
                return
            }

            if (novoAluno.cpf.length !== 11) {
                toast.warning("O CPF precisa ter 11 caracteres")
                return
            }

            const response = await Api.post("/usuarios", novoAluno)

            const alunoCriado = response.data

            setAlunos([...alunos, alunoCriado])

            setModalAberto(false)

            setNovoAluno({
                nome: "",
                email: "",
                cpf: "",
                curso: "",
                senha: "Senai2026"
            })

            toast.success("Aluno adicionado com sucesso!")

        } catch (error: any) {
            toast.error(
                error.response?.data?.error || "Erro ao cadastrar aluno"
            )
        }
    }




    /* ======== Função de editar alunos para a API ==================*/

    async function editarAluno() {

        if (!alunoEditando) return

        const response = await Api.put(`/alunos/${alunoEditando.id}`, novoAluno)


        const alunoAtualizado = response.data

        setAlunos(
            alunos.map((aluno) =>
                aluno.id === alunoEditando.id
                    ? alunoAtualizado
                    : aluno
            )
        )

        setAlunoEditando(null)
        setModalAberto(false)

        toast.success("Aluno editado com sucesso!")
    }




    /* ======== Função de remover alunos ==================*/

    async function deletarAluno() {


        if (!alunoParaExcluir) {
            toast.error("Erro ao deletar aluno")
        }

        await Api.delete(`/alunos/${alunoParaExcluir}`)

        /* remove da tabela automaticamente */
        setAlunos(
            alunos.filter((aluno) => aluno.id !== alunoParaExcluir)
        )

        toast.success("Aluno deletado com sucesso!")

        setModalExcluirAberto(false)
        setAlunoParaExcluir(null)
    }

    return (
        <>
            <div className="flex">
                <Sidebar />

                <div className="bg-[#fafafa] w-full h-screen ml-90 p-12">
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

                        <div className="flex items-center justify-between">
                            <button className="bg-[#3E579D] text-white mx-4 px-4 py-2 rounded-lg hover:bg-[#26396e] cursor-pointer" onClick={() => {
                                setModalCsvAberto(true)
                            }}>
                                + Adicionar planilha Excel
                            </button>

                            <button
                                onClick={() => {
                                    setAlunoEditando(null)

                                    setNovoAluno({
                                        nome: "",
                                        email: "",
                                        cpf: "",
                                        curso: "",
                                        senha: "Senai2026"
                                    })

                                    setModalAberto(true)
                                }}
                                className="bg-[#3E579D] text-white px-4 py-2 rounded-lg hover:bg-[#26396e] cursor-pointer"
                            >
                                + Adicionar aluno
                            </button>
                        </div>
                    </header>


                    {/* Filtros */}
                    <div className="bg-white border rounded-xl p-4 mb-6 flex gap-4 items-center flex-wrap justify-between">
                        <div className="flex items-center border rounded-lg px-3 py-2 w-full max-w-sm">
                            <Search size={16} className="text-gray-400 mr-2" />
                            <input
                                type="text"
                                placeholder="Buscar por nome, email ou cpf..."
                                value={busca}
                                onChange={(e) => setBusca(e.target.value)}
                                className="outline-none w-full text-sm"
                            />
                        </div>

                        <div className="flex items-center gap-4">

                            <div>
                                <p className="text-gray-500 text-sm font-medium">Curso</p>
                                <select
                                    value={cursoFiltro}
                                    onChange={(e) => setCursoFiltro(e.target.value)}
                                    className="border rounded-lg px-2 py-2 text-sm w-55"
                                >
                                    <option value="Todos">Todos</option>
                                    <option value="Eletroeletrônica">Eletroeletrônica</option>
                                    <option value="Eletromecânica">Eletromecânica</option>
                                    <option value="Desenvolvimento de Sistemas">Desenvolvimento de Sistemas</option>
                                    <option value="Logística">Logística</option>
                                    <option value="Mecatrônica">Mecatrônica</option>
                                    <option value="Sistemas de Automação">Sistemas de Automação</option>
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
                                    <option value="nome-asc">Nome (A-Z)</option>
                                    <option value="nome-desc">Nome (Z-A)</option>
                                    <option value="cpf-asc">CPF (crescente)</option>
                                    <option value="cpf-desc">CPF (decrescente)</option>
                                    <option value="email-asc">E-mail (A-Z)</option>
                                    <option value="email-desc">E-mail (Z-A)</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Tabela */}
                    <div className="bg-white border rounded-xl overflow-hidden">
                        <table className="w-full text-sm table-fixed">
                            <thead className="bg-gray-50 text-gray-600">
                                <tr>
                                    <th className="text-left p-4 w-[30%]">Aluno</th>
                                    <th className="text-left p-4 w-[20%]">CPF</th>
                                    <th className="text-left p-4 w-[20%]">Email</th>
                                    <th className="text-left p-4 w-[20%]">Curso</th>
                                    <th className="text-right p-4 w-[10%]">Ações</th>
                                </tr>
                            </thead>

                            <tbody>
                                {alunosFiltrados.length === 0 ? (
                                    <tr>
                                        <td
                                            colSpan={5}
                                            className="text-center py-16"
                                        >
                                            <div className="flex flex-col items-center gap-2">
                                                <p className="text-lg font-medium text-gray-700">
                                                    Nenhum aluno encontrado
                                                </p>

                                                <p className="text-sm text-gray-500">
                                                    Cadastre um aluno ou altere os filtros de busca.
                                                </p>
                                            </div>
                                        </td>
                                    </tr>
                                ) : (

                                    alunosFiltrados.map((aluno) => (
                                        <tr key={aluno.id} className="border-t">

                                            <td className="p-6 flex items-center gap-4">
                                                <UserRound
                                                    className="text-gray-400"
                                                    size={36}
                                                />

                                                <p className="font-medium">
                                                    {aluno.nome}
                                                </p>
                                            </td>

                                            <td className="p-4">
                                                {aluno.cpf}
                                            </td>

                                            <td className="p-4">
                                                {aluno.email}
                                            </td>

                                            <td className="p-4">
                                                {aluno.curso || "-"}
                                            </td>

                                            <td className="p-4">
                                                <div className="flex justify-end gap-2">

                                                    <button className="p-2 rounded-lg bg-blue-50 border border-blue-500 hover:bg-blue-100 cursor-pointer" onClick={() => abrirEdicao(aluno)}>
                                                        <Pencil
                                                            size={16}
                                                            className="text-blue-500"
                                                        />
                                                    </button>

                                                    <button className="p-2 rounded-lg bg-red-50 border border-red-500 hover:bg-red-100 cursor-pointer" onClick={() => {
                                                        setAlunoParaExcluir(aluno.id)
                                                        setModalExcluirAberto(true)
                                                    }}>
                                                        <Trash2
                                                            size={16}
                                                            className="text-red-500"
                                                        />
                                                    </button>

                                                </div>
                                            </td>

                                        </tr>
                                    ))
                                )}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>


            {/* Formulário de adicionar novo aluno */}

            {
                modalAberto && (

                    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

                        <div className="bg-white w-125 rounded-xl p-6">

                            <div className="flex items-center justify-between mb-6">

                                {/* muda o nome com base na função chamada */}
                                <h2 className="text-2xl font-semibold">
                                    {alunoEditando ? "Editar aluno" : "Adicionar aluno"}
                                </h2>

                                <button
                                    onClick={() => {
                                        setModalAberto(false)
                                        setAlunoEditando(null)
                                    }}
                                    className="text-gray-500 hover:text-black text-xl cursor-pointer"
                                >
                                    ×
                                </button>

                            </div>

                            <div className="flex flex-col gap-4">

                                <label className="text-sm font-medium text-gray-700">
                                    Nome
                                </label>

                                <input
                                    type="text"
                                    placeholder="Nome"
                                    value={novoAluno.nome}
                                    onChange={(e) =>
                                        setNovoAluno({
                                            ...novoAluno,
                                            nome: e.target.value
                                        })
                                    }
                                    className="border rounded-lg p-3"
                                />

                                <label className="text-sm font-medium text-gray-700">
                                    E-mail
                                </label>

                                <input
                                    type="text"
                                    placeholder="E-mail"
                                    maxLength={60}
                                    value={novoAluno.email}
                                    onChange={(e) =>
                                        setNovoAluno({
                                            ...novoAluno,
                                            email: e.target.value
                                        })
                                    }
                                    className="border rounded-lg p-3"
                                />

                                <label className="text-sm font-medium text-gray-700">
                                    CPF
                                </label>

                                <input
                                    type="text"
                                    placeholder="CPF"
                                    maxLength={11}
                                    value={novoAluno.cpf}
                                    onChange={(e) => {

                                        const valor = e.target.value

                                        if (!/^\d*$/.test(valor)) {
                                            return
                                        }

                                        setNovoAluno({
                                            ...novoAluno,
                                            cpf: valor
                                        })
                                    }}
                                    className="border rounded-lg p-3"
                                />

                                {!alunoEditando && (
                                    <>
                                        <label className="text-sm font-medium text-gray-700">
                                            Senha padrão
                                        </label>

                                        <input
                                            type="text"
                                            value="Senai2026"
                                            disabled
                                            className="border rounded-lg p-3 bg-gray-100 cursor-not-allowed"
                                        />
                                    </>
                                )}

                                <label className="text-sm font-medium text-gray-700">
                                    Curso
                                </label>

                                <select
                                    value={novoAluno.curso}
                                    onChange={(e) => setNovoAluno({
                                        ...novoAluno,
                                        curso: e.target.value
                                    })}
                                    className="border rounded-lg p-3"
                                >
                                    <option value="">Selecione</option>
                                    <option value="Eletroeletrônica">Eletroeletrônica</option>
                                    <option value="Eletromecânica">Eletromecânica</option>
                                    <option value="Desenvolvimento de Sistemas">Desenvolvimento de Sistemas</option>
                                    <option value="Logística">Logística</option>
                                    <option value="Mecatrônica">Mecatrônica</option>
                                    <option value="Sistemas de Automação">Sistemas de Automação</option>
                                </select>

                                <button
                                    onClick={   /* decide a alteração com base no que foi clicado - adicionar livro, ou editar */
                                        alunoEditando
                                            ? editarAluno
                                            : adicionarAluno
                                    }
                                    className="bg-[#3E579D] text-white py-3 rounded-lg hover:bg-[#26396e] cursor-pointer my-4"
                                >
                                    {alunoEditando ? "Atualizar aluno" : "Salvar aluno"}
                                </button>

                            </div>
                        </div>
                    </div>
                )
            }


            {/* Formulário de adicionar novo aluno .csv */}

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

                                <div className="w-14 text-gray-400">
                                    <p className="text-black">Requer:</p>
                                    <p>*Nome
                                        *CPF
                                        *E-mail
                                        *Curso
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
                                Tem certeza que deseja excluir este aluno?
                                Esta ação não poderá ser desfeita.
                            </p>

                            <div className="flex justify-end gap-3">

                                <button
                                    onClick={() => {
                                        setModalExcluirAberto(false)
                                        setAlunoParaExcluir(null)
                                    }}
                                    className="px-4 py-2 border rounded-lg hover:bg-gray-300 cursor-pointer"
                                >
                                    Cancelar
                                </button>

                                <button
                                    onClick={deletarAluno}
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

export default Alunos