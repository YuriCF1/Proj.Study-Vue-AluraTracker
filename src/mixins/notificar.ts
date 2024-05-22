import { TipoDeNotificacao } from "@/Interfaces/INotificacao";
import { store } from "@/store"; //Não posso fazer a importação pelo hook customizável, pois aquele hook só pode ser utilizado dentro de um componente
import { NOTIFICAR } from "@/store/TipoDeMutacoes";

export const notificacaoMixin = {
    methods: {
        notificar(tipo: TipoDeNotificacao, titulo: string, texto: string): void {
            store.commit(NOTIFICAR, {
                id: "1",
                title: titulo,
                text: texto,
                tipo: tipo,
            });
        },
    }
}