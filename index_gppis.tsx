
"use client"
import { useState } from "react"

export default function Home() {
  const sistemas = [
    {
      nome: "PCM Estratégico",
      descricao: "Planejamento e Controle de Manutenção industrial completo com indicadores, histórico e gestão de ordens de serviço.",
      status: "Disponível"
    },
    {
      nome: "Gestão de Estoques",
      descricao: "Controle inteligente de estoque, entradas, saídas, consumo médio e previsões.",
      status: "Em desenvolvimento"
    },
    {
      nome: "Planejamento de Compras",
      descricao: "Sistema para prever demandas, organizar compras e reduzir faltas de materiais.",
      status: "Em desenvolvimento"
    },
    {
      nome: "Almoxarifado Fácil",
      descricao: "Gestão simplificada de almoxarifado industrial.",
      status: "Em desenvolvimento"
    }
  ]

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-black via-blue-950 to-black">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">GPPIS</h1>
        <p className="text-xl md:text-2xl text-blue-300 mb-6">
          Gestão Inteligente para Manutenções Industriais
        </p>
        <p className="max-w-2xl text-gray-300">
          Sistemas profissionais para gestão industrial, manutenção,
          estoque e processos operacionais.
        </p>
        <div className="mt-10 flex gap-4">
          <a href="#sistemas" className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl">
            Conhecer Sistemas
          </a>
          <a href="#contato" className="border border-blue-500 px-6 py-3 rounded-xl hover:bg-blue-900">
            Falar Conosco
          </a>
        </div>
      </section>

      <section className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center">Sobre a GPPIS</h2>
        <p className="text-gray-300 text-lg text-center max-w-3xl mx-auto">
          A GPPIS desenvolve sistemas especializados para indústrias que
          precisam de controle, organização e eficiência operacional.
        </p>
      </section>

      <section id="sistemas" className="py-24 px-6 bg-zinc-950">
        <h2 className="text-4xl font-bold text-center mb-16">Nossos Sistemas</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {sistemas.map((sistema, i) => (
            <div key={i} className="bg-black border border-blue-900 rounded-2xl p-8 hover:border-blue-500 transition">
              <h3 className="text-2xl font-bold mb-4 text-blue-400">{sistema.nome}</h3>
              <p className="text-gray-400 mb-6">{sistema.descricao}</p>
              <span className="text-sm text-yellow-400">{sistema.status}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="contato" className="py-24 px-6 bg-zinc-950 text-center">
        <h2 className="text-4xl font-bold mb-10">Contato</h2>
        <a href="mailto:pedrozo@gppis.com.br"
          className="bg-blue-600 px-8 py-4 rounded-xl text-lg hover:bg-blue-700">
          pedrozo@gppis.com.br
        </a>
      </section>

      <footer className="py-10 text-center text-gray-500 border-t border-zinc-800">
        © {new Date().getFullYear()} GPPIS
      </footer>
    </main>
  )
}
