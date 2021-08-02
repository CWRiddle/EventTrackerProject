package com.skilldistillery.plants.services;

import java.util.List;

import com.skilldistillery.plants.entities.Plant;


public interface PlantService {

	List<Plant> allPlants();
	Plant findById(int id);
	Plant create(Plant plant);
	Plant update(Plant plant);
	boolean delete(int id);
	
}
