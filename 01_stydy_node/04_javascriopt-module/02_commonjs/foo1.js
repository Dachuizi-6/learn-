const info = {
  name: "zohnny",
}

setTimeout(() => {
  info.name = "111"
}, 1000)

module.exports = {
  info: info,
}
