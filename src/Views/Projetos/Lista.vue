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
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>
<script>
//   import { defineComponent, PropType, computed } from "vue";
import { defineComponent, computed } from "vue";

//   import IProjeto from "../Interfaces/IProjeto.ts";
import { useStoreFunction } from "@/store";

export default defineComponent({
  name: "ListaComponent",
  setup() {
    const store = useStoreFunction();
    return {
      listaProjetos: computed(() => store.state.projetos),
    };
  },
});
</script>
<style scoped></style>
