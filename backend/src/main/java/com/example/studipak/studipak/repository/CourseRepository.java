package com.example.studipak.studipak.repository;

import com.example.studipak.studipak.model.Course;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface CourseRepository extends MongoRepository<Course, String> {
}
