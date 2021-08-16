import { Plant } from "./plant";

export class ChosenPlant {

  plant: Plant;
  amount: number;

  constructor(
    plant: Plant = new Plant(),
    amount: number = 0
  ){
    this.plant = plant;
    this.amount = amount;
  }

}
