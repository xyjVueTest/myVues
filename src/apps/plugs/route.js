export const name = {
  name: 'hanz-plugs',
  path: 'plugs',
  component: r => require.ensure([], () => r(require('./index.vue')), 'hanz-plugs'),
  children: [
    {
      name: 'plugs',
      path: 'home',
      component: r => require.ensure([], () => r(require('./home.vue')), 'hanz-plugs')
    },
    {
      name: 'charts-line',
      path: 'cLine',
      component: r => require.ensure([], () => r(require('./charts/line.vue')), 'hanz-plugs')
    },
    {
      name: 'charts-column',
      path: 'cColumn',
      component: r => require.ensure([], () => r(require('./charts/column.vue')), 'hanz-plugs')
    },
    {
      name: 'Vcharts-line',
      path: 'vLine',
      component: r => require.ensure([], () => r(require('./vCharts/line.vue')), 'hanz-plugs')
    },
    {
      name: 'Vcharts-column',
      path: 'vColumn',
      component: r => require.ensure([], () => r(require('./vCharts/column.vue')), 'hanz-plugs')
    },
    {
      name: 'Vcharts-pie',
      path: 'vPie',
      component: r => require.ensure([], () => r(require('./vCharts/pie.vue')), 'hanz-plugs')
    },
    {
      name: 'Vcharts-ring',
      path: 'vRing',
      component: r => require.ensure([], () => r(require('./vCharts/ring.vue')), 'hanz-plugs')
    },
    {
      name: 'photoSwipe',
      path: 'photos',
      component: r => require.ensure([], () => r(require('./photoswipe/photo.vue')), 'hanz-plugs')
    },
    {
      name: 'photoList',
      path: 'photolist',
      component: r => require.ensure([], () => r(require('./photoswipe/photoList.vue')), 'hanz-plugs')
    }
  ]
}
