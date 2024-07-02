import { Component} from '@angular/core';
import { Button } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { ResultsComponent } from '../results/results.component';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-nav-and-background',
  standalone: true,
  imports: [Button, MenubarModule, ResultsComponent,RouterLink],
  templateUrl: './nav-and-background.component.html',
  styleUrl: './nav-and-background.component.css'
})
export class NavAndBackgroundComponent {
  items: any = [
    {
      label: 'Home',
      icon: 'pi pi-fw pi-home',
      routerLink: '/'
    },
    {
      label: 'Series',
      icon: 'pi pi-fw pi-desktop',
      routerLink: '/series'
    },
    {
      label: 'Movies',
      icon: 'pi pi-fw pi-video ',
      routerLink: '/movies'
    }
  ]
}
