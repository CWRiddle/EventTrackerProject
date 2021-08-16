import { Component, OnInit, Input } from '@angular/core';
import { ChosenPlant } from 'src/app/models/chosen-plant';
import { PlantService } from 'src/app/services/plant.service';
import { PlantSelectorComponent } from '../plant-selector/plant-selector.component';

@Component({
  selector: 'app-results-page',
  templateUrl: './results-page.component.html',
  styleUrls: ['./results-page.component.css']
})
export class ResultsPageComponent implements OnInit {


  totalNumPlants: number = 0;

  plants: ChosenPlant[] = [];

  constructor(private plantService: PlantService) { }

  ngOnInit(): void {
    //this.totalNumPlants = this.plantSelector.getTotalNumPlants();
    this.totalNumPlants = this.plantService.getNumPlants();
    this.plants = this.plantService.getChosenPlants();
    // console.log("Num Plants: " + this.totalNumPlants);
    //this.plantService.setNumPlants(0);
  }

  getMaxPlantBedArea(): number{
    let maxArea = 0;
    for(let i=0; i<this.plants.length; i++){
      maxArea += this.plants[i].plant.maxPlantDistance * this.plants[i].amount;
    }
    return maxArea;
  }

  getMinPlantBedArea(): number{
    let minArea = 0;
    for(let i=0; i<this.plants.length; i++){
      minArea += this.plants[i].plant.minPlantDistance * this.plants[i].amount;
    }
    return minArea;
  }

}
