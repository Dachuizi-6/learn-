const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    if (req.url === '/upload') {
        if (req.method === 'POST') {
            let body = ""
            req.on('data', (data) => {
                console.log(data)
                body += data
            })

            req.on('end', () => {
                console.log(body)
                console.log("文件上传成功")
                res.end("文件上传成功拉")
            })
        }
    }
})

server.listen(8888, () => {
    console.log("发射")
})