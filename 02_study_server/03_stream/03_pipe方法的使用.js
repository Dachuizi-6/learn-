const fs = require('fs')

// 读取文件内容到另一个文件上
// fs.readFile("./bar.txt", (err, data) => {
//     if (err) return
//     console.log(data)
//     fs.writeFile("./baz.html", data, err => {
//         if (err) {
//             console.log(err)
//             return
//         }
//     })
// })

const reader = fs.createReadStream("./baz.html")
const writer = fs.createWriteStream("./bay.md")

reader.pipe(writer)

writer.on("close", () => {
    console.log("文件被关闭")
})

writer.on("finish", () => {
    console.log("文件写入完成")
})