const fs = require('fs')

// 1.文件的写入
const content = "你好啊大帅比"
const filePath = "./zohnny.json"

fs.writeFile(filePath, content, { flag: 'a' }, (err) => {
    if (err) {
        console.log(err)
        return
    }
    console.log("写入成功")
})

// 2.文件读取
fs.readFile(filePath, { encoding: 'utf8' }, (err, data) => {
    if (err) {
        console.log(err)
        return
    }
    console.log(data)
})