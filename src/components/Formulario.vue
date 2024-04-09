<template lang="">
  <div class="box is-white">
    <div class="column">
      <div
        class="column is-8"
        role="form"
        aria-label="Formulário para criação de uma nova tarefa"
      >
        <input
          type="text"
          class="input"
          placeholder="Qual tarefa você deseja iniciar"
        />
        <div class="column">
          <section>
              <strong>{{tempoDecorrido}}</strong>
            </section>
            <button class="button" @click="iniciarContagem">
              <span class="icon">
                <i class="fas fa-play"></i>
              </span>
              <span>play</span>
            </button>
            <button class="button" @click="finalizarContagem">
              <span class="icon">
                <i class="fas fa-stop"></i>
              </span>
              <span>stop</span>
            </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CampoFormulario",
  data() {
    return {
      tempoEmSegundo: 0
    }
  },
  computed: {
    tempoDecorrido(): string {
      let data = new Date(this.tempoEmSegundo * 1000);
      let tempoString = data.toISOString().slice(11, 19);

      return tempoString;
    }
  },
  methods: {
    iniciarContagem() {
      setInterval(() => {
        this.tempoEmSegundo += 1
        console.log(this.tempoEmSegundo);
      }, 1000)
    },
    finalizarContagem() {
      console.log('Terminando');
    },
  },
});
</script>
<style scoped></style>
