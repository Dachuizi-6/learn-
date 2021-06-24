const EventEmmit = require('events')

const emmiter = new EventEmmit()

emmiter.once('click', (args) => {
    console.log("第一个click", args)
})

function listener(args) {
    console.log(arguments)
    console.log(this)
    console.log("监听到第二个click", args)
}
emmiter.on('click', listener)

emmiter.prependListener('click', () => {
    console.log("我要最先执行")
})

emmiter.on('scroll', () => {
    console.log("监听到滚动事件")
})

setTimeout(() => {
    // emmiter.removeAllListeners('click')
    // emmiter.removeListener()
    emmiter.emit('click', "zohnny")
    emmiter.emit('click', "penny")
    emmiter.emit('scroll')
}, 100);

console.log(arguments) // 沙盒环境下面的arguments
console.log(this) // node里面的每个模块都call到exports下面了