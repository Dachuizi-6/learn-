const bar = require("./foo1")

console.log(bar)

setTimeout(() => {
  console.log(bar.info.name)
}, 2000)
