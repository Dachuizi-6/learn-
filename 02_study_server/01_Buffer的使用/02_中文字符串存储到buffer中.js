const message = "你好啊"

const buffer = Buffer.from(message) // 中文编码默认是utf8
console.log(buffer)

// 一个中文对应是哪个字节
console.log(buffer.toString()) // 中文解码默认是utf8

// 编码使用utf16le，解码使用utf8，结果得到乱码
const buffer2 = Buffer.from(message, "utf16le") // 此编码一个中文对应两个字节
console.log(buffer2)
console.log(buffer2.toString("utf8"))
