# Instrumenting Apps for Splunk APM

## Overview
This workshop will demonstrate how to manually instrument applications for Splunk Application Performance Monitoring (APM). For each language listed below, the workshop will:
- Describe how to set up a local development environment
- Provide a concise sample application to demonstrate concepts

## Prerequisites
All lab exercises share the following set of requirements:

- Previous experience with the selected programming language
- You have [git](https://git-scm.com/) installed to clone this repository
- You are a member of a Splunk APM enabled organization in the Splunk Observability Cloud and you have a valid access token from the organization

## Getting Started
Before you begin, you must complete the following steps:

1. Clone the GitHub repository
```
git clone https://github.com/splunk/splunk-ps-apm-instrumentation.git
cd splunk-ps-apm-instrumentation
``` 

## Lab Exercises
In this workshop, you will instrument a server application using Node.js. For all other languages, you will instrument client applications that connect to the Node.JS server. After completing the lab exercises, you should have a better understanding of the processes required to manually instrument applications for Splunk APM.

1. [Deploy the Base Environment](./base)
1. [Instrument a Node.JS application](./nodejs)
1. [Instrument a Java application](./java)
1. [Instrument a Python application](./python)
