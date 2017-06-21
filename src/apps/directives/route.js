export const name = {
  name: 'hanz-directives',
  path: 'directives',
  component: r => require.ensure([], () => r(require('./index.vue')), 'hanz-directives'),
  redirect: 'directives/intro',
  children: [
    {
      name: 'directives-intro',
      path: 'intro',
      component: r => require.ensure([], () => r(require('./intro.vue')), 'hanz-directives')
    },
    {
      name: 'directives-requireFor',
      path: 'requireFor',
      component: r => require.ensure([], () => r(require('./requireFor.vue')), 'hanz-directives')
    },
    {
      name: 'directives-autoHeight',
      path: 'autoHeight',
      component: r => require.ensure([], () => r(require('./autoHeight')), 'hanz-directives')
    }
  ]
}
