<template lang="">
    <div class="box has-text-weight-bold">
        <div class="columns">
            <div class="column is-7">
                {{tarefa.descricaoInterface}}
            </div>
            <div class="column">
                <Cronometro :tempoEmSegundos="tarefa.duracaoEmSegundosInterface"/>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue';

import ITarefa from '../Interfaces/ITarefa.ts'

import Cronometro from './Cronometro.vue';

export default defineComponent({
    name: 'TareFa',
    components: {
        Cronometro
    },
    props: {
        tarefa: Object as PropType<ITarefa>,
        required: Boolean as true
    }
})
</script>
<style scoped></style>