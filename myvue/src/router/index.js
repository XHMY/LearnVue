import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/layout/index'
import login from '@/components/login'


Vue.use(Router)

/* Layout */
//懒加载 webpack
//const layout = r => require.ensure([], () => r(require('@/layout/index')), 'layout');


export const constantRoutes = [
    {
        path: '/login',
        component: login,
        // hidden: true
    },
    {
        path: '/manage',
        component: layout
        // hidden: true
    }
    //   {
    //     path:'/example',
    //     component:system
    //   }




]
//function（）

const createRouter = () => new Router({
    // mode: 'history', // require service support
    // scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
})

const router = createRouter()

// export function resetRouter() {
//   const newRouter = createRouter()
//   router.matcher = newRouter.matcher // reset router
// }

export default router