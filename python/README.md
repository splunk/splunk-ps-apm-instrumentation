# Instrument a Python application

## Overview

In this lab exercise, you will manually instrument a Python application. You will add the required libraries, define a global tracer, create new spans, set attributes, add events, and set the span status.

To more closely resemble a customer enagement, the steps listed below are intentionally vague. You will be provided with a concise piece of code to demonstrate basic concepts. It will be up to you to decide what additional lines of code should be added and where they should be placed. A completed solution file can be found [here](../solutions/Client.py).

## Prerequisites

To complete this exercise, you must have the following software installed:

1. [Python](https://www.python.org/downloads/) (v3.6+)

Before you begin, you must first complete the following tasks:

1. [Deploy the Base Environment](../base/README.md)
1. [Instrument a Node.JS application](../nodejs/README.md)

## Lab Exercise

1. Review the [OpenTelementry Python Getting Started Guide](https://opentelemetry.io/docs/python/getting-started/)
1. Review the [Splunk Distribution of OpenTelemetry Python](https://github.com/signalfx/splunk-otel-python)
1. Review the sample application: **Client.py**
1. To run the code (as is), execute the following command(s):
    ```
    cd /te-apm-instrumentation/python
    pip install requests
    python Client.py
    ```
1. Instrument the sample application using OpenTelemetry and send the trace data to Splunk APM. Make sure to include attributes, events, and status messages as appropriate.
1. A script has been provided to execute the instrumented code. Review the script, make any necessary updates to it, and then execute it using the following command(s):
    ```
    cd /te-apm-instrumentation/python
    sh run.sh
    ```
1. Review your application(s) in Splunk APM. In the UI, filter for your environment so that you only see the applications you have instrumented.

[Previous](../java/README.md) | [Home](../README.md)