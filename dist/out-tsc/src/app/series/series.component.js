import { __decorate } from "tslib";
import { Component, ViewChild } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ResultsComponent } from '../results/results.component';
let SeriesComponent = class SeriesComponent {
    constructor() {
        this.items = [
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
        ];
    }
    ScrollToResults(element) {
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
    ScrollAndShowResults() {
        let textinput = document.getElementById("search");
        if (textinput && textinput.value) {
            document.getElementById("resultsComponent")?.style.setProperty("display", "block");
            this.results.loadResults(textinput.value, "series");
            setTimeout(() => this.ScrollToResults(document.getElementById("results")), 3000);
        }
    }
};
__decorate([
    ViewChild(ResultsComponent, { static: false })
], SeriesComponent.prototype, "results", void 0);
SeriesComponent = __decorate([
    Component({
        selector: 'app-series',
        standalone: true,
        imports: [MenubarModule, ButtonModule, InputTextModule, ResultsComponent],
        templateUrl: './series.component.html',
        styleUrl: './series.component.css'
    })
], SeriesComponent);
export { SeriesComponent };
//# sourceMappingURL=series.component.js.map