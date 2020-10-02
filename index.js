const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;


app.get('/', (req, res) => {
    res.end('<h1>Hello world</h1>')
});


app.listen(PORT, () => {
})

const sumFunc = (a, b) => {
    return a + b
}
const multFunc = (a, b) => {
    return a * b
}

const divFunc = (a, b) => {
    return a / b
}

module.exports = {sumFunc, multFunc, divFunc}