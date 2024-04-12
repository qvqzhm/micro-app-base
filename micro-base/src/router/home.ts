
export const home = [
    {
        name: 'PageBase',
        path: '/',
        component: ()=> import('../components/HelloWorld.vue')
    },
    {
        name: 'Page1',
        path: '/page1',
        component: ()=> import('../pages/Page1/index.vue')
    }
]
