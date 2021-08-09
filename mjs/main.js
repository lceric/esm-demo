import config from './config.js'
import * as say from './say.js'

import './multiple-share.js'

console.log('------------main init------------')
config.username = 'dd'
config.age = 10
console.log('main entry `config` is ', JSON.stringify(config))

// import './import-meta.js'
// import './this.js'

// 交叉引用
// import './cross-reference.js'

// Always “use strict”
// try {
//   a = 6 // main.js:5 Uncaught ReferenceError: a is not defined
// } catch (e) {
//   console.error('Always `use strict`', e)
// }

// Module-level scope
// 模块都有自己的作用域
// import * as topLevelScope from './top-level-scope.js'
// console.log('TopLevelScope模块变量', topLevelScope)
// try {
//   console.log('TopLevelScope模块全局变量', varInModule) // ReferenceError: varInModule is not defined
// } catch (e) {
//   console.error('TopLevelScope模块全局变量', e)
// }

say.sayHi()
