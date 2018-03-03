import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@comp/HelloWorld.vue'
import Button from '@comp/Button.vue'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld
    }, {
        path: '/button',
        name: 'Button',
        component: Button
    }]
})
