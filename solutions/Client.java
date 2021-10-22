package te.apm.instrumentation;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.net.http.HttpResponse.BodyHandlers;

import io.opentelemetry.api.GlobalOpenTelemetry;
import io.opentelemetry.api.trace.Span;
import io.opentelemetry.api.trace.SpanKind;
import io.opentelemetry.api.trace.StatusCode;
import io.opentelemetry.api.trace.Tracer;
import io.opentelemetry.context.Scope;

public class Client {

    private static final HttpClient client = HttpClient.newHttpClient();
	private static final Tracer tracer = GlobalOpenTelemetry.getTracer("te-apm");

    // call the /api endpoint of the Node.JS server
    public void getAPI() {
    	Span span = tracer.spanBuilder("/api").setSpanKind(SpanKind.CLIENT).startSpan();
        span.setAttribute("username", "user01");
        span.addEvent("GET something");

        try (Scope scope = span.makeCurrent()) {
            HttpRequest request = HttpRequest.newBuilder()
                .GET()
                .uri(URI.create("http://localhost:3000/api?username=user01"))
                .build();
            HttpResponse<String> response = client.send(request, BodyHandlers.ofString());
            System.out.println(response.statusCode() + ": " + response.body());
        } catch(Throwable t) {
            span.setStatus(StatusCode.ERROR, "failed to get /api");
        } finally {
            span.end();
        }
    }

	public static void main(String[] args) {
		Client client = new Client();
        client.getAPI();
	}

}
