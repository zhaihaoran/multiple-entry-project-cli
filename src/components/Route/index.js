import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@comp/HelloWorld.vue'
import Button from '@comp/Button.vue'
// components
import Offer_Send from '@comp/view/offer_send.vue'
import Offer_Over from '@comp/view/offer_over.vue'

import Certification_checked from '@comp/view/certifi_checked.vue'
import Certification_check from '@comp/view/certifi_check.vue'
import Invite_speaker from '@comp/view/invite_speaker.vue'
import Setting from '@comp/view/setting.vue'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/offer_send',
        name: 'offer_send',
        component: Offer_Send
    }, {
        path: '/offer_over',
        name: 'offer_over',
        component: Offer_Over
    }, {
        path: '/certification/checked',
        name: 'Certification_checked',
        component: Certification_checked
    },{
        path: '/certification/check',
        name: 'Certification_check',
        component: Certification_check
    }, {
        path: '/button',
        name: 'Button',
        component: Button
    }, {
        path: '/invite/send',
        name: 'invite_speaker',
        component: Invite_speaker
    },{
        path: '/setting',
        name: 'Setting',
        component: Setting
    }]
})
