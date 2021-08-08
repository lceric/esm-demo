import config from './config.js';

console.log('------------say init------------')

console.log('say模块入口config', config, config.username)

var varInModule = 'var in module';
let letInModule = 'let in module';
const constInModule = 'const in module';

console.log('say模块的import.meta', import.meta)
console.log('say模块的this', this)

export const sayHi = () => {
  console.log(`Hi ${config.username}`, config);
}

export default {
  varInModule,
  letInModule,
  constInModule,
}