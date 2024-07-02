import { Component } from '@angular/core';
import { NavAndBackgroundComponent } from '../nav-and-background/nav-and-background.component';
import { ResultsComponent } from '../results/results.component';
import { Button } from 'primeng/button';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavAndBackgroundComponent,ResultsComponent,Button,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
title = 'Home';
}
