#!/bin/bash

#export OTEL_RESOURCE_ATTRIBUTES='deployment.environment=te-apm-XYZ'
#export OTEL_SERVICE_NAME='client-java'

mvn compile exec:exec \
  -Dexec.executable="java" \
  -Dexec.args="-javaagent:./splunk-otel-javaagent.jar -cp %classpath te.apm.instrumentation.Client"