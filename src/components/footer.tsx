
export default function Footer() {
    return (

        <footer className="bg-[#1E1E1E] text-white px-12 py-24">

            <div className="flex items-start justify-center gap-20 text-center">

                {/* Logo + nome */}
                <div>
                    <h2 className="text-3xl font-bold">
                        Kingdom of Reading
                    </h2>

                    <p className="text-gray-400 mt-3 max-w-sm">
                        Sistema de gestão para bibliotecas escolares, facilitando o controle de alunos, livros e atividades.
                    </p>
                </div>

                {/* Links rápidos */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">
                        Navegação
                    </h3>

                    <div className="flex flex-col gap-2 text-gray-300">
                        <a href="" className="hover:text-white transition">
                            Início
                        </a>

                        <a href="" className="hover:text-white transition">
                            Sobre
                        </a>

                        <a href="" className="hover:text-white transition">
                            Contato
                        </a>
                    </div>
                </div>

                {/* Contato */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">
                        Contato
                    </h3>

                    <div className="flex flex-col gap-2 text-gray-300">
                        <p>contato@kor.com</p>
                        <p>(11) 99999-9999</p>
                        <p>São Paulo - SP</p>
                    </div>
                </div>

            </div>

            {/* linha */}
            <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400">
                © 2026 Kingdom of Reading — Todos os direitos reservados
            </div>

        </footer>
    )
}