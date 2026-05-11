import Sidebar from "@/components/sidebar"

function Dashboard() {
    return (
        <>
            <div className="flex">
                <Sidebar />

                <main className="bg-[#fafafa] min-h-screen w-full p-12 ml-90">
                    {/* Header */}
                    <header className="flex items-start justify-between mb-8">
                        <div>
                            <h1 className="text-4xl font-medium text-[#2d2d2d]">
                                Painel da Biblioteca
                            </h1>

                            <p className="text-gray-500 text-x1 mt-1">
                                Acompanhe a atividade dos alunos
                            </p>
                        </div>

                        <span className="text-gray-500 text-lg">
                            23 de abril de 2026
                        </span>
                    </header>

                    {/* Livro destaque */}
                    <section className="bg-white rounded-2xl border border-gray-300 shadow-md p-6 flex justify-between items-center mb-8">
                        <div className="flex gap-6">
                            <img
                                src=""
                                alt="Livro"
                                className="w-40 h-56 object-cover rounded-md"
                            />

                            <div className="flex flex-col justify-between">
                                <div>
                                    <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-md text-sm font-normal">
                                        ★ Mais lido da semana
                                    </span>

                                    <h2 className="text-3xl font-semibold mt-3 text-[#222]">
                                        Eletrônica Básica
                                    </h2>

                                    <p className="text-gray-500 text-xl mt-1">
                                        Newton C. Braga
                                    </p>

                                    <p className="text-gray-500 text-sm mt-6">
                                        👥 52 alunos leram esse livro
                                    </p>
                                </div>

                                <button className="bg-[#4a5db2] hover:bg-[#3c4d9a] transition text-white px-8 py-2 rounded-lg text-lg w-fit cursor-pointer">
                                    Ver Detalhes
                                </button>
                            </div>
                        </div>

                        {/* Ícone decorativo */}
                        <div className="text-[#dbe4ff] text-9xl hidden lg:block">
                            🏆
                        </div>
                    </section>

                    {/* Cards */}
                    <section className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">

                        <div className="flex gap-2 bg-gradient-to-br from-[#4d5fb4] to-[#28315f] text-white rounded-2xl px-6 py-12 shadow-md">

                            <div className="text-2xl mb-4">📚</div>
                            <div className="flex flex-col">
                                <h3 className="text-3xl">Livros cadastrados</h3>


                                <p className="text-6xl font-semibold mt-4">210</p>

                                <span className="text-gray-200 text-lg mt-4">
                                    Total de livros no sistema
                                </span>

                                <button className="text-left mt-8 text-lg hover:underline">
                                    Ver todos →
                                </button>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="flex gap-2 bg-white rounded-2xl px-6 py-12 p-6 border border-gray-300 shadow-md">
                            <div className="text-2xl mb-4">👥</div>

                            <div className="flex flex-col">
                                <h3 className="text-3xl">Alunos ativos</h3>

                                <p className="text-6xl font-semibold mt-4 text-[#222]">28</p>

                                <span className="text-gray-500 text-lg mt-4">
                                    Alunos com atividade recente
                                </span>

                                <button className="text-left mt-8 text-lg text-[#4a5db2] hover:underline">
                                    Ver todos →
                                </button>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="flex bg-white rounded-2xl px-6 py-12 p-6 border border-gray-300 shadow-md">
                            <div className="text-2xl mb-4">⭐</div>

                            <div className="flex flex-col">
                                <h3 className="text-3xl">Avaliações recentes</h3>

                                <p className="text-6xl font-semibold mt-4 text-[#222]">61</p>

                                <span className="text-gray-500 text-lg mt-4">
                                    Avaliações realizadas recentemente
                                </span>

                                <button className="text-left mt-8 text-lg text-[#4a5db2] hover:underline">
                                    Ver todos →
                                </button>
                            </div>
                        </div>
                    </section>

                    {/* Atividades */}
                    <section className="bg-white rounded-2xl border border-gray-300 shadow-md p-6">
                        <div className="flex items-center justify-between mb-12">
                            <h2 className="text-3xl font-semibold text-[#222]">
                                🕒 Atividade recente
                            </h2>

                            <button className="text-[#4a5db2] text-lg hover:underline">
                                Ver todos →
                            </button>
                        </div>

                        <div className="space-y-6">
                            {/* Item */}
                            <div className="flex items-center justify-between border-b pb-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 rounded-full bg-gray-200"></div>

                                    <div>
                                        <p className="text-lg text-[#222]">
                                            <strong>Matheus Rosa</strong> avaliou o livro{" "}
                                            <strong>“Manual de DevOps”</strong>
                                        </p>

                                        <span className="text-gray-500">
                                            Nota: ⭐⭐⭐⭐ 4.0
                                        </span>
                                    </div>
                                </div>

                                <span className="text-gray-400">Hoje, 10:24</span>
                            </div>

                            {/* Item */}
                            <div className="flex items-center justify-between border-b pb-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 rounded-full bg-gray-200"></div>

                                    <div>
                                        <p className="text-lg text-[#222]">
                                            <strong>Lavínia Bispo</strong> avaliou o livro{" "}
                                            <strong>“A Metamorfose”</strong>
                                        </p>

                                        <span className="text-gray-500">
                                            Nota: ⭐⭐⭐ 3.0
                                        </span>
                                    </div>
                                </div>

                                <span className="text-gray-400">Ontem, 20:32</span>
                            </div>

                            {/* Item */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 rounded-full bg-gray-200"></div>

                                    <div>
                                        <p className="text-lg text-[#222]">
                                            <strong>Sarah Luiza</strong> começou a ler o livro{" "}
                                            <strong>“O Pequeno Príncipe”</strong>
                                        </p>
                                    </div>
                                </div>

                                <span className="text-gray-400">
                                    21 de abril, 12:45
                                </span>
                            </div>
                            
                        </div>



                    </section>

                </main>
            </div>
        </>

    )
}

export default Dashboard