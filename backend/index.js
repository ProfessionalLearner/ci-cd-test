const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

if (process.env)
app.use(express.static(__dirname + '/webapp/'))
app.get(/.*/, (req, res) => {
    res.sendFile(__dirname + '/webapp/index.html');
});

app.listen(PORT, () => {
});
