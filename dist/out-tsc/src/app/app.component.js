import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import { CardModule } from 'primeng/card';
import { DockModule } from 'primeng/dock';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { ChartModule } from 'primeng/chart';
import { HomeComponent } from './home/home.component';
let AppComponent = class AppComponent {
    constructor() {
        this.title = 'Netflix';
    }
};
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        standalone: true,
        imports: [RouterOutlet, MenubarModule, CardModule, DockModule, CommonModule, ButtonModule, ChartModule, HomeComponent],
        templateUrl: 'app.component.html',
        styleUrl: './app.component.css',
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map