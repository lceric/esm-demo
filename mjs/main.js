import * as say from './say.js'
import config from './config.js'

// 模块import.meta
import './import-meta.js'
// 交叉引用
// import './cross-reference.js';
// 模块共享
import './multiple-share.js';

console.log('------------main init------------')

console.log('main模块入口config', config, config.username)

console.log('main模块打印say模块', say)

say.sayHi()

// Always “use strict”
// a = 6 // main.js:5 Uncaught ReferenceError: a is not defined

// Module-level scope
// 模块都有自己的作用域
// console.log('main模块中直接读取say模块全局变量', varInModule, letInModule, constInModule) // ReferenceError: varInModule is not defined

// contains the information about the current module
console.log('main模块的import.meta', import.meta)
// in a module, `this` is undefined
console.log('main模块的this', this)
