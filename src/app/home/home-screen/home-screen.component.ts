import { Component } from '@angular/core';
import { Button } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { RandomShowsComponent } from './random-shows/random-shows.component';

@Component({
  selector: 'app-home-screen',
  standalone: true,
  imports: [MenubarModule , Button,RandomShowsComponent],
  templateUrl: './home-screen.component.html',
  styleUrl: './home-screen.component.css'
})
export class HomeScreenComponent {
  items: any = [
    {
      label: 'Home',
      icon: 'pi pi-fw pi-home',
      url: '/'
    },
    {
      label: 'Series',
      icon: 'pi pi-fw pi-desktop',
      url: '/series'
    },
    {
      label: 'Movies',
      icon: 'pi pi-fw pi-video ',
      url: '/movies'
    }
  ]
}
