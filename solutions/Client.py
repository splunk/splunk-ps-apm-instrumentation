from opentelemetry import trace
from opentelemetry.trace.status import Status, StatusCode
import requests

tracer = trace.get_tracer("te-apm")

def getAPI():
    span = tracer.start_span(name="/api", kind=trace.SpanKind.CLIENT)
    span.set_attribute("username", "user01")
    span.add_event("GET something")
        
    response = requests.get(url="http://localhost:3000/api?username=user01")
    print(str(response.status_code) + ": " + response.text)
    span.set_status(Status(StatusCode.OK))

    span.end()
    return

getAPI()