const fs = require('fs')

const filePath = "./zohnny.json"

fs.open(filePath, (err, fd) => {
    console.log(fd)
    // 通过文件描述符去读取文件信息
    fs.fstat(fd, (err, info) => {
        console.log(info)
    })
})

// open方法生成文件描述符
