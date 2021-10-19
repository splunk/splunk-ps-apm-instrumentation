# Install the Splunk OpenTelemetry Connector

## Overview
In this lab exercise, you will install and configure the Splunk OpenTelemetry Connector. All code instrumentation examples will send data to this connector to be forwarded to Splunk Application Performance Monitoring (APM).

Choose and complete one of the following options:
1. Perform a manual installation of the Splunk OpenTelemetry Connector.
2. Use a Docker image, as defined in this repository.

## Manual Installation
Perform the following steps to manually install and configure the connector.

1. Install and configure the [Splunk OpenTelemetry Connector](https://github.com/signalfx/splunk-otel-collector)
2. Set the following environment variables.
    ```
    SPLUNK_ACCESS_TOKEN=<your_token_value>
    SPLUNK_REALM=<your_realm>
    ```

## Use a Docker Image
Perform the following steps to use the Docker image defined in this repository.

1. Install [Docker Engine](https://docs.docker.com/engine/install/)
1. Install [Docker Compose](https://docs.docker.com/compose/install/) 
1. In a terminal, navigate to the following directory.
    ```
    cd /te-apm-instrumentation/otel
    ```
1. In this directory, create a new text file named: **.env**
1. Add the following lines to the file. Set your Splunk APM token and realm information as appropriate.
    ```
    SPLUNK_ACCESS_TOKEN=<your_token_value>
    SPLUNK_REALM=<your_realm>
    ```
1. Save and close the file.
1. In the terminal, enter the following command(s) to start the Docker image.
    ```
    docker compose up --build
    ```
1. To stop the Docker image, return to this terminal window and press: **CTRL-C**
1. Proceed to the code instrumentation exercises.

[Home](../README.md) | [Next](../nodejs/README.md)