const http = require('http')

const server = http.createServer((req, res) => {
    res.end("Hello Zohnny")
})

// server.listen(8888, "127.0.0.1", () => { // 本机ip地址不可访问
//     console.log("服务启动")
// })

server.listen(8888, "0.0.0.0", () => { // 本机ip地址可访问
    console.log("服务启动")
})