import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'
import Acceuil from './components/Acceuil.vue'
import services from './components/services.vue'
import realisation from './components/realisation.vue'
import equipe from './components/equipe.vue'
import contact from './components/contact.vue';

Vue.config.productionTip = false

Vue.use(VueRouter)
  

const router = new VueRouter({
 mode:'history',
 routes:[{
     path: '/',
     component: Acceuil
        },
        {
      path: '/services',
      component: services
      },
      {
        path: '/realisation',
        component: realisation
      },{
        path: '/equipe',
        component: equipe
      },{
        path: '/contact',
        component: contact
 }]
})

new Vue({
  router,
  vuetify,
  render: h => h(App),
}).$mount('#app')
