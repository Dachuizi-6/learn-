const http = require('http')

const server = http.createServer((req, res) => {

    // 设置响应码方式一：直接给属性赋值
    // res.statusCode = 500
    // res.statusCode = 503

    // 设置方式二：和响应头一块设置
    res.writeHead(500, {
        "Content-type": 'text/plain'
    })

    res.end("响应完成")
})

server.listen(8888, () => {
    console.log("已启动")
})