import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { NetflixDataModel } from '../../Models/NetflixData.model';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-results',
  standalone: true,
  imports: [CommonModule, CardModule,FormsModule],
  templateUrl: './results.component.html',
  styleUrl: './results.component.css',
})
export class ResultsComponent {
  data: NetflixDataModel[] = [];
  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  loadResults(Search: string | null | undefined, TypeofSearch: string) {
    if (isPlatformBrowser(this.platformId)) {
      const ResultsDiv = document.getElementById("ResultsShowsDiv");
      if (ResultsDiv) {
        if (TypeofSearch.toLowerCase() === "movie") {
          fetch(`http://localhost:3000/netflix/movie?title=${Search}`)
            .then(response => {
              return response.json();
            })
            .then(res => {
              for (let resultData of res)  this.data.push({ title: resultData.title, type: resultData.type, listed_in: resultData.listed_in, Image_URL: resultData.Image_URL });
              
            })
            .catch(error => {
              console.log(error);
            });
        } else if (TypeofSearch.toLowerCase() === "series") {
          fetch(`http://localhost:3000/netflix/series?title=${Search}`)
            .then(response => {
              return response.json();
            })
            .then(res => {
              for (let resultData of res)  this.data.push({ title: resultData.title, type: resultData.type, listed_in: resultData.listed_in, Image_URL: resultData.Image_URL });
            
            })
            .catch(error => {
              console.log(error);
            });
        }
      }
    }
  }
}
