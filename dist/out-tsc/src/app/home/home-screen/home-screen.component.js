import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Button } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { RandomShowsComponent } from './random-shows/random-shows.component';
let HomeScreenComponent = class HomeScreenComponent {
    constructor() {
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
};
HomeScreenComponent = __decorate([
    Component({
        selector: 'app-home-screen',
        standalone: true,
        imports: [MenubarModule, Button, RandomShowsComponent],
        templateUrl: './home-screen.component.html',
        styleUrl: './home-screen.component.css'
    })
], HomeScreenComponent);
export { HomeScreenComponent };
//# sourceMappingURL=home-screen.component.js.map