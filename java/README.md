# Instrument a Java application

## Overview

In this lab exercise, you will manually instrument a Java application. You will add the required libraries, define a global tracer, create new spans, set attributes, add events, and set the span status.

For each of the steps below, the line(s) of code will be provided for you. However, in order to more closely resemble a customer engagement, it will be up to you to decide where those lines of code should be inserted into the sample application. A completed solution file can be found [here](../solutions/Client.java).

## Prerequisites

To complete this exercise, you must have the following software installed:

1. [Java](https://openjdk.java.net/) (v8+)
1. [Maven](https://maven.apache.org/)

Before you begin, you must first complete the following tasks:

1. [Deploy the Base Environment](./base/README.md)
1. [Instrument a Node.JS application](../nodejs/README.md)

## Lab Exercise

1. Review the [OpenTelementry Java Getting Started Guide](https://opentelemetry.io/docs/java/manual_instrumentation/)
1. Review the core dependencies. In this exercise, you will be using Maven.
    ```
    cd /te-apm-instrumentation/java
    cat pom.xml
    ```
1. In a code/text editor, open file: **src/main/java/te/apm/instrumentation/Client.java**
1. Import the required libraries
    ```java
    import io.opentelemetry.api.GlobalOpenTelemetry;
    import io.opentelemetry.api.trace.Span;
    import io.opentelemetry.api.trace.SpanKind;
    import io.opentelemetry.api.trace.StatusCode;
    import io.opentelemetry.api.trace.Tracer;
    import io.opentelemetry.context.Scope;
    ```
1. Initialize a global tracer
    ```java
    private static final Tracer tracer = GlobalOpenTelemetry.getTracer("te-apm");
    ```
1. Create a new span in the function that sets up the "/api" endpoint.
    ```java
    Span span = tracer.spanBuilder("/api").setSpanKind(SpanKind.CLIENT).startSpan();
    // code block
    span.end();
    ```
1. Add an attribute to the current span.
    ```java
    span.setAttribute("username", "user01");
    ```
1. Add an event to the current span.
    ```java
    span.addEvent("GET something");
    ```
1. Add a status to the current span.
    ```java
    span.setStatus(StatusCode.ERROR, "failed to get /api");
    ```
1. In this directory, open the file named: **run.sh**
1. Add the following lines to the file. Set your Splunk APM environment name as appropriate. Make it unique so that you can filter for your applications in Splunk APM.
    ```
    OTEL_RESOURCE_ATTRIBUTES=deployment.environment=your-env-name
    OTEL_SERVICE_NAME=client-java
    ```
1. Save and close the file.
1. In a terminal, download the Java Agent to enable tracing with Splunk.
    ```
    curl -L https://github.com/signalfx/splunk-otel-java/releases/latest/download/splunk-otel-javaagent-all.jar \
    -o splunk-otel-javaagent.jar
    ```
1. In a terminal, enter the following command(s) to start the Java client and generate a new span.
    ```
    cd /te-apm-instrumentation/java
    sh run.sh
    ```
1. Review your application(s) in Splunk APM. In the UI, filter for your environment so that you see only the applications that you have instrumented.

[Previous](../nodejs/README.md) | [Home](../README.md) | [Next](../python/README.md)