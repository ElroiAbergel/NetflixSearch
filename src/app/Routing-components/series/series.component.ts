import { Component } from '@angular/core';
import { NavAndBackgroundComponent } from '../../nav-and-background/nav-and-background.component';
@Component({
  selector: 'app-series',
  standalone: true,
  imports: [NavAndBackgroundComponent],
  templateUrl: './series.component.html',
  styleUrl: './series.component.css'
})
export class SeriesComponent {
  title = 'Series';

}
