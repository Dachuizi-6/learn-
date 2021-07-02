const fs = require("fs")

// 传统读取文件
// fs.readFile("./foo.txt", (err, data) => {
//     if (err) return
//     console.log(data.toString())
// })

const reader = fs.createReadStream("./foo.txt", { start: 3, end: 10, highWaterMark: 2 })
// console.log(reader)

reader.on('data', data => {
    console.log(data)
    reader.pause()

    setTimeout(() => {
        reader.resume()
    }, 2000)
})


reader.on('open', () => {
    console.log("文件被打开")
})

reader.on('close', () => {
    console.log("文件被关闭")
})