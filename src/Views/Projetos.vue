<template lang="">
    <section class="projetos">
        <h1 class="title">
            Projetos
        </h1>
        <form @submit.prevent="salvarProjeto">
            <div class="field">
                <label class="label" for="nomeDoProjeto" >
                    Nome do projeto
                </label>
                <input class="input" type="text" name="" id="nomeDoProjeto" v-model="nomeDoProjeto"/>
            </div>
            <div class="field">
                <button class="button" type="submit">
                    Salvar
                </button>
            </div>
        </form>
        <table class="table is-fullwidth">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                </tr>
            </thead>
                <tbody>
                    <tr v-for="(projeto, index) in listaProjetos" :key="index">
                        <td>{{projeto.id}}</td>
                        <td>{{projeto.nome}}</td>
                    </tr>
                </tbody>
        </table>
    </section>
</template>
<script>
import { defineComponent, PropType } from 'vue';

import IProjeto from '../Interfaces/IProjeto.ts'
import { useStore } from '@/store';

export default defineComponent({
    name: 'ProjetosComponent',
    data() {
        return {
            nomeDoProjeto: '',
            listaProjetos: [],
        }
    },
    methods: {
        salvarProjeto() {
            // const projeto = {
            //     id: new Date().toISOString(),
            //     nome: this.nomeDoProjeto
            // }
            this.store.commit("ADICIONA_PROJETO", this.nomeDoProjeto)

            this.listaProjetos.push(projeto)
        }
    },
    setup() {
        const store = useStore()
        return {
            store
        }
    }
})
</script>
<style scoped>
.projetos {
    padding: 1.25rem
}
</style>