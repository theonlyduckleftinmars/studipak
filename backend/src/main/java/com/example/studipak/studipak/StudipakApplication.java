package com.example.studipak.studipak;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@SpringBootApplication
@EnableMongoRepositories
public class StudipakApplication {

	public static void main(String[] args) {
		SpringApplication.run(StudipakApplication.class, args);
	}

}
