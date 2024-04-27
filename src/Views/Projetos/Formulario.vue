<template lang="">
    <section class="projetos">
        <h1 class="title">
            Formulário
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
    </section>
</template>
<script>
import { defineComponent, PropType, computed } from 'vue';

// import IProjeto from '../Interfaces/IProjeto.ts'
import { useStore } from '@/store';

export default defineComponent({
    name: 'FormularioComponent',
    data() {
        return {
            nomeDoProjeto: '',
        }
    },
    methods: {
        salvarProjeto() {
            this.store.commit("ADICIONA_PROJETO", this.nomeDoProjeto)
            this.nomeDoProjeto = '';
            this.$router.push('/projetos')
        }
    },
    setup() {
        const store = useStore()
        return {
            store,
        }
    }
})
</script>
<style scoped>
.projetos {
    padding: 1.25rem
}
</style>