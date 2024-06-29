import { Component } from '@angular/core';
import { NavAndBackgroundComponent } from '../../nav-and-background/nav-and-background.component';
@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [NavAndBackgroundComponent],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent {
  title = 'Movies';

}
