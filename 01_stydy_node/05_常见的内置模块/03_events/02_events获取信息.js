const EventEmitter = require('events')

const emmiter = new EventEmitter()

emmiter.on('click', (args) => {
    console.log("1click事件触发", args)
})

const listener = (args) => {
    console.log("222", args)
}
emmiter.on('click', listener)

emmiter.on('tap', (args) => {
    console.log(args)
})

console.log(emmiter.eventNames()) // [ 'click', 'tap' ] --- 注册事件的字符串数组
console.log(emmiter.listenerCount('click')) // 2 --- click事件当前对象的监听器个数
console.log(emmiter.listeners('click')) // 返回emmiter对象上面click的监听器数组