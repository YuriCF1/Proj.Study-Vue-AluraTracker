<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-quarter">
      <BarraLateral />
    </div>
    <div class="column is-three-quarter">
      <Formulario @aoSalvarTarefa="salvarTarefa"/>
      <div class="lista">
        <Tarefa v-for="(tarefasLocaisVindasDoEvento, index) in tarefas" :key="index" :tarefa="tarefasLocaisVindasDoEvento"/>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import ITarefa from './Interfaces/ITarefa.js' //Vue disse que só pode importar arquivos com extensão js...?

import BarraLateral from "./components/BarraLateral.vue"
import Formulario from "./components/Formulario.vue"
import Tarefa from './components/Tarefa.vue'

export default defineComponent({
  name: 'App',
  components: {
    BarraLateral, Formulario, Tarefa
  },
  data() {
    return {
      tarefas: [] as ITarefa[]
    }
  },
  methods: {
    salvarTarefa(tarefaRecebida: ITarefa) {
      this.tarefas.push(tarefaRecebida)
    }
  },
});
</script>

<style scoped>
.lista {
  padding: 1.25;
}
</style>
