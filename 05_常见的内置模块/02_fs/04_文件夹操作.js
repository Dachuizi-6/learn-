const fs = require("fs")
const path = require('path')

const dirname = "./hhh"

// 1.创建文件夹
if (!fs.existsSync(dirname)) {
    fs.mkdir(dirname, err => {
        console.log(err)
    })
}

// 创建文件夹使用相对路径即可，文件夹存在还创建会报文件已存在错误

// 2.读取文件夹中的文件
fs.readdir(dirname, (err, files) => {
    if (err) console.log(err)
    console.log(files) // [ '123.txt', '456.txt', '789.txt' ]
})

// 2.1.读取文件夹中的所有文件
function getFiles(dirname) {
    fs.readdir(dirname, { withFileTypes: true }, (err, files) => {
        if (err) {
            console.log(err)
            return
        }
        // console.log(files)

        for (let file of files) {
            if (file.isDirectory()) {
                // console.log(file.name)
                const temppath = path.resolve(dirname, file.name)
                console.log(temppath)
                getFiles(temppath)
            } else {
                console.log(file.name)
            }
        }
    })
}

getFiles(dirname)

// 3.文件夹重命名
fs.rename('./zohnny1', './hhh', (err) => {
    console.log(err)
})

// 路径处理看path模块、看情况拼接，不管是相对还是绝对，只要是正确的路径即可