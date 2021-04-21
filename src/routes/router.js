import Vue from 'vue';
import VueRouter from 'vue-router';


Vue.use(VueRouter);


import Home from '@/pages/home';
import ListInstituts from '@/pages/listInstituts';
import Mode from '@/pages/mode';
import ModeCash from '@/pages/modeCash';
import Representative from '@/pages/representatives';



const routes = [
    {    
        path: '/home',
        component: Home  
    },
    {    
        path: '/instituts',
        component: ListInstituts 
    },
    {    
        path: '/mode',
        component: Mode
    },
    {    
        path: '/mode-cash',
        component: ModeCash
    },
    {
        path: '/representatives',
        component: Representative
    }
];
const router = new VueRouter({
    routes,
    mode: 'history'
});
export default router;