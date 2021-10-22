#!/bin/bash

# make this value unique so that you filter for your app(s) in Splunk APM
export OTEL_RESOURCE_ATTRIBUTES=deployment.environment=te-apm-XYZ

export OTEL_SERVICE_NAME=client-python

splunk-py-trace python Client.py