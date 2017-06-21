export const name = {
  name: 'hanz-components',
  path: 'components',
  component: r => require.ensure([], () => r(require('./index.vue')), 'hanz-components'),
  redirect: 'components/intro',
  children: [
    {
      name: 'components-intro',
      path: 'intro',
      component: r => require.ensure([], () => r(require('./intro.vue')), 'hanz-components')
    },
    {
      name: 'components-autoclear',
      path: 'inputClear',
      component: r => require.ensure([], () => r(require('./clearIntput.vue')), 'hanz-components')
    },
    {
      name: 'components-alert',
      path: 'alert',
      component: r => require.ensure([], () => r(require('./alert.vue')), 'hanz-components')
    }
  ]
}
