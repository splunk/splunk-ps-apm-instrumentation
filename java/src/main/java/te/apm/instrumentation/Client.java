package te.apm.instrumentation;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.net.http.HttpResponse.BodyHandlers;

public class Client {

    private static final HttpClient client = HttpClient.newHttpClient();

    // call the /api endpoint of the Node.JS server
    public void getAPI() {
        try {
            HttpRequest request = HttpRequest.newBuilder()
                .GET()
                .uri(URI.create("http://localhost:3000/api?username=user01"))
                .build();
            HttpResponse<String> response = client.send(request, BodyHandlers.ofString());
            System.out.println(response.statusCode() + ": " + response.body());
        } catch(Throwable t) {
            
        } finally {
            
        }
    }
    
    public static void main(String[] args) {
        Client client = new Client();
        client.getAPI();
    }
    
}
