const EventEmitter = require('events')

// 1.创建发射器
const emitter = new EventEmitter()

// 2.监听某一个事件
emitter.on('click', (...args) => {
    console.log("1监听到click事件", ...args)
})

const listener = (...args) => {
    console.log("2监听到click事件", ...args)
}
emitter.on('click', listener)

// 3.发出一个事件
setTimeout(() => {
    emitter.emit('click', "zohnny", "penny")
    // 监听到一次后，取消你的监听
    emitter.off('click', listener)
    emitter.emit('click', "zohnny", "penny")
}, 1000)