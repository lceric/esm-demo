import config from './config.js'

console.log('------------say init------------')
console.log('say模块入口config', JSON.stringify(config))

export const sayHi = () => {
  console.log(`Hi ${config.username}`, JSON.stringify(config))
}
