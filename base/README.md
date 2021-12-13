# Deploy the Base Environment

## Overview
In this lab exercise, you will deploy the base environment required for the code instrumentation exercises. The base environment consists of the following Docker containers:
* The **Splunk OpenTelemetry Connector** will be used to forward trace data to Splunk Application Performance Monitoring (APM).
* **MongoDB** will be used by the Node.JS server to provide an inferred service when viewing the instrumented applications in Splunk APM.

## Start the Docker containers
Perform the following steps to configure and start the Docker containers required for the lab exercises.

1. Install [Docker Engine](https://docs.docker.com/engine/install/)
1. Install [Docker Compose](https://docs.docker.com/compose/install/) 
1. In a terminal, navigate to the following directory.
    ```
    cd /splunk-ps-apm-instrumentation/base
    ```
1. In this directory, create a new text file named: **.env**
1. Add the following lines to the file. Set your Splunk APM token and realm information as appropriate.
    ```
    SPLUNK_ACCESS_TOKEN=<your_token_value>
    SPLUNK_REALM=<your_realm>
    ```
1. Save and close the file.
1. Return to the terminal and enter the following command(s) to start the Docker containers.
    ```
    docker-compose up --build
    ```
1. To stop the Docker containers, return to this terminal window and press: **CTRL-C**
1. Proceed to the code instrumentation exercises.

[Next](../nodejs/)
