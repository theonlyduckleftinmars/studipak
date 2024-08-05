package com.example.studipak.studipak.config;

import com.example.studipak.studipak.model.Course;
import com.example.studipak.studipak.model.University;
import com.example.studipak.studipak.repository.CourseRepository;
import com.example.studipak.studipak.repository.UniversityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Component;

@Component
public class DatabaseInitializer {

    @Autowired
    private CourseRepository courseRepository;

    @Autowired
    private UniversityRepository universityRepository;


    @Bean
    CommandLineRunner initDatabase(MongoTemplate mongoTemplate) {
        return args -> {
            // Simple ping to check connection
            mongoTemplate.executeCommand("{ ping: 1 }");
            System.out.println("Pinged your deployment. You successfully connected to MongoDB!");

            // Optionally, create a sample collection
            mongoTemplate.createCollection("sampleCollection");
            System.out.println("Sample collection created.");


            University university = new University();
            university.setName("Example University");
            universityRepository.save(university);

            Course course = new Course();
            course.setTitle("Example Course");
            course.setUniversityId(university.getId());
            courseRepository.save(course);
        };
    }
}
