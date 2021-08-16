import { Component, OnInit } from '@angular/core';
import { Plant } from 'src/app/models/plant';
import { PlantService } from 'src/app/services/plant.service';

@Component({
  selector: 'app-plant-list',
  templateUrl: './plant-list.component.html',
  styleUrls: ['./plant-list.component.css']
})
export class PlantListComponent implements OnInit {

  plants: Plant[] = [];

  newPlant: Plant = new Plant();

  editPlant: Plant | null = null;

  constructor(
    private plantService: PlantService
  ) { }

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

  addPlant(): void{
    this.plantService.create(this.newPlant).subscribe(
      data => {
        this.reload();
      },
      error => {
        console.log(error);
        console.log("Error creating plant through service");
      }
    );
    this.newPlant = new Plant();
  }

  editPlantInfo(plant: Plant): void{
    this.editPlant = Object.assign({}, plant);
  }

  updatePlant(plant: Plant): void{
    this.plantService.update(plant).subscribe(
      data => {
        this.reload();
      },
      error => {
        console.log(error);
        console.log("Error updating plant through service");
      }
    );
    this.editPlant = null;
  }

  deletePlant(id: number){
    this.plantService.destroy(id).subscribe(
      data => {
        this.reload();
      },
      error => {
        console.log(error);
        console.log("error deleting plant through service")
      }
    );
    // this.todos = this.todoService.index();
  }

  reload(): void{
    this.plantService.index().subscribe(
      data => {
        this.plants = data;
      },
      err => {
        console.log("Error retrieving plants")
      }
    );
  }
}
