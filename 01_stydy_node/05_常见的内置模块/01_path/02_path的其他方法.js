const path = require("path")

// const mypath = "/user/zoh/abc.txt"
// console.log("文件所在路径", path.dirname(mypath))
// console.log("文件名", path.basename(mypath))
// console.log("文件后缀", path.extname(mypath))

// const basepath = "/user/zoh"
// const filepath = "abc.txt"
// const respath = path.join(basepath, filepath)
// console.log(respath) // \user\zoh\abc.txt

// const basepath = "user/zoh"
// const filepath = "abc.txt"
// const respath = path.join(basepath, filepath)
// console.log(respath) // user\zoh\abc.txt

// const basepath = "./user/zoh"
// const filepath = "abc.txt"
// const respath = path.join(basepath, filepath)
// console.log(respath) // user\zoh\abc.txt

// const basepath = "../user/zoh"
// const filepath = "abc.txt"
// const respath = path.join(basepath, filepath)
// console.log(respath) // ..\user\zoh\abc.txt

// 以上结果可以看出join方法比较死板，给什么拼接什么

// const basepath = "../user/zoh" // \Users\v_vzhwzhang\Desktop\Node核心\05_常见的内置模块    \user\zoh\abc.txt
// const basepath = "./user/zoh" // \Users\v_vzhwzhang\Desktop\Node核心\05_常见的内置模块\01_path\user\zoh\abc.txt
const basepath = "/user/zoh" // \user\zoh\abc.txt
const filepath = "abc.txt"

const respath = path.resolve(basepath, filepath)
console.log(respath)

// resolve方法比较灵活，只要路径不是 / 开头，就会根据相对不相对，找到绝对路径

const mypath = "/user/zohnny/zoh"
console.log(path.dirname(mypath)) // /user/zohnny
