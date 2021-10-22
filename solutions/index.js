// load environment variables from .env file
require('dotenv').config();

const { startTracing } = require('@splunk/otel');
startTracing();

const opentelemetry = require('@opentelemetry/api');
const tracer = opentelemetry.trace.getTracer('te-apm');

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
    const ctx = opentelemetry.trace.setSpan(opentelemetry.context.active(), parentSpan);
    const span = tracer.startSpan('mongo', { 'kind':opentelemetry.SpanKind.CLIENT }, ctx);
    span.setAttribute('db.instance','mongo');

    dbConn.ping((err, result) => {
        console.log(result);
        span.end();
    });
} 

// publish a /api endpont for HTTP GET requests
app.get("/api", (req, res) => {
    const span = tracer.startSpan('/api', { 'kind':opentelemetry.SpanKind.SERVER });
    span.setAttribute('username',req.query.username);
    span.addEvent('doing something');

    getDatabases(span);
    res.sendStatus(200);
    
    span.setStatus({ 'code':opentelemetry.SpanStatusCode.OK, 'message':'success' });
    span.end();
});

// start the server
app.listen(3000, () => {
    console.log(`Server listening on 3000`);
});
