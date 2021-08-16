import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Plant } from '../models/plant';
import { catchError } from 'rxjs/operators';
import { ChosenPlant } from '../models/chosen-plant';

@Injectable({
  providedIn: 'root'
})
export class PlantService {

  baseUrl = 'http://localhost:8084/'
  url = this.baseUrl + 'api/plants';

  constructor(
    private http: HttpClient
  ) { }

  index(): Observable<Plant[]>{

    return this.http.get<Plant[]>(this.url).pipe(
      catchError((err: any) => {
        console.error("PlantService.index(): error retrieving plants list");
        return throwError(err);
      })
    );
  }

  show(plantId: any): Observable<Plant> {
    return this.http.get<Plant>(`${this.url}/${plantId}`, this.getHttpOptions()).pipe(
      catchError((err: any) => {
        console.error('TodoService.show(): error retrieving todo id ' + plantId);
        return throwError(err);
      })
    );
  }

  create(plant: Plant): Observable<Plant>{
    return this.http.post<Plant>(this.url, plant, this.getHttpOptions()).pipe(
      catchError((err: any) => {
        console.error('TodoService.create(): error creating todo');
        return throwError(err);
      })
    );
  }

  update(plant: Plant){
    return this.http.put<Plant>(this.url, plant, this.getHttpOptions()).pipe(
      catchError((err: any) => {
        console.error('PlantService.update(): error updating plant');
        return throwError(err);
      })
    );
  }

  destroy(id: number){
    return this.http.delete<void>(`${this.url}/${id}`, this.getHttpOptions()).pipe(
      catchError((err: any) => {
        console.error('PlantService.destroy(): error deleting plant');
        return throwError(err);
      })
    );
  }

  getHttpOptions() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
      }),
    };
    return httpOptions;
  }

  /////////////////////////////////////////////////////

  numPlants: number = 0;
  chosenPlants: ChosenPlant[] = [];

  setNumPlants(num: number){
    this.numPlants = num;
  }

  getNumPlants(): number{
    return this.numPlants;
  }

  setChosenPlants(plants: ChosenPlant[]){
    this.chosenPlants = plants;
  }

  getChosenPlants(): ChosenPlant[]{
    return this.chosenPlants;
  }
}
