import { Component, Input } from '@angular/core';
import { Button } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { ResultsComponent } from '../results/results.component';
import { ViewChild } from '@angular/core';
@Component({
  selector: 'app-nav-and-background',
  standalone: true,
  imports: [Button, MenubarModule, ResultsComponent],
  templateUrl: './nav-and-background.component.html',
  styleUrl: './nav-and-background.component.css'
})
export class NavAndBackgroundComponent {
  @Input("TypeOfScreen")
  TypeOfScreen!: string;
  @Input("TypeOfSearch")
  TypeOfSearch!: string;
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
    if (textinput && textinput.value) {
      document.getElementById("resultsComponent")?.style.setProperty("display", "");
      if (this.TypeOfSearch === "series")
        this.results.loadResults(textinput.value, "series");
      else if (this.TypeOfSearch === "movie")
        this.results.loadResults(textinput.value, "movie");
      else console.log("Error: TypeOfSearch is not set");
      setTimeout(() => this.ScrollToResults(document.getElementById("results")), 2500);
    }
  }
}
