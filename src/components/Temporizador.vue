<template lang="">
        <div class="column">
          <Cronometro :tempoEmSegundos="tempoEmSegundosTemporizador"/>
            <button class="button" @click="iniciarContagem" :disabled="cronometroAtivado">
              <span class="icon">
                <i class="fas fa-play"></i>
              </span>
              <span>play</span>
            </button>
            <button class="button" @click="finalizarContagem" :disabled="!cronometroAtivado">
              <span class="icon">
                <i class="fas fa-stop"></i>
              </span>
              <span>stop</span>
            </button>
        </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Cronometro from './Cronometro.vue';

export default defineComponent({
    name: "TemporiZador",
    emits: ['temporizadorFinalizado'],
    components: {
        Cronometro
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