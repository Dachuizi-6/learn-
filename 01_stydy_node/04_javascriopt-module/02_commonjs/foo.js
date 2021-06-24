const name = "zohnny"
const age = 18
function sayHi() {
  console.log("你好，大帅比")
}

// 别人一秒后修改，我这里打印
// setTimeout(() => {
//   console.log(exports.name)
// }, 2000)

// 我这里修改，别人一秒后打印
setTimeout(() => {
  exports.name = "哈哈哈"
}, 1000)

exports.name = name
exports.age = age
exports.sayHi = sayHi

console.log(exports) // {}
// 每个模块都有一个exports对象，只不过指向的是空对象
