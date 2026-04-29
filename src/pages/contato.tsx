import Navbar from "../components/navbar"
import Footer from "../components/footer"
import { useState } from "react"

function Contato() {
    const [form, setForm] = useState({
        nome: "",
        email: "",
        telefone: "",
        mensagem: ""
    })

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        console.log(form)
        alert("Mensagem enviada com sucesso!")
    }

    return (
        <>
            <Navbar />

            <main className="min-h-screen bg-gradient-to-br from-[#eef2ff] to-[#f8f9ff] px-6 md:px-12 lg:px-24 py-20">

                <div className="flex justify-center">

                    <section className="bg-white/80 backdrop-blur-md shadow-xl rounded-2xl p-8 border border-white/40">

                        <h1 className="text-3xl font-bold text-[#3E579D] mb-2">
                            Fale conosco
                        </h1>

                        <p className="text-gray-600 mb-6">
                            Tem dúvidas ou precisa de ajuda? Nossa equipe está pronta para te atender.
                        </p>

                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                            <input
                                type="text"
                                name="nome"
                                placeholder="Seu nome"
                                required
                                value={form.nome}
                                onChange={handleChange}
                                className="border border-gray-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A5EA8] transition"
                            />

                            <input
                                type="email"
                                name="email"
                                placeholder="Seu e-mail"
                                required
                                value={form.email}
                                onChange={handleChange}
                                className="border border-gray-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A5EA8]"
                            />

                            <input
                                type="tel"
                                name="telefone"
                                placeholder="Seu telefone"
                                required
                                value={form.telefone}
                                onChange={handleChange}
                                className="border border-gray-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A5EA8]"
                            />

                            <textarea
                                name="mensagem"
                                placeholder="Sua mensagem..."
                                required
                                value={form.mensagem}
                                onChange={handleChange}
                                className="border border-gray-200 p-3 rounded-lg h-32 resize-none focus:outline-none focus:ring-2 focus:ring-[#4A5EA8]"
                            />

                            <p className="text-xs text-gray-500">
                                Ao enviar, você concorda com nossa política de privacidade.
                            </p>

                            <button
                                type="submit"
                                className="mt-2 bg-gradient-to-r from-[#4A5EA8] to-[#6C7DFF] text-white py-3 rounded-lg font-semibold hover:scale-105 transition duration-300 shadow-md cursor-pointer"
                            >
                                Enviar mensagem
                            </button>

                        </form>


                        <div className="text-center mt-8">
                            <h2 className="text-2xl font-bold text-[#3E579D] mb-2">
                                Atendimento
                            </h2>

                            <p className="text-gray-600 mb-1">
                                Você pode falar com a gente pelos canais abaixo:
                            </p>

                            <div className="space-y-1 text-gray-700">
                                <p>📞 (11) 99999-9999</p>
                                <p>📧 contato@kor.com</p>
                                <p>⏰ Segunda a sexta, 9h às 18h</p>
                            </div>
                        </div>

                    </section>


                </div>

            </main>

            <Footer/>
        </>
    )
}

export default Contato