require('dotenv').config();
const { startTracing } = require('@splunk/otel');
startTracing();

const opentelemetry = require('@opentelemetry/api');
const tracer = opentelemetry.trace.getTracer('te-apm');

const express = require("express");
const app = express();

// GET request
app.get("/api", (req, res) => {
    const span = tracer.startSpan('/api', { 'kind':opentelemetry.SpanKind.SERVER });
    span.setAttribute('username',req.query.username);
    span.addEvent('doing something');
    // Do something!
    res.sendStatus(200);
    span.setStatus({ 'code':opentelemetry.SpanStatusCode.OK, 'message':'success' });
    span.end();
});

// Start the server
app.listen(3000, () => {
  console.log(`Server listening on 3000`);
});