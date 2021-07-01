// 通过alloc的方式创建buffer

const buffer = Buffer.alloc(8) // 创建8个字节的buffer
console.log(buffer)

buffer[0] = 88
buffer[1] = 0x88
console.log(buffer)
