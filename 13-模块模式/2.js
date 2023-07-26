let count = 0

function increase() {
    return ++count
}

function decrease() {
    return --count
}

// 默认暴露模块化
export default {
    increase,
    decrease
}