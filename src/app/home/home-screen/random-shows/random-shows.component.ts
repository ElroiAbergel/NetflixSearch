import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import {NetflixDataModel} from '../../../../Models/NetflixData.model';
@Component({
  selector: 'app-random-shows',
  standalone: true,
  imports: [CommonModule, CardModule,],
  templateUrl: './random-shows.component.html',
  styleUrl: './random-shows.component.css',
}) export class RandomShowsComponent {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  data: NetflixDataModel[] = [];
  ngOnInit() {
    this.loadRandom();
  }
  loadRandom() {
    if (isPlatformBrowser(this.platformId)) {
      const RandomDiv = document.getElementById("RandomShowsDiv");
    if (RandomDiv) {
      fetch("http://localhost:3000/netflix/random")
        .then(response => {
          return response.json();
        })
        .then(res => {
          for (let resultData of res) this.data.push({ title: resultData.title, type: resultData.type, listed_in: resultData.listed_in, Image_URL: resultData.Image_URL });

        })
        .catch(error => {
          console.log(error);
        });
    }
  }
}
}

