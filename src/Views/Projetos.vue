<template>
  <div class="projetosClass">
    <h1 class="title">Projetos</h1>
    <router-view></router-view>
  </div>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "ProjetosComponent",
});
</script>
<style scoped>
  .projetosClass {
    padding: 1.25rem;
  }
</style>
