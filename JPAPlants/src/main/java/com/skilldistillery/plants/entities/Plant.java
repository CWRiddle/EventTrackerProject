package com.skilldistillery.plants.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Plant {

	///////////
	// Fields
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	private String name;
	
	@Column(name = "max_temperature")
	private int maxTemp;
	
	@Column(name = "min_temperature")
	private int minTemp;
	
	@Column(name = "max_grow_height_inches")
	private int maxHeight;
	
	@Column(name = "min_grow_height_inches")
	private int minHeight;
	
	@Column(name = "max_days_to_harvest")
	private int maxHarvestDays;
	
	@Column(name = "min_days_to_harvest")
	private int minHarvestDays;
	
	@Column(name = "max_inches_water_per_week")
	private double maxInchesWaterPerWeek;
	
	@Column(name = "min_inches_water_per_week")
	private double minInchesWaterPerWeek;
	
	@Column(name = "max_root_depth_inches")
	private int maxRootDepth;
	
	@Column(name = "min_root_depth_inches")
	private int minRootDepth;
	
	@Column(name = "max_soil_ph")
	private double maxSoilPh;
	
	@Column(name = "min_soil_ph")
	private double minSoilPh;
	
	@Column(name = "max_hours_sunlight")
	private int maxSunlightHours;
	
	@Column(name = "min_hours_sunlight")
	private int minSunlightHours;
	
	@Column(name = "max_inches_plant_distance")
	private int maxPlantDistance;
	
	@Column(name = "min_inches_plant_distance")
	private int minPlantDistance;

	////////////
	// Methods
	
	public Plant() {
		super();
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getMaxTemp() {
		return maxTemp;
	}

	public void setMaxTemp(int maxTemp) {
		this.maxTemp = maxTemp;
	}

	public int getMinTemp() {
		return minTemp;
	}

	public void setMinTemp(int minTemp) {
		this.minTemp = minTemp;
	}

	public int getMaxHeight() {
		return maxHeight;
	}

	public void setMaxHeight(int maxHeight) {
		this.maxHeight = maxHeight;
	}

	public int getMinHeight() {
		return minHeight;
	}

	public void setMinHeight(int minHeight) {
		this.minHeight = minHeight;
	}

	public int getMaxHarvestDays() {
		return maxHarvestDays;
	}

	public void setMaxHarvestDays(int maxHarvestDays) {
		this.maxHarvestDays = maxHarvestDays;
	}

	public int getMinHarvestDays() {
		return minHarvestDays;
	}

	public void setMinHarvestDays(int minHarvestDays) {
		this.minHarvestDays = minHarvestDays;
	}

	public double getMaxInchesWaterPerWeek() {
		return maxInchesWaterPerWeek;
	}

	public void setMaxInchesWaterPerWeek(double maxInchesWaterPerWeek) {
		this.maxInchesWaterPerWeek = maxInchesWaterPerWeek;
	}

	public double getMinInchesWaterPerWeek() {
		return minInchesWaterPerWeek;
	}

	public void setMinInchesWaterPerWeek(double minInchesWaterPerWeek) {
		this.minInchesWaterPerWeek = minInchesWaterPerWeek;
	}

	public int getMaxRootDepth() {
		return maxRootDepth;
	}

	public void setMaxRootDepth(int maxRootDepth) {
		this.maxRootDepth = maxRootDepth;
	}

	public int getMinRootDepth() {
		return minRootDepth;
	}

	public void setMinRootDepth(int minRootDepth) {
		this.minRootDepth = minRootDepth;
	}

	public double getMaxSoilPh() {
		return maxSoilPh;
	}

	public void setMaxSoilPh(double maxSoilPh) {
		this.maxSoilPh = maxSoilPh;
	}

	public double getMinSoilPh() {
		return minSoilPh;
	}

	public void setMinSoilPh(double minSoilPh) {
		this.minSoilPh = minSoilPh;
	}

	public int getMaxSunlightHours() {
		return maxSunlightHours;
	}

	public void setMaxSunlightHours(int maxSunlightHours) {
		this.maxSunlightHours = maxSunlightHours;
	}

	public int getMinSunlightHours() {
		return minSunlightHours;
	}

	public void setMinSunlightHours(int minSunlightHours) {
		this.minSunlightHours = minSunlightHours;
	}

	public int getMaxPlantDistance() {
		return maxPlantDistance;
	}

	public void setMaxPlantDistance(int maxPlantDistance) {
		this.maxPlantDistance = maxPlantDistance;
	}

	public int getMinPlantDistance() {
		return minPlantDistance;
	}

	public void setMinPlantDistance(int minPlantDistance) {
		this.minPlantDistance = minPlantDistance;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + id;
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Plant other = (Plant) obj;
		if (id != other.id)
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "Plant [id=" + id + ", name=" + name + ", maxTemp=" + maxTemp + ", minTemp=" + minTemp + ", maxHeight="
				+ maxHeight + ", minHeight=" + minHeight + ", maxHarvestDays=" + maxHarvestDays + ", minHarvestDays="
				+ minHarvestDays + ", maxInchesWaterPerWeek=" + maxInchesWaterPerWeek + ", minInchesWaterPerWeek="
				+ minInchesWaterPerWeek + ", maxRootDepth=" + maxRootDepth + ", minRootDepth=" + minRootDepth
				+ ", maxSoilPh=" + maxSoilPh + ", minSoilPh=" + minSoilPh + ", maxSunlightHours=" + maxSunlightHours
				+ ", minSunlightHours=" + minSunlightHours + ", maxPlantDistance=" + maxPlantDistance
				+ ", minPlantDistance=" + minPlantDistance + "]";
	}

	
}
