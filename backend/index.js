const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;


app.get('/', (req, res) => {
    res.end('<h1>Hello world</h1>')
});


app.listen(PORT, () => {
})
