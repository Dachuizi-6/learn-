const bar = require("./foo")

console.log(bar.name)
console.log(bar.age)
bar.sayHi()

// setTimeout(() => {
//   bar.name = "大帅比"
// }, 1000)

setTimeout(() => {
  console.log(bar.name)
}, 2000)
