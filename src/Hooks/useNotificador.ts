import { TipoDeNotificacao } from "@/Interfaces/INotificacao"
import { store } from "@/store"
import { NOTIFICAR } from "@/store/TipoDeMutacoes"

type Notificador = {
    notificar: (tipo: TipoDeNotificacao, title: string, text: string) => void
}

export default (): Notificador => {
    const notificar = (tipo: TipoDeNotificacao, titulo: string, texto: string): void => {
        store.commit(NOTIFICAR, {
            title: titulo,
            text: texto,
            tipo: tipo,
        });
    }

    return {
        notificar
    }
}