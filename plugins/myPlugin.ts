export default defineNuxtPlugin(nuxtApp => {
  console.log(nuxtApp, "app")
  addRouteMiddleware('global-test', (from, to) => { // 路由守卫
    console.log('plugin middleware test',from, to)
  }, {global: true})
  nuxtApp.vueApp.directive('focus', { // 自定义指令
    mounted(el) {
        el.focus()
    }
  })
  return {
    provide: { // 公共方法
      sayHi: (msg: string) => console.log("plugin sayHi " + msg),
    },
  }
})
