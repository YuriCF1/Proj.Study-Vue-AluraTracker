<template lang="">
  <section class="projetos">
    <router-link to="/projetos/novo" class="button">
      <span class="icon is-small">
        <i class="fas fa-plus"></i>
      </span>
      <span>Novo projeto</span>
    </router-link>
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(projeto, index) in listaProjetos" :key="index">
          <td>{{ projeto.id }}</td>
          <td>{{ projeto.nome }}</td>
          <td>
            <router-link :to="`/projetos/${projeto.id}`" class="button">
              <span class="icon is-small">
                <i class="fas fa-pencil-alt"></i>
              </span>
            </router-link>
            <button 
            @click="excluirTarefa(projeto.id)"
            class="button ml-2 is-danger">
              <span class="icon is-small">
                <i class="fas fa-trash"></i>
              </span>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>
<script lang="ts">
//   import { defineComponent, PropType, computed } from "vue";
import { defineComponent, computed } from "vue";

//   import IProjeto from "../Interfaces/IProjeto.ts";
import { useStoreFunction } from "@/store";

import { EXCLUIR_PROJETO } from "../../store/TipoDeMutacoes";

export default defineComponent({
  name: "ListaComponent",
  methods: {
    excluirTarefa(idExclusao: string) {
      this.store.commit(EXCLUIR_PROJETO, idExclusao)
    }
  },
  setup() {
    const store = useStoreFunction();
    return {
      listaProjetos: computed(() => store.state.projetos),
      store
    };
  },
});
</script>
<style scoped></style>
