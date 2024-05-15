<template lang="">
  <section>
    <h1 class="formulario-title">Formulário</h1>
    <form @submit.prevent="salvarProjeto">
      <div class="field">
        <label class="label" for="nomeDoProjeto"> Nome do projeto </label>
        <input
          class="input"
          type="text"
          name=""
          id="nomeDoProjeto"
          v-model="nomeDoProjeto"
        />
      </div>
      <div class="field">
        <button class="button" type="submit">Salvar</button>
      </div>
    </form>
  </section>
</template>
<script>
import { defineComponent, PropType, computed } from "vue";

// import IProjeto from '../Interfaces/IProjeto.ts'
import { useStoreFunction } from "@/store";

import { ADICIONA_PROJETO, EDITA_PROJETO, } from "../../store/TipoDeMutacoes";

export default defineComponent({
  name: "FormularioComponent",
  props: {
    idProps: {
      type: String,
    },
  },
  mounted() {
    console.log("Mounted IF");
    if (this.idProps) {
      const buscandoProjeto = this.store.state.projetos.find(
        (proj) => proj.id == this.idProps
      );
      this.nomeDoProjeto = buscandoProjeto?.nome;
    }
  },
  data() {
    return {
      nomeDoProjeto: "",
    };
  },
  methods: {
    salvarProjeto() {
      if (this.idProps) {
        this.store.commit(EDITA_PROJETO, {
          id: this.idProps,
          nome: this.nomeDoProjeto,
        });
      } else {
        this.store.commit(ADICIONA_PROJETO, this.nomeDoProjeto);
        this.nomeDoProjeto = "";
      }
      this.$router.push("/projetos");
    },
  },
  setup() {
    const store = useStoreFunction();
    return {
      store,
    };
  },
});
</script>
<style scoped>
.formulario-title {
  font-weight: 600;
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: #fff;
}
</style>
