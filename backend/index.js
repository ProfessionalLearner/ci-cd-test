const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV == "production") {
    app.use(express.static(__dirname + '/client/'))
    app.get(/.*/, (req, res) => {
        res.sendFile(__dirname + '/client/index.html');
    });
}

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
});
