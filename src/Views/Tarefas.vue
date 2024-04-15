<template>
        <Formulario @aoSalvarTarefa="salvarTarefa"/>
        <div class="lista">
            <ul v-for="(item, index) in tarefas" :key="index">
                <li>{{item.descricaoInterface}}</li>
            </ul>
          <Tarefa v-for="(tarefasLocaisVindasDoEvento, index) in tarefas" :key="index"
            :tarefa="tarefasLocaisVindasDoEvento" />
          <Box v-if="!tarefas.length">
            <!-- <Box  v-if="listaEstaVazia"> -->
            Não há tarefas adicionadas
          </Box>
        </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, PropType } from 'vue';
  
  import ITarefa from '../Interfaces/ITarefa.js' //Vue disse que só pode importar arquivos com extensão js...?
  
  import Formulario from "../components/Formulario.vue"
  import Tarefa from '@/components/Tarefa.vue'; 
  import Box from '@/components/Box.vue'; 
  
  export default defineComponent({
    name: 'App',
    components: {
      Formulario, Tarefa, Box
    },
    data() {
      return {
        tarefas: [] as ITarefa[],
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
        console.log('Clicado');
        console.log(tarefaRecebida);
        console.log(this.tarefas);
      },
    },
  });
  </script>
  
  <style>
  </style>
  