import { createRouter,createWebHashHistory } from 'vue-router'

const homePage = ()=> import('@/views/homePage.vue')
const todoList = ()=> import('../views/todoList.vue')

// 路由表
const routes = [
    {
        path:'/homePage',
        component:homePage
    },
    {
        path:'/todoList',
        name: 'todoList',
        // 懒加载
        component: () => import("../views/todoList.vue")
    }
]

// 实例化路由对象，使用hash模式
const router = createRouter({
    history:createWebHashHistory(),
    routes
})

export default router
