import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/hanz',
      name: 'hanz',
      component: require('./components/application.vue'),
      redirect: '/hanz/home',
      children: [
        require('./apps/home/route').name,
        require('./apps/directives/route').name,
        require('./apps/jj/route').name,
        require('./apps/plugs/route').name,
        require('./apps/components/route').name
      ]
    }
  ]
})
