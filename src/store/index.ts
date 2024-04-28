import IProjeto from "@/Interfaces/IProjeto";
import { InjectionKey } from "vue";
// import { Store, createStore, useStore as vuexUseStore } from "vuex";
import { Store, createStore, useStore } from "vuex";

interface Estado {
    projetos: IProjeto[]
}

export const key: InjectionKey<Store<Estado>> = Symbol()

export const store = createStore<Estado>({
    state: {
        projetos: []
    },
    mutations: {
        'ADICIONA_PROJETO'(state, nomeDoProjeto: string) { //State é colocado pela própria Vuex
            const projeto = {
                id: new Date().toISOString(),
                nome: nomeDoProjeto
            } as IProjeto
            state.projetos.push(projeto)
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