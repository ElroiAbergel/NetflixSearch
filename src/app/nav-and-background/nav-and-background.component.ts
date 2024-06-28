import { Component, Input } from '@angular/core';
import { Button } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { RandomShowsComponent } from '../home/home-screen/random-shows/random-shows.component';
@Component({
  selector: 'app-nav-and-background',
  standalone: true,
  imports: [],
  templateUrl: './nav-and-background.component.html',
  styleUrl: './nav-and-background.component.css'
})
export class NavAndBackgroundComponent {
  @Input()
  TypeOfScreen!: string;
}
