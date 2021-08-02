package com.skilldistillery.plants.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.plants.entities.Plant;

public interface PlantRepository extends JpaRepository<Plant, Integer>{

}
