import { Routes } from '@angular/router';
import { HomeComponent } from './Routing-components/home/home.component';
import { SeriesComponent } from './Routing-components/series/series.component';
import { MoviesComponent } from './Routing-components/movies/movies.component';
export const routes: Routes = [
  { 'path': '', component: HomeComponent } ,
  { 'path': 'series', component: SeriesComponent } ,
  { 'path': 'movies', component: MoviesComponent } ,
];