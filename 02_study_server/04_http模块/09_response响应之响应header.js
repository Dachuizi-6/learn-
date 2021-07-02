const http = require('http')

const server = http.createServer((req, res) => {
    // 设置响应头方式一
    // res.setHeader("content-type", "text/plain;charset=utf8")

    // 设置方式二
    res.writeHead(200, {
        // "content-type": 'application/json;charset=utf8'
        "Content-Type": 'text/html;charset=utf8'
    })
    res.end("<h2>Zohnny大帅比</h2>")
})

server.listen(8888, () => {
    console.log("发射")
})