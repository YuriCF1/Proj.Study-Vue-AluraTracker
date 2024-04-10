<template lang="">
  <div class="box is-white">
    <div class="column">
      <div
        class="column is-8"
        role="form"
        aria-label="Formulário para criação de uma nova tarefa"
      >
      <!-- Linkando propriedades do input -->
        <input
          type="text"
          class="input"
          placeholder="Qual tarefa você deseja iniciar"
          v-model="desricaoTask"
        />
        </div>
      <TemporiZador @temporizadorFinalizado="finalizarTarefa"/>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

//Components
import TemporiZador from './Temporizador.vue'

export default defineComponent({
  name: "CampoFormulario",
  components: {
    TemporiZador
  },
  data() {
    return {
      desricaoTask: ''
    }
  },
  methods: {
    finalizarTarefa(tempoDecorridoRecebido: number): void {
      console.log(tempoDecorridoRecebido);
      console.log(this.desricaoTask);
      this.desricaoTask = ''
    }
  }
});
</script>
<style scoped></style>
