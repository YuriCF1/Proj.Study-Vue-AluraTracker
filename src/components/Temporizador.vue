<template lang="">
        <div class="column">
            <Cronometro :tempoEmSegundos="tempoEmSegundosTemporizador"/>
            <Botao :icone="'fa fa-play'" :textoBotao="'Play'"  :cronometroAtivado="cronometroAtivado" @BotaoClicado="iniciarContagem"/>
            <Botao :icone="'fa fa-stop'" :textoBotao="'Stop'"  :cronometroAtivado="!cronometroAtivado" @BotaoClicado="finalizarContagem"/>
        </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

import Cronometro from './Cronometro.vue';
import Botao from './Botao.vue'

export default defineComponent({
    name: "TemporiZador",
    emits: ['temporizadorFinalizado'],
    components: {
        Cronometro, Botao
    },
    data() {
        return {
            tempoEmSegundosTemporizador: 0,
            referenceInterval: 0,
            cronometroAtivado: false
        }
    },
    methods: {
        iniciarContagem() {
            this.cronometroAtivado = true
            this.referenceInterval = setInterval(() => {
                this.tempoEmSegundosTemporizador += 1
            }, 1000)
        },
        finalizarContagem() {
            this.cronometroAtivado = false
            clearInterval(this.referenceInterval)
            this.$emit('temporizadorFinalizado', this.tempoEmSegundosTemporizador)
            this.tempoEmSegundosTemporizador = 0
        },
    },
});

</script>
<style lang="">

</style>