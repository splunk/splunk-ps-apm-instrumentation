# Instrument a Node.JS application

## Overview

In this lab exercise, you will manually instrument a Node.JS application. You will add the required libraries, define a global tracer, create new spans, set attributes, add events, and set the span status.

For each of the steps below, the line(s) of code will be provided for you. However, in order to more closely resemble a customer engagement, it will be up to you to decide where those lines of code should be inserted into the sample application. A completed solution file can be found [here](../solutions/index.js).

## Prerequisites

To complete this exercise, you must have the following software installed:

1. [Node.js](https://nodejs.org/) (v8+)

Before you begin, you must first complete the following tasks:

1. [Deploy the Base Environment](./base/README.md)

## Lab Exercise

1. Review the [OpenTelementry Node.JS Getting Started Guide](https://opentelemetry.io/docs/js/getting_started/nodejs)
1. Install the core dependencies
    ```
    cd /te-apm-instrumentation/nodejs
    npm install
    npm install @opentelemetry/api @splunk/otel
    cat package.json
    ```
1. In a code/text editor, open file: **index.js**
1. Import the required libraries
    ```javascript
    const opentelemetry = require('@opentelemetry/api');
    ```
1. Initialize a global tracer
    ```javascript
    const tracer = opentelemetry.trace.getTracer('te-apm');
    ```
1. Create a new span in the function that sets up the "/api" endpoint.
    ```javascript
    const span = tracer.startSpan('/api', { 'kind':opentelemetry.SpanKind.SERVER });
    // code block
    span.end();
    ```
1. Add an attribute to the current span.
    ```javascript
    span.setAttribute('username',req.query.username);
    ```
1. Add an event to the current span.
    ```javascript
    span.addEvent('doing something');
    ```
1. Add a status to the current span.
    ```javascript
    span.setStatus({ 'code':opentelemetry.SpanStatusCode.OK, 'message':'success' });
    ```
1. In this directory, create a new text file named: **.env**
1. Add the following lines to the file. Set your Splunk APM environment name as appropriate. Make it unique so that you can filter for your applications in Splunk APM.
    ```
    OTEL_RESOURCE_ATTRIBUTES=deployment.environment=your-env-name
    OTEL_SERVICE_NAME=server-nodejs
    ```
1. Save and close the file.
1. Enable tracing with Splunk
    ```javascript
    const { startTracing } = require('@splunk/otel');
    startTracing();
    ```
1. In a terminal, enter the following command(s) to start the Node.JS server.
    ```
    cd /te-apm-instrumentation/nodejs
    node index.js
    ```
1. To stop the server, return to this terminal window and press: **CTRL-C**
1. In a web browser, navigate to location [http://localhost:3000/api](http://localhost:3000/api) to generate a new span.
1. Review your application(s) in Splunk APM. In the UI, filter for your environment so that you see only the applications that you have instrumented.

[Previous](../base/README.md) | [Home](../README.md) | [Next](../java/README.md)