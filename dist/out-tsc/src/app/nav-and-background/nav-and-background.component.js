import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { Button } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { RandomShowsComponent } from '../home/home-screen/random-shows/random-shows.component';
let NavAndBackgroundComponent = class NavAndBackgroundComponent {
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
};
__decorate([
    Input()
], NavAndBackgroundComponent.prototype, "TypeOfScreen", void 0);
NavAndBackgroundComponent = __decorate([
    Component({
        selector: 'app-nav-and-background',
        standalone: true,
        imports: [Button, RandomShowsComponent, MenubarModule],
        templateUrl: './nav-and-background.component.html',
        styleUrl: './nav-and-background.component.css'
    })
], NavAndBackgroundComponent);
export { NavAndBackgroundComponent };
//# sourceMappingURL=nav-and-background.component.js.map