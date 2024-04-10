<template lang="">
  <div class="box is-white">
    <div class="column">
      <TemporiZador  />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

import Cronometro from './Cronometro.vue'
import TemporiZador from './Temporizador.vue'

export default defineComponent({
  name: "CampoFormulario",
  components: {
    TemporiZador
  },
});
</script>
<style scoped></style>
