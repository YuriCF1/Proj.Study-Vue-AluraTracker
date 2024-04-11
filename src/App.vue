<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-quarter">
      <BarraLateral />
    </div>
    <div class="column is-three-quarter">
      <Formulario @aoSalvarTarefa="salvarTarefa" />
      <div class="lista">
          <Tarefa v-for="(tarefasLocaisVindasDoEvento, index) in tarefas" :key="index"
            :tarefa="tarefasLocaisVindasDoEvento" />
          <Box  v-if="!tarefas.length">
          <!-- <Box  v-if="listaEstaVazia"> -->
            Não há tarefas adicionadas
          </Box>
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
import Box from './components/Box.vue'

export default defineComponent({
  name: 'App',
  components: {
    BarraLateral, Formulario, Tarefa, Box
  },
  data() {
    return {
      tarefas: [] as ITarefa[]
    }
  },
  //Resolvi fazer o v-if de outro jeito
  // computed: {
  //   listaEstaVazia(): boolean {
  //     return this.tarefas.length === 0;
  //   }
  // },
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
