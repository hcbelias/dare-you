import hello from 'hellojs'

export default ({ Vue }) => {
  hello.init({ facebook: '' })
  Vue.prototype.$hello = hello
}
