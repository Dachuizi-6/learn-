const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    if (req.url === '/upload') {
        if (req.method === 'POST') {
            const writer = fs.createWriteStream("./foo.jpg", { flags: 'a+' })

            // req.pipe(writer) // req这个流里面的所有信息都会被输入到writer这个流里面
            req.on('data', (data) => {
                console.log(data) // 这个字节流包含的信息是非常多的（body的描述信息）---不是纯图片了
                writer.write(data)
            })

            req.on('end', () => {
                console.log("文件上传成功")
                res.end("文件上传成功拉")
            })
        }
    }
})

server.listen(8888, () => {
    console.log("发射")
})