const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

app.listen(port, function() {
    console.log("App listening on port: " + port);
});

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});
