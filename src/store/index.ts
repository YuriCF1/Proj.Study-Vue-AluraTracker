// import { Projetos } from '@/Views/Projetos.vue';
import IProjeto from "@/Interfaces/IProjeto";
import { InjectionKey } from "vue";
// import { Store, createStore, useStore as vuexUseStore } from "vuex";
import { Store, createStore, useStore } from "vuex";

import { ADICIONA_PROJETO, EDITA_PROJETO, EXCLUIR_PROJETO } from "./TipoDeMutacoes";

interface Estado {
    projetos: IProjeto[]
}

export const key: InjectionKey<Store<Estado>> = Symbol()

export const store = createStore<Estado>({
    state: {
        projetos: []
    },
    mutations: {
        [ADICIONA_PROJETO](state, nomeDoProjeto: string) { //State é colocado pela própria Vuex
            const projeto = {
                id: new Date().toISOString(),
                nome: nomeDoProjeto
            } as IProjeto
            state.projetos.push(projeto)
        },
        [EDITA_PROJETO](state, projetoEditado: IProjeto) {
            const index = state.projetos.findIndex(proj => proj.id == projetoEditado.id)
            state.projetos[index] = projetoEditado;
        },
        [EXCLUIR_PROJETO](state, idExclusao: string) {
            state.projetos = state.projetos.filter(proj => proj.id != idExclusao)
        }
    }
})

export function useStoreFunction(): Store<Estado> {
    return useStore(key)
}

//NOTAS 

/*
Você vai perceber, analisando as documentações do Vuex, que existem actions e mutations. Existe uma linha tênue separando os dois;

Em vez de mudar o estado, as ações confirmam (ou fazem commit de) mutações.
As ações podem conter operações assíncronas arbitrárias.
Então, uma chamada à uma API HTTP, por exemplo, ficaria numa action e uma mutation seria chamada caso a requisição seja realizada com sucesso.
*/