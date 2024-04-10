<template lang="">
    <button class="button" @click="botaoClicado" :disabled="cronometroAtivado">
        <span class="icon">
            <i :class="icone"></i>
        </span>
        <span>{{textoBotao}}</span>
    </button>
    <!-- <button class="button" @click="iniciarContagem" :disabled="cronometroAtivado">
        <span class="icon">
            <i class="fas fa-play"></i>   
        </span>
        <span>play</span>
    </button> -->
    <!-- <button class="button" @click="finalizarContagem" :disabled="!cronometroAtivado">
      <span class="icon">
        <i class="fas fa-stop"></i>
      </span>
      <span>stop</span>
    </button> -->
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'BoTao',
    props: {
        icone: {
            type: String,
            required: true
        },
        textoBotao: {
            type: String,
            required: true
        },
        cronometroAtivado: {
            type: Boolean
        }
    },
    emits: ['BotaoClicado'],
    methods: {
        botaoClicado(): void { 
            this.$emit('BotaoClicado') 
        }
    }
})
</script>
<style lang="">

</style>