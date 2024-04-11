<template lang="">
    <Box>
        <div class="columns">
            <div class="column is-7">
                {{tarefa.descricaoInterface || 'Tarefa sem descrição'}}
            </div>
            <div class="column">
                <Cronometro :tempoEmSegundos="tarefa.duracaoEmSegundosInterface"/>
            </div>
        </div>
    </Box>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue';

import ITarefa from '../Interfaces/ITarefa'

import Cronometro from './Cronometro.vue';
import Box from './Box.vue'

export default defineComponent({
    name: 'TareFa',
    components: {
        Cronometro, Box
    },
    props: {
        tarefa: {
            type: Object as PropType<ITarefa>,
            required: true
        },
        isRequired: {
            type: Boolean,
            default: true
        }
    }
})
</script>
<style scoped>
/* .box {
    margin: 2rem auto;
    color: #fff;
    font-size: 2rem;
} */
</style>