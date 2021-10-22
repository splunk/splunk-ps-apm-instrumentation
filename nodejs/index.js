// load environment variables from .env file
require('dotenv').config();

const express = require("express");
const app = express();

// a connection to the MongoDB Docker container
let dbConn = null;
const { MongoClient } = require("mongodb");
MongoClient.connect("mongodb://localhost:27017", {
    useUnifiedTopology: true
}, (err, client) => {
    dbConn = client.db("test").admin();
});

// ping the database to demonstrate a remote service call
getDatabases = (parentSpan) => {
    dbConn.ping((err, result) => {
        console.log(result);
    });
} 

// publish a /api endpont for HTTP GET requests
app.get("/api", (req, res) => {
    const span = null;
    getDatabases(span);
    res.sendStatus(200);
});

// start the server
app.listen(3000, () => {
    console.log(`Server listening on 3000`);
});
