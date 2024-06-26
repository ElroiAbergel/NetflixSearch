import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { HomeScreenComponent } from './home-screen/home-screen.component';
let HomeComponent = class HomeComponent {
    constructor() {
        this.title = 'Home';
    }
};
HomeComponent = __decorate([
    Component({
        selector: 'app-home',
        standalone: true,
        imports: [HomeScreenComponent],
        templateUrl: './home.component.html',
        styleUrl: './home.component.css'
    })
], HomeComponent);
export { HomeComponent };
//# sourceMappingURL=home.component.js.map