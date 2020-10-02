const sumFunc = (a, b) => {
    a = a - 1
    return a + b
}
const multFunc = (a, b) => {
    a = a + 1
    return a * b
}

const divFunc = (a, b) => {
    return a / b
}

module.exports = {sumFunc, multFunc, divFunc}