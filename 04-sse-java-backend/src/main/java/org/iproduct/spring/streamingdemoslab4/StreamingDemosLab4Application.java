package org.iproduct.spring.streamingdemoslab4;

import org.iproduct.spring.streamingdemoslab4.web.ReactiveQuotesHandler;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.http.MediaType;
import org.springframework.web.reactive.config.EnableWebFlux;
import org.springframework.web.reactive.function.server.RouterFunction;
import org.springframework.web.reactive.function.server.ServerResponse;

import static org.springframework.http.MediaType.APPLICATION_STREAM_JSON;
import static org.springframework.http.MediaType.TEXT_EVENT_STREAM;
import static org.springframework.web.reactive.function.server.RequestPredicates.GET;
import static org.springframework.web.reactive.function.server.RequestPredicates.accept;
import static org.springframework.web.reactive.function.server.RouterFunctions.route;

@SpringBootApplication
@EnableWebFlux
public class StreamingDemosLab4Application {
	@Bean
	public RouterFunction<ServerResponse> routes(ReactiveQuotesHandler handler) {
		return route(GET("/api/quotes").and(accept(APPLICATION_STREAM_JSON)),
				handler::streamQuotes
		).andRoute(GET("/api/quotes").and(accept(TEXT_EVENT_STREAM)),
				handler::streamQuotesSSE
		);
	}

	public static void main(String[] args) {
		SpringApplication.run(StreamingDemosLab4Application.class, args);
	}

}
