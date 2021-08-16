import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlantService } from './services/plant.service';
import { PlantListComponent } from './components/plant-list/plant-list.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PlantSelectorComponent } from './components/plant-selector/plant-selector.component';
import { ResultsPageComponent } from './components/results-page/results-page.component';

@NgModule({
  declarations: [
    AppComponent,
    PlantListComponent,
    NavBarComponent,
    HomeComponent,
    NotFoundComponent,
    PlantSelectorComponent,
    ResultsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    PlantService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
