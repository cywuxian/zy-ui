import Vue from 'vue'
import App from './App.vue'
import WilsonUI from "../packages/index"
Vue.use(WilsonUI)
import ElementUI from 'element-ui'
Vue.use(ElementUI)
import "element-ui/lib/theme-chalk/index.css"
Vue.config.productionTip = false
new Vue({
    el: '#app',
    render: (h) => h(App)
})
