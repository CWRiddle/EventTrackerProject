package com.skilldistillery.plants.controllers;

import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.plants.entities.Plant;
import com.skilldistillery.plants.services.PlantService;

@RequestMapping("api")
@RestController
public class PlantController {

	@Autowired
	private PlantService pService;
	
	@GetMapping("plants")
	public List<Plant> listPlants(){
		return pService.allPlants();
	}
	
	@GetMapping(path="plants/{id}")
	public Plant findById(@PathVariable int id, HttpServletResponse resp) {
		Plant plant = pService.findById(id);
		if(plant == null) {
			resp.setStatus(404);
		}
		return plant;
	}
	
	@PostMapping(path="plants")
	public Plant create(@RequestBody Plant plant, HttpServletResponse resp) {
		return pService.create(plant);
	}
	
	@PutMapping(path="plants")
	public Plant update(@RequestBody Plant plant) {
		return pService.update(plant);
	}
	
	@DeleteMapping(path="plants/{id}")
	public boolean delete(@PathVariable int id) {
		return pService.delete(id);
	}
	
}
