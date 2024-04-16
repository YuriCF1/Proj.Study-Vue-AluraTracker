<template>
    <header>
        <h1>
            <img src="../assets/logo.png" alt="">
        </h1>
        <div class="hast-text-centered">
            <button class="button" @click="alterarTema">
                {{ textoDoBotao }}
            </button>
        </div>
        <nav class="panel mt-5">
            <ul>
                <li>
                    <router-link class="link" to="/">
                        <i class="fas fa-tasks"></i>
                        Tarefas
                    </router-link>
                    <router-link class="link" to="/projetos">
                        <i class="fas fa-project-diagram"></i>
                        Projetos
                    </router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'BarraLateral',
    emits: ['temaAlterado'],
    data() {
        return {
            modoEscuroAtivo: false
        }
    }, computed: {
        textoDoBotao() {
            if (this.modoEscuroAtivo) {
                return 'Mudar para background escuro'
            } else {
                return 'Mudar para background claro'
            }
        }
    },
    methods: {
        alterarTema() {
            this.modoEscuroAtivo = !this.modoEscuroAtivo
            this.$emit('temaAlterado', this.modoEscuroAtivo)
        }
    }
})

</script>
<style scoped>
header {
    padding: 1rem;
    background: #0d3b66;
    width: 100%;
    height: 100vh;
    text-align: center;
}

.panel li {
    margin: 15px 0;
}
.link {
    color: #fff;
    display: block;
    margin-top: 15px;
}
.link:hover {
    color: #FAF0CA;
}
.link.router-link-active {
    color: #FAF0CA;
}

@media only screen and (max-width: 768px) {
    header {
        padding: 2.5rem;
        height: auto;
    }
}
</style>