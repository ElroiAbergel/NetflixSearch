import { Component } from '@angular/core';
import { NavAndBackgroundComponent } from '../../nav-and-background/nav-and-background.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavAndBackgroundComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
title = 'Home';
}
