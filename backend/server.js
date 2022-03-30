
const express = require("express");
const port = process.env.PORT || 3000;
const app = express();

var router = express.Router();

app.use(express.json()); //utilities for request bodies
app.use(express.urlencoded({ extended: true})); // utilities for request

//Server setup

app.use('/', router);
app.listen(port, () => {
    console.log(`app is listening at https://localhost:${port}`)
});

app.get("/", (req, res) => {
    res.send("Hello world");
})

// const mongoose = require('mongoose);
// cont url = "mongodb://127."