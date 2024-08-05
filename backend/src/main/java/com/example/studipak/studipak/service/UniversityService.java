package com.example.studipak.studipak.service;

import com.example.studipak.studipak.model.University;
import com.example.studipak.studipak.repository.UniversityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UniversityService {

    @Autowired
    private UniversityRepository universityRepository;

    public List<University> getAllUniversities() {
        return universityRepository.findAll();
    }

    public University getUniversityById(String id) {
        return universityRepository.findById(id).orElse(null);
    }

    public University saveUniversity(University university) {
        return universityRepository.save(university);
    }

    public void deleteUniversity(String id) {
        universityRepository.deleteById(id);
    }
}
