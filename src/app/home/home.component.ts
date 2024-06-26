import { Component } from '@angular/core';
import { HomeScreenComponent } from './home-screen/home-screen.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomeScreenComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
title = 'Home';
}
