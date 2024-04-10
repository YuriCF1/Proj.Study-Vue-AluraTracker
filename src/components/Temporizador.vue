<template lang="">
    <div
        class="column is-8"
        role="form"
        aria-label="Formulário para criação de uma nova tarefa"
      >
        <input
          type="text"
          class="input"
          placeholder="Qual tarefa você deseja iniciar"
        />
        <div class="column">
          <Cronometro :tempoEmSegundos="tempoEmSegundo"/>
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
      </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Cronometro from './Cronometro.vue';

export default defineComponent({
    name: "TemporiZador",
    components: {
        Cronometro
    },
    data() {
        return {
            tempoEmSegundo: 0,
            referenceInterval: 0,
            cronometroAtivado: false
        }
    },
    methods: {
        iniciarContagem() {
            this.cronometroAtivado = true
            this.referenceInterval = setInterval(() => {
                this.tempoEmSegundo += 1
            }, 1000)
        },
        finalizarContagem() {
            this.cronometroAtivado = false
            clearInterval(this.referenceInterval)
            // this.tempoEmSegundo = 0
        },
    },
});

</script>
<style lang="">

</style>