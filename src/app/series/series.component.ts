import { Component } from '@angular/core';
import { NavAndBackgroundComponent } from '../nav-and-background/nav-and-background.component';
import { ResultsComponent } from '../results/results.component';
import { Button } from 'primeng/button';
import { ViewChild } from '@angular/core';
@Component({
  selector: 'app-series',
  standalone: true,
  imports: [NavAndBackgroundComponent,ResultsComponent,Button],
  templateUrl: './series.component.html',
  styleUrl: './series.component.css'
})
export class SeriesComponent {
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
        this.results.loadResults(textinput.value, "series");
      setTimeout(() => this.ScrollToResults(document.getElementById("results")), 2500);
    }
  }


}
