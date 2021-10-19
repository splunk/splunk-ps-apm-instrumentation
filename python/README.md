# Instrument a Python application

## Overview

In this lab exercise, you will manually instrument a Python application. You will add the required libraries, define a global tracer, create new spans, set attributes, add events, and set the span status.

For each of the steps below, only a brief description of the task will be provided. It will be up to you to decide what lines of code should be added and where they should be placed. This should help make the scenario more closely resemble a customer engagement. A completed solution file can be found [here](../solutions/Client.py).

## Prerequisites

To complete this exercise, you must have the following software installed:

1. [Python](https://www.python.org/downloads/) (v3.6+)

Before you begin, you must first complete the following tasks:

1. [Install the Splunk OpenTelemetry Connector](../otel/README.md)
1. [Instrument a Node.JS application](../nodejs/README.md)
1. Review the [OpenTelementry Python Getting Started Guide](https://opentelemetry.io/docs/python/getting-started/)

## Lab Exercise

1. Install the core dependencies.
    ```
    requests
    opentelemetry-api
    splunk-opentelemetry[all]
    ```
1. In a code/text editor, open file: **Client.py**
1. Import the required libraries. You will need to create a tracer (to generate a span) and apply a status code to the span.
1. Initialize a global tracer.
1. Create a new span in the function that sets up the "/api" endpoint.
    * Set the operation name to "/api"
    * Set the span kind to "client"
1. Add an attribute to the current span.
    * Set the key to "username" and the value to "user01"
1. Add an event to the current span.
    * Indicate that a GET request is about to be made.
1. Add a status to the current span.
    * Set the status to "ok"
1. In this directory, open the file named: **run.sh**
1. Add the following lines to the file. Set your Splunk APM environment name as appropriate. Make it unique so that you can filter for your applications in Splunk APM.
    ```
    OTEL_RESOURCE_ATTRIBUTES=deployment.environment=your-env-name
    OTEL_SERVICE_NAME=client-python
    ```
1. Save and close the file.
1. In a terminal, install additional instrumentation libraries using the bootstrap utility.
1. In a terminal, enter the following command(s) to start the Python client and generate a new span.
    ```
    cd /te-apm-instrumentation/python
    sh run.sh
    ```
1. Review your application(s) in Splunk APM. In the UI, filter for your environment so that you see only the applications that you have instrumented.

[Previous](../java/README.md) | [Home](../README.md)