import { Component } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ResultsComponent } from '../results/results.component';
import { ViewChild } from '@angular/core';
@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [MenubarModule,ButtonModule,InputTextModule,ResultsComponent],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent {
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
    ScrollToResults(element: HTMLElement | null) {
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
  }
    @ViewChild(ResultsComponent, { static: false }) results!: ResultsComponent;
    ScrollAndShowResults() {
      let textinput = document.getElementById("search") as HTMLInputElement;
      if (textinput&& textinput.value) {
        document.getElementById("resultsComponent")?.style.setProperty("display", "");
        this.results.loadResults(textinput.value, "movie");
        setTimeout(() => this.ScrollToResults(document.getElementById("results")), 2500);
        
        }
      }
}
