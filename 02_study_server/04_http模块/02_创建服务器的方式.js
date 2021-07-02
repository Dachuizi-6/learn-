const http = require('http')

// 创建server1
const server1 = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/plain;charset=utf8")
    res.end("哈哈哈1")
})

server1.listen(8000, () => {
    console.log("服务1启动成功~")
})

const server2 = new http.Server((req, res) => {
    res.end("Hello Zohnny")
})

server2.listen(8001, () => {
    console.log("服务2启动成功")
})