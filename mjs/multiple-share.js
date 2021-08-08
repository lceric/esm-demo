// 多模块共享
import config from './config.js'
import { sayHi } from './say.js'

const btn = document.querySelector('.print-config')

btn.onclick = () => {
  console.log('当前config', JSON.stringify(config))
  config.username = 'admin' + Math.random() * 10
  console.log('config更新成功', JSON.stringify(config))
  sayHi()
}