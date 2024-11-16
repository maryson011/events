'use client'
import { Convidado, Evento, eventos } from "@/core"
import { use, useEffect, useState } from "react"

export default function PAginaAdminEvento(props: any) {
    const params: any = use(props.params)

    const id = params.todos[0]
    const [evento, setEvento] = useState<Evento | null>(null)
    const [senha, setSenha] = useState<string | null>(params.todos[1] ?? null)

    const presentes = evento?.convidados.filter((c) => c.confirmado) ?? []
    const ausentes = evento?.convidados.filter((c) => !c.confirmado) ?? []

    const totalGeral = evento?.convidados
        .reduce((total: number, convidado: Convidado) => {
            return total + convidado.qtdeAcompanhantes + 1
        }, 0)

    function carregarEvento() {
        const evento = eventos.find(ev => ev.id === id && ev.senha === senha)
        
        setEvento(evento ?? null)
    }

    useEffect(() => {
        carregarEvento()
    }, [id, senha])

    return evento ? (
        <div className="flex flex-col">
            <span>{evento.nome}</span>
        </div>
    ) : null
}