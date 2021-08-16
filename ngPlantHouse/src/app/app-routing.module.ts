import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PlantListComponent } from './components/plant-list/plant-list.component';
import { PlantSelectorComponent } from './components/plant-selector/plant-selector.component';
import { ResultsPageComponent } from './components/results-page/results-page.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'plants', component: PlantListComponent},
  { path: 'plantSelector', component: PlantSelectorComponent},
  { path: 'resultsPage', component: ResultsPageComponent},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
