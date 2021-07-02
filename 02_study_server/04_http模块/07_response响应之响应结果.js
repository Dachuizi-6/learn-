const http = require('http')

const server = http.createServer((req, res) => {
    res.write("响应结果一")

    res.end("响应完成")
})

server.listen(8888, () => {
    console.log("已启动")
})