import IProjeto from "@/Interfaces/IProjeto";
import { InjectionKey } from "vue";
import { Store, createStore } from "vuex";

interface Estado {
    projetos: IProjeto[]
}

export const key: InjectionKey<Store<Estado>> = Symbol()

export const store = createStore<Estado>({
    state: {
        projetos: [
            {
                id: new Date().toISOString(),
                nome: "Typescript"
            },
            {
                id: new Date().toISOString(),
                nome: "Vue"
            },
            {
                id: new Date().toISOString(),
                nome: "Vuex"
            }
        ]
    }
})