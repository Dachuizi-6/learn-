const path = require('path')

const basePath = "user/zoh"
const filename = "abc.txt"

const respath = path.resolve(basePath, filename)
console.log(respath) // \Users\v_vzhwzhang\Desktop\Node核心\05_常见的内置模块\01_path    \user\zoh\abc.txt
// 结果：会拼接上当前文件所在目录的绝对路径