import components from "./components"
import "../assets/theme-chalk/index.css"
// 批量组件注册
const install = function (Vue) {
  Object.keys(components).forEach((key) => {
    const component = components[key]
    Vue.component(component.name, component)
  })
}

export default {
  install,
  ...components,
}
