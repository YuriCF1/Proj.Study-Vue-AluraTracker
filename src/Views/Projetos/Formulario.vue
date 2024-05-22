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
<script lang="ts">
import { defineComponent, PropType, computed } from "vue";
import { useStoreFunction } from "@/store";

//A ideia do Mixin é sempre reaproveitar código
// import { notificacaoMixin } from "../../mixins/notificar";

import { ADICIONA_PROJETO, EDITA_PROJETO } from "../../store/TipoDeMutacoes";
import { TipoDeNotificacao } from "@/Interfaces/INotificacao";

import useNotificador from "../../Hooks/useNotificador"

export default defineComponent({
  name: "FormularioComponent",
  props: {
    idProps: {
      type: String,
    },
  },
  // mixins: [notificacaoMixin],
  mounted() {
    if (this.idProps) {
      const buscandoProjeto = this.store.state.projetos.find(
        (proj) => proj.id == this.idProps
      );
      this.nomeDoProjeto = buscandoProjeto?.nome || "";
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
        this.notificar(
          TipoDeNotificacao.SUCCESS,
          "Excelente!",
          "O projeto foi cadastrado com sucesso."
        );
        this.$router.push("/projetos");
      }
    },
  },
  setup() {
    const store = useStoreFunction();
    const { notificar } = useNotificador();
    return {
      store,
      notificar
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
