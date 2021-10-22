require('dotenv').config();

const express = require("express");
const app = express();

let dbConn = null;
const { MongoClient } = require("mongodb");
MongoClient.connect("mongodb://localhost:27017", {
    useUnifiedTopology: true
}, (err, client) => {
    dbConn = client.db("test").admin();
});

getDatabases = (parentSpan) => {
    dbConn.ping((err, result) => {
        console.log(result);
    });
} 

app.get("/api", (req, res) => {
    const span = null;
    getDatabases(span);
    res.sendStatus(200);
});

app.listen(3000, () => {
    console.log(`Server listening on 3000`);
});
