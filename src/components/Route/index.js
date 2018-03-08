import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@comp/HelloWorld.vue'
import Button from '@comp/Button.vue'
// components
import Offer_Send from '@comp/view/offer_send.vue'
import Offer_Over from '@comp/view/offer_over.vue'
import Info from '@comp/view/info.vue'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/offer_send',
        name: 'offer_send',
        component: Offer_Send
    },{
        path: '/offer_over',
        name: 'offer_over',
        component: Offer_Over
    },{
        path: '/info',
        name: 'Info',
        component: Info
    },{
        path: '/button',
        name: 'Button',
        component: Button
    }]
})
