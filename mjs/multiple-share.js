// 模块共享
import config from './config.js'
import { sayHi } from './say.js'

console.log('------------multiple-share init------------')
console.log('multiple-share entry `config` is ', JSON.stringify(config))

const btn = document.querySelector('.print-config')

btn.onclick = () => {
  console.log('before update `config` is', JSON.stringify(config))
  config.username = 'admin' + Math.random() * 10
  console.log('updated `config` is', JSON.stringify(config))
  sayHi()
}
