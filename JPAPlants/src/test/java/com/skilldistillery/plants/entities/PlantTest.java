package com.skilldistillery.plants.entities;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class PlantTest {

	private static EntityManagerFactory emf;
	private EntityManager em;
	private Plant plant;
	
	@BeforeAll
	static void setUpBeforeClass() throws Exception {
		emf = Persistence.createEntityManagerFactory("JPAPlants");
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
		emf.close();
	}

	@BeforeEach
	void setUp() throws Exception {
		em = emf.createEntityManager();
		plant = em.find(Plant.class, 1);
	}

	@AfterEach
	void tearDown() throws Exception {
		em.close();
		plant = null;
	}

	@Test
	@DisplayName("test Plant entity mapping")
	void test() {
		assertNotNull(plant);
		assertEquals("Broccoli", plant.getName());
		assertEquals(75, plant.getMaxTemp());
		assertEquals(65, plant.getMinTemp());
		assertEquals(48, plant.getMaxHeight());
		assertEquals(18, plant.getMinHeight());
		assertEquals(100, plant.getMaxHarvestDays());
		assertEquals(80, plant.getMinHarvestDays());
		assertEquals(1.5, plant.getMaxInchesWaterPerWeek());
		assertEquals(1, plant.getMinInchesWaterPerWeek());
		assertEquals(20, plant.getMaxRootDepth());
		assertEquals(13, plant.getMinRootDepth());
		assertEquals(7.0, plant.getMaxSoilPh());
		assertEquals(6.0, plant.getMinSoilPh());
		assertEquals(10, plant.getMaxSunlightHours());
		assertEquals(8, plant.getMinSunlightHours());
		assertEquals(24, plant.getMaxPlantDistance());
		assertEquals(12, plant.getMinPlantDistance());
	}

}
