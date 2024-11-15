import { Convidado, Id } from "@/core";

export default function criarConvidadeVazio(): Partial<Convidado> {
    return {
        id: Id.novo(),
        nome: "",
        email: "",
        confirmado: true,
        possuiAcompanhantes: false,
        qtdeAcompanhantes: 0
    }
}