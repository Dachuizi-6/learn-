const http = require('http')

// 发送get请求
// http.get('http://localhost:8888', (res) => {
//     res.on('data', data => {
//         console.log(data)
//     })
// })

// 发送post请求
const req = http.request({
    method: 'post',
    hostname: 'localhost',
    port: 8888
}, res => {
    res.on('data', (data) => {
        console.log(data.toString())
    })

    res.on('end', () => {
        console.log("获取到了全部结果")
    })
})
req.end() // 没有这句代码请求时没发送出去的，必须告诉服务器，咱这要请求的东西，配置的东西都已经结束了，服务器才会响应，不然请求是会被挂起的

// 一般不用原生开发