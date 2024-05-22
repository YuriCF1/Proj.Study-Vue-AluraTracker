<template lang="">
  <div class="box is-white">
    <div class="column">
      <div
        class="column is-5"
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
      <div class="column is-3">
        <div class="select">
          <select v-model="idProjeto">
            <option value="">Selecione o projeto</option>
            <!-- Atribuindo o projeto.id dentro do value to select, onde tem idPorjeto -->
            <option
              :value="projeto.id"
              v-for="projeto in projetosComputedEstado"
              :key="projeto.id"
            >
              {{ projeto.nome }}
            </option>
          </select>
        </div>
      </div>
      <div class="column">
        <TemporiZador @temporizadorFinalizado="finalizarTarefa" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from "vue";

//Components
import TemporiZador from "./Temporizador.vue";
import { useStoreFunction } from "@/store";

import { NOTIFICAR } from "../store/TipoDeMutacoes";
import { TipoDeNotificacao } from "@/Interfaces/INotificacao";

export default defineComponent({
  name: "CampoFormulario",
  emits: ["aoSalvarTarefa"],
  components: {
    TemporiZador,
  },
  data() {
    return {
      desricaoTask: "",
      idProjeto: "",
      projetos: [],
    };
  },
  setup() {
    const store = useStoreFunction();
    return {
      store,
      //Tudo que se retorna no setup, fica disponível no componente
      projetosComputedEstado: computed(() => store.state.projetos), //Colocar no computed pois a lista é dinâmica
    };
  },
  methods: {
    finalizarTarefa(tempoDecorridoRecebido: number): void {
      const projeto = this.projetosComputedEstado.find(
        (p) => p.id == this.idProjeto
      );
      if (!projeto) {
        this.store.commit(NOTIFICAR, {
          title: "Ops!",
          text: "Selecione um projeto antes de finalizar a tarefa!",
          tipo: TipoDeNotificacao.FAIL,
        });
        return; // ao fazer return aqui, o restante do método salvarTarefa não será executado. chamamos essa técnica de early return :)
      }
      this.$emit("aoSalvarTarefa", {
        //Enviando os dados no formato da interface, pois no App.vue, ele espera os dados assim
        duracaoEmSegundosInterface: tempoDecorridoRecebido,
        descricaoInterface: this.desricaoTask,
        projetos: this.projetosComputedEstado.find(
          (proj) => proj.id == this.idProjeto
        ),
      });
      this.desricaoTask = "";
    },
  },
});
</script>
<style scoped></style>
