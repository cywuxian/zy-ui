import components from "./components"
import "./theme-chalk/index.css"
//注册字符串扩展函数
import "../plugin/string+extend"
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
