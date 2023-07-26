// 闭包模块化
const obj = (function () {
    let count = 0
    return {
        increase() {
            return ++count
        },
        decrease() {
            return --count
        }
    }
})()