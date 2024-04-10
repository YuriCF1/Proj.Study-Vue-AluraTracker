<template lang="">
    <section>
      <strong>{{tempoDecorrido}}</strong>
    </section>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'CronoMetro',
    props: {
        tempoEmSegundos: {
            type: Number,
            default: 0
        }
    },
    computed: {
        tempoDecorrido(): string {
            let data = new Date(this.tempoEmSegundos * 1000);
            let tempoString = data.toISOString().slice(11, 19);

            return tempoString;
        }
    },
})
</script>
<style scoped></style>