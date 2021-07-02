const http = require('http')

const server = http.createServer((req, res) => {
    console.log(req.headers)

    res.on('data', () => {
        console.log(data)
    })

    res.end("Hello Server")
})

server.listen(8888, () => {
    console.log("已启动")
})

