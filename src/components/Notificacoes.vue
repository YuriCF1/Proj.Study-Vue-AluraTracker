<template>
  <div class="notificacoes">
    <article
      class="message is-success"
      :class="contexto[note.tipo]"
      v-for="(note, index) in notificacoes"
      :key="index"
    >
      <div class="message-header">{{ note.tipo }}</div>
      <div class="message-body">{{ note.text }}</div>
    </article>
  </div>
</template>
<script>
import { defineComponent, computed } from "vue";
import { useStoreFunction } from "@/store";
import { TipoDeNotificacao } from "@/Interfaces/INotificacao";
export default defineComponent({
  name: "NotificacoesComponent",
  data() {
    return {
      contexto: {
        [TipoDeNotificacao.SUCCES]: "is-success",
        [TipoDeNotificacao.WARNING]: "is-warning",
        [TipoDeNotificacao.FAIL]: "is-danger",
      },
    };
  },
  setup(props) {
    const store = useStoreFunction();
    return {
      notificacoes: computed(() => {
        return store.state.notificacoes;
      }),
    };
  },
});
</script>
<style scoped>
.notificacoes {
  position: absolute;
  right: 0;
  width: 300px;
  padding: 8px;
  z-index: 1;
}
</style>
