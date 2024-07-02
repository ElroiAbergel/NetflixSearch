import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SeriesComponent } from './series/series.component';
import { MoviesComponent } from './movies/movies.component';
export const routes: Routes = [
  { 'path': '', component: HomeComponent } ,
  { 'path': 'series', component: SeriesComponent } ,
  { 'path': 'movies', component: MoviesComponent } ,
];