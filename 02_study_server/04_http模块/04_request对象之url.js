const http = require('http')
const url = require('url')
const qs = require("querystring")

const server = http.createServer((req, res) => {

    // request对象中封装了客户端给我们服务器传递过来的所有信息

    // 最基本的使用方式
    // if (req.url === '/login') {
    //     res.end("欢迎回来~")
    // } else if (req.url === '/users') {
    //     res.end("用户列表~")
    // } else {
    //     res.end("你请求的资源不存在")
    // }

    const { pathname, query } = url.parse(req.url)
    if (pathname === "/login") {
        const { username, password } = qs.parse(query)
        res.end(`登录成功
        用户名：${username}
        密码：${password}`)

    }

})

// 启动服务器、并且制定端口号和主机
server.listen(8888, "0.0.0.0", () => { // 本机ip地址可访问
    console.log("服务启动")
})