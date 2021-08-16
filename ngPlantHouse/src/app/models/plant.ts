export class Plant {

  id: number;
  name: string;
  maxTemp: number;
  minTemp: number;
  maxHeight: number;
  minHeight: number;
  maxHarvestDays: number;
  minHarvestDays: number;
  maxInchesWaterPerWeek: number;
  minInchesWaterPerWeek: number;
  maxRootDepth: number;
  minRootDepth: number;
  maxSoilPh: number;
  minSoilPh: number;
  maxSunlightHours: number;
  minSunlightHours: number;
  maxPlantDistance: number;
  minPlantDistance: number;

  selected: boolean;



  constructor(
    id: number = 0,
    name: string = '',
    maxTemp: number = 0,
    minTemp: number = 0,
    maxHeight: number = 0,
    minHeight: number = 0,
    maxHarvestDays: number = 0,
    minHarvestDays: number = 0,
    maxInchesWaterPerWeek: number = 0,
    minInchesWaterPerWeek: number = 0,
    maxRootDepth: number = 0,
    minRootDepth: number = 0,
    maxSoilPh: number = 0,
    minSoilPh: number = 0,
    maxSunlightHours: number = 0,
    minSunlightHours: number = 0,
    maxPlantDistance: number = 0,
    minPlantDistance: number = 0,
    selected: boolean = false

  ){
    this.id = id;
    this.name = name;
    this.maxTemp = maxTemp;
    this.minTemp = minTemp;
    this.maxHeight = maxHeight;
    this.minHeight = minHeight;
    this.maxHarvestDays = maxHarvestDays;
    this.minHarvestDays = minHarvestDays;
    this.maxInchesWaterPerWeek = maxInchesWaterPerWeek;
    this.minInchesWaterPerWeek = minInchesWaterPerWeek;
    this.maxRootDepth = maxRootDepth;
    this.minRootDepth = minRootDepth;
    this.maxSoilPh = maxSoilPh;
    this.minSoilPh = minSoilPh;
    this.maxSunlightHours = maxSunlightHours;
    this.minSunlightHours = minSunlightHours;
    this.maxPlantDistance = maxPlantDistance;
    this.minPlantDistance = minPlantDistance;

    this.selected = selected;
  }

}

//{ "id": 4, "name": "Black Apple Celery Cabbage", "maxTemp": 34, "minTemp": 12, "maxHeight": 48, "minHeight": 18, "maxHarvestDays": 100, "minHarvestDays": 80, "maxInchesWaterPerWeek": 1.5, "minInchesWaterPerWeek": 1, "maxRootDepth": 20, "minRootDepth": 13, "maxSoilPh": 7, "minSoilPh": 6, "maxSunlightHours": 10, "minSunlightHours": 8, "maxPlantDistance": 24, "minPlantDistance": 12 }
