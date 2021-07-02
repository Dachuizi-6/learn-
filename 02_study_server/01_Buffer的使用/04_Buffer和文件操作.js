const fs = require("fs")
const sharp = require("sharp")

// 读取文本文件
// fs.readFile("./foo.txt", (err, data) => {
//   if (err) return
//   console.log(data.toString())
// })

// 读取图片文件
// fs.readFile("./girl.jpg", (err, data) => {
//   if (err) return
//   console.log(data)

//   fs.writeFile("./baz.png", data, (err) => {
//     console.log(err)
//   })
// })

// sharp库的使用
// sharp("./girl.jpg").resize(200, 200).toFile("./bax.png")

sharp("./girl.jpg")
  .resize(300, 300)
  .toBuffer()
  .then((data) => {
    console.log(data) // 上面转buffer，那你这里肯定是buffer啊
    fs.writeFile("./foy.jpg", data, (err) => {
      console.log(err)
    })
  })
