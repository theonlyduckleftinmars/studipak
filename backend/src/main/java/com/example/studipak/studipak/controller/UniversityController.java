package com.example.studipak.studipak.controller;

import com.example.studipak.studipak.model.University;
import com.example.studipak.studipak.service.UniversityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/universities")
public class UniversityController {

    @Autowired
    private UniversityService universityService;

    @GetMapping
    public List<University> getAllUniversities() {
        return universityService.getAllUniversities();
    }

    @GetMapping("/{id}")
    public University getUniversityById(@PathVariable String id) {
        return universityService.getUniversityById(id);
    }

    @PostMapping
    public University createUniversity(@RequestBody University university) {
        return universityService.saveUniversity(university);
    }

    @DeleteMapping("/{id}")
    public void deleteUniversity(@PathVariable String id) {
        universityService.deleteUniversity(id);
    }
}
