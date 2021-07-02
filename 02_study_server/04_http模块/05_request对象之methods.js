const http = require('http')
const url = require('url')

const server = http.createServer((req, res) => {

    // request对象中封装了客户端给我们服务器传递过来的所有信息
    const { pathname } = url.parse(req.url)
    if (pathname === '/login') {
        if (req.method === "POST") { // method要写成大写
            req.setEncoding('utf-8') // 请求的body参数拿到之后要进行编码，不然拿到的数据是buffer

            let reqObj

            req.on('data', (data) => {
                console.log(typeof data)
                reqObj = JSON.parse(data)
            })
            req.on("end", () => {
                res.end(`欢迎登录
                用户：${reqObj.username}
                密码：${reqObj.password}
                `)
            })
        }
    }
})

// 启动服务器、并且制定端口号和主机
server.listen(8888, "0.0.0.0", () => { // 本机ip地址可访问
    console.log("服务启动")
})