const fs = require("fs")
// console.log(fs)

// 案例：读取文件信息
const filePath = "./zohnny.json"

// 一、同步读取
// const info = fs.statSync(filePath)
// console.log(info)
// console.log("我在你后面执行")

// 二、异步读取--->回调函数读取
// fs.stat(filePath, (err, state) => {
//     if (err) {
//         console.log(err)
//         return
//     }
//     console.log(state)
//     console.log(state.isFile()) // true
//     console.log(state.isDirectory()) //false
// })
// console.log("我先执行")

// 三、异步promise读取
fs.promises.stat(filePath).then(res => {
    console.log(res)
})
console.log("我也先执行")

// 读取到的文件信息
// isFile()
// isDirectory()