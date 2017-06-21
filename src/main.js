// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import _ from 'lodash/core'
import router from './routes'
// import MyChart from 'chart.js'
import VCharts from 'v-charts'
import autosize from 'autosize'
// import inputClear from './components/InputAutoClear.vue'
// import {AutoHeight} from './directives/index'

// window.MyChart = MyChart

Vue.use(VCharts)
// Vue.component(inputClear.name, inputClear)
Vue.directive('auto-height', {
  bind: function (el) {
    autosize(el)
  }
})

const test = (el, b) => {
  let btn = el.getElementsByClassName('am-btn')[0]
  for (let i in b.value) {
    if (!(b.value[i] + '').trim()) {
      btn.setAttribute('disabled', 'disabled')
      // btn.style.backgroundColor = '#aaa'
      break
    }
    // btn.style.backgroundColor = '#1C86EE'
    btn.removeAttribute('disabled')
  }
}

Vue.directive('auto-clear', {
  bind (el, binding) {
    test(el, binding)
  },
  update (el, binding) {
    test(el, binding)
  }
})

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<div id="app"><router-view></router-view></div>'
})
