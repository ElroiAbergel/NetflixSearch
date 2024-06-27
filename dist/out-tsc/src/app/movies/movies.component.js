import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ResultsComponent } from '../results/results.component';
import { ViewChild } from '@angular/core';
let MoviesComponent = class MoviesComponent {
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
            document.getElementById("resultsComponent")?.style.setProperty("display", "");
            this.results.loadResults(textinput.value, "movie");
            setTimeout(() => this.ScrollToResults(document.getElementById("results")), 2500);
        }
    }
};
__decorate([
    ViewChild(ResultsComponent, { static: false })
], MoviesComponent.prototype, "results", void 0);
MoviesComponent = __decorate([
    Component({
        selector: 'app-movies',
        standalone: true,
        imports: [MenubarModule, ButtonModule, InputTextModule, ResultsComponent],
        templateUrl: './movies.component.html',
        styleUrl: './movies.component.css'
    })
], MoviesComponent);
export { MoviesComponent };
//# sourceMappingURL=movies.component.js.map