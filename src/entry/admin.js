import Vue from 'vue'
import App from '@comp/App.vue'
import router from '@route/index'
import store from '@store/index'
import '@scss/theme/index.css'
import ElementUI from 'element-ui'

import '@scss/school.scss';

Vue.config.productionTip = false
Vue.use(ElementUI)

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})
