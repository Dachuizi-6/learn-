const fs = require('fs')

// fs.writeFile("./bar.txt", "Hello Stream", { flag: 'a' }, (err) => {
//     console.log(err)
// })

const writer = fs.createWriteStream("./bar.txt", {
    flags: 'r+',
    start: 3
})

writer.write("你好啊", (err) => {
    console.log("写入成功")
})

// writer.write("大帅比", (err) => {
//     console.log("写入成功")
// })

writer.on("open", () => {
    console.log("文件打开")
})

writer.end("Hello")


writer.close()

writer.on("close", () => {
    console.log("文件关闭")
})