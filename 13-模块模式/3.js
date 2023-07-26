let count = 0

function increase() {
    return ++count
}

function decrease() {
    return --count
}

// 分别暴露模块化
export {
    increase,
    decrease
}