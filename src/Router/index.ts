import Tarefas from "@/Views/Tarefas.vue";
import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";

const rotas: RouteRecordRaw[] = [{
    path: '/',
    name: 'Tarefas',
    component: Tarefas
}];

const roteador = createRouter({
    history: createWebHashHistory(),
    routes: rotas
})

export default roteador;