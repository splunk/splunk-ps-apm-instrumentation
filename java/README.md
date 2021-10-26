# Instrument a Java application

## Overview

In this lab exercise, you will manually instrument a Java application. You will add the required libraries, define a global tracer, create new spans, set attributes, add events, and set the span status.

To more closely resemble a customer enagement, the steps listed below are intentionally vague. You will be provided with a concise piece of code to demonstrate basic concepts. It will be up to you to decide what additional lines of code should be added and where they should be placed. A completed solution file can be found [here](../solutions/Client.java).

## Prerequisites

To complete this exercise, you must have the following software installed:

1. [Java](https://openjdk.java.net/) (v8+)
1. [Maven](https://maven.apache.org/)

Before you begin, you must first complete the following tasks:

1. [Deploy the Base Environment](../base/README.md)
1. [Instrument a Node.JS application](../nodejs/README.md)

## Lab Exercise

1. Review the [OpenTelementry Java Manual Instrumentation Guide](https://opentelemetry.io/docs/java/manual_instrumentation/)
1. Review the [Splunk Distribution of OpenTelemetry Java](https://github.com/signalfx/splunk-otel-java)
1. Review the sample application: **Client.java**
1. To run the code (as is), execute the following commands:
    ```
    cd /te-apm-instrumentation/java
    java src/main/java/te/apm/instrumentation/Client.java
    ```
1. Instrument the sample application using OpenTelemetry and send the trace data to Splunk APM. Make sure to include attributes, events, and status messages as appropriate.
1. A script has been provided to execute the instrumented code. Review the script, make any necessary updates to it, and then execute it using the following commands:
    ```
    cd /te-apm-instrumentation/java
    sh run.sh
    ```
1. Review your applications in Splunk APM. In the UI, filter for your environment so that you only see the applications you have instrumented.

[Previous](../nodejs/README.md) | [Home](../README.md) | [Next](../python/README.md)