<template>
  <main class="columns is-gapless is-multiline" :class="{'modo-claro': modoEscuroTaAtivo}">
    <!-- //ALTERNATIVA PARA PASSAR OS ESTILOS, COMO PROPRIEDADE (BOM EM SITUAÇÕES EONDE ELA MUDA DE ACORDO COM O ESTADO DE ALGO) -->
    <!-- <main :style="estilos"> -->
    <div class="column is-one-quarter">
      <BarraLateral @temaAlterado="trocarTema" />
    </div>
    <div class="column is-three-quarter conteudo">
      <Formulario @aoSalvarTarefa="salvarTarefa"/>
      <div class="lista">
        <Tarefa v-for="(tarefasLocaisVindasDoEvento, index) in tarefas" :key="index"
          :tarefa="tarefasLocaisVindasDoEvento" />
        <Box v-if="!tarefas.length">
          <!-- <Box  v-if="listaEstaVazia"> -->
          Não há tarefas adicionadas
        </Box>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

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
      tarefas: [] as ITarefa[],
      modoEscuroTaAtivo: false,
      //ALTERNATIVA PARA PASSAR OS ESTILOS, COMO PROPRIEDADE (BOM EM SITUAÇÕES EONDE ELA MUDA DE ACORDO COM O ESTADO DE ALGO)
      // estilos: {
      //   'color': 'red',
      //   backgroundColor: 'red'
      // }
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
    },
    trocarTema(modoEscuroAtivo: boolean) {
      this.modoEscuroTaAtivo = modoEscuroAtivo
      console.log('Botaoclicado');
      console.log(this.modoEscuroTaAtivo);
      console.log(modoEscuroAtivo);
    }
  },
});
</script>

<style>
.lista {
  padding: 1.25;
}

.modo-claro{
  background-color:rgb(211, 211, 211);
  color: #0c0c0c;

}
</style>
