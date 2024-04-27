import Tarefas from "@/Views/Tarefas.vue";
import Projetos from "@/Views/Projetos.vue"
import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";
import Formulario from "@/Views/Projetos/Formulario.vue";
const rotas: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Tarefas',
        component: Tarefas
    },
    {
        path: '/projetos',
        name: 'Projetos',
        component: Projetos
    },
    {
        path: '/projetos/novo',
        name: 'Novo projeto',
        component: Formulario
    },
    {
        path: '/projetos/:id',
        name: 'Editar Projeto',
        component: Formulario
    }
];

const roteador = createRouter({
    history: createWebHashHistory(),
    routes: rotas
})

export default roteador;