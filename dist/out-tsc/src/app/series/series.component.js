import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ResultsComponent } from '../results/results.component';
let SeriesComponent = class SeriesComponent {
    constructor(viewportScroller) {
        this.viewportScroller = viewportScroller;
        this.items = [
            {
                label: 'Home',
                icon: 'pi pi-fw pi-home',
                url: '/'
            },
            {
                label: 'Series',
                icon: 'pi pi-fw pi-search',
                url: '/series'
            },
            {
                label: 'Movies',
                icon: 'pi pi-fw pi-video ',
                url: '/movies'
            }
        ];
    }
    scrollresults() {
        this.viewportScroller.scrollToAnchor("results");
    }
};
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