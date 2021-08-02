package com.skilldistillery.plants.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.plants.entities.Plant;
import com.skilldistillery.plants.repositories.PlantRepository;

@Service
public class PlantsServiceImpl implements PlantService {

	@Autowired
	private PlantRepository repo;
	
	@Override
	public List<Plant> allPlants() {
		return repo.findAll();
	}

	@Override
	public Plant findById(int id) {
		Optional<Plant> plant = repo.findById(id);
		if(plant.isPresent())
			return plant.get();
		else
			return null;
	}

	@Override
	public Plant create(Plant plant) {
		repo.saveAndFlush(plant);
		return plant;
	}

	@Override
	public Plant update(Plant plant) {
		repo.saveAndFlush(plant);
		return plant;
	}

	@Override
	public boolean delete(int id) {
		repo.deleteById(id);
		return !repo.existsById(id);
	}

}
