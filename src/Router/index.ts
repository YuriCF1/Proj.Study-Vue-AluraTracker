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
        path: '/projetos/:idProps',
        name: 'Editar Projeto',
        component: Formulario,
        props:true //O roteador vai pegar o idProps e vai injetar na vizualisação como props 
    }
];

const roteador = createRouter({
    history: createWebHashHistory(),
    routes: rotas
})

export default roteador;