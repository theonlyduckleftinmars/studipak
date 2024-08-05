package com.example.studipak.studipak.repository;

import com.example.studipak.studipak.model.University;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UniversityRepository extends MongoRepository<University, String> {
}
