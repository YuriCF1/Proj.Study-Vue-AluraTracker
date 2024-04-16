import Tarefas from "@/Views/Tarefas.vue";
import Projetos from "@/Views/Projetos.vue"
import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";

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
    }
];

const roteador = createRouter({
    history: createWebHashHistory(),
    routes: rotas
})

export default roteador;