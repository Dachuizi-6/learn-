const message = "Hello Zohnny"

// 创建方式一（过期）
// const buffer = new Buffer(message)
// console.log(buffer)

// 创建方式二
const buffer = Buffer.from(message)

console.log(buffer)
