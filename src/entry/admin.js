import Vue from 'vue'
import App from '@comp/App.vue'
import router from '@route/index'
import ElementUI from 'element-ui'

Vue.config.productionTip = false
Vue.use(ElementUI)

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
