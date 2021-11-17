# Instrument a Node.JS application

## Overview

In this lab exercise, you will manually instrument a Node.JS application. You will add the required libraries, define a global tracer, create new spans, set attributes, add events, and set the span status.

To more closely resemble a customer enagement, the steps listed below are intentionally vague. You will be provided with a concise piece of code to demonstrate basic concepts. It will be up to you to decide what additional lines of code should be added and where they should be placed. A completed solution file can be found [here](../solutions/index.js).

## Prerequisites

To complete this exercise, you must have the following software installed:

1. [Node.js](https://nodejs.org/) (v8.5+)

Before you begin, you must first complete the following tasks:

1. [Deploy the Base Environment](../base/README.md)

## Lab Exercise

1. Review the [OpenTelementry JavaScript Instrumentation Guide](https://opentelemetry.io/docs/js/instrumentation/)
1. Review the [Splunk Distribution of OpenTelemetry for Node.js](https://github.com/signalfx/splunk-otel-js)
1. Review the sample application: **index.js**
1. To run the code (as is), execute the following commands:
    ```
    cd /te-apm-instrumentation/nodejs
    npm install
    node index.js
    ```
1. In a web browser, navigate to location [http://localhost:3000/api](http://localhost:3000/api) to test the server's route.
1. To stop the server, return to this terminal window and press: **CTRL-C**
1. Instrument the sample application using OpenTelemetry and send the trace data to Splunk APM. Make sure to include attributes, events, and status messages as appropriate.
    * Use Line 25 to create a new span.
    * As already demonstrated in the code, pass this new span to the getDatabases function. Use it to create a child span.
1. Start the server using the following commands:
    ```
    cd /te-apm-instrumentation/nodejs
    node index.js
    ```
1. Review your applications in Splunk APM. In the UI, filter for your environment so that you only see the applications you have instrumented.

[Previous](../base/) | [Next](../java/)