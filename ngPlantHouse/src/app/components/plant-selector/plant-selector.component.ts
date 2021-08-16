import { Component, OnInit } from '@angular/core';
import { ChosenPlant } from 'src/app/models/chosen-plant';
import { Plant } from 'src/app/models/plant';
import { PlantService } from 'src/app/services/plant.service';


@Component({
  selector: 'app-plant-selector',
  templateUrl: './plant-selector.component.html',
  styleUrls: ['./plant-selector.component.css']
})
export class PlantSelectorComponent implements OnInit {

  plants: Plant[] = [];

  chosenPlants: ChosenPlant[] = [];

  plantTotalAmt: number = 0;

  detailPlant: Plant | null = null;

  constructor(private plantService: PlantService) { }

  ngOnInit(): void {
    this.loadPlants();
  }

  loadPlants(){
    this.plantService.index().subscribe(
      plants => {
        this.plants = plants;
      },
      noPlants => {
        console.error('PlantListComponent.laodPlants(): error retrieving list of plants');
        console.error(noPlants);
      }
    );
  }

  selectedPlants(plant: Plant){

    let selectedPlant = new ChosenPlant();
    selectedPlant.plant = plant;
    let allPlants: Plant[] = [];

    for(let i=0; i<this.chosenPlants.length; i++){
      allPlants.push(this.chosenPlants[i].plant);
    }

    if(! allPlants.includes(selectedPlant.plant)){
      this.chosenPlants.push(selectedPlant);
    }
    else{
      for(let i=0; i<this.chosenPlants.length; i++){
        if(allPlants[i] == plant){
          this.chosenPlants.splice(i, 1);
        }
      }
    }
    console.log(this.chosenPlants.length);
  }

  calculate(){
    this.plantService.setNumPlants(this.getTotalNumPlants());
    this.plantService.setChosenPlants(this.chosenPlants);
  }

  getTotalNumPlants(): number{
    for(let i=0; i<this.chosenPlants.length; i++){
      this.plantTotalAmt += this.chosenPlants[i].amount;
    }
    return this.plantTotalAmt;
  }

  plantDetails(plant: Plant){
    this.detailPlant = plant;
  }

  resetDetailPlant(){
    this.detailPlant = null;
  }

}
