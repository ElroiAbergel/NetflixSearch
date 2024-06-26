import { __decorate } from "tslib";
import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { CardModule } from 'primeng/card';
let RandomShowsComponent = class RandomShowsComponent {
    onWindowScroll() {
        const elements = document.querySelectorAll('.fade-in-element');
        elements.forEach((element) => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                element.classList.add('in-view');
            }
            else {
                element.classList.remove('in-view');
            }
        });
    }
};
__decorate([
    HostListener('window:scroll', [])
], RandomShowsComponent.prototype, "onWindowScroll", null);
RandomShowsComponent = __decorate([
    Component({
        selector: 'app-random-shows',
        standalone: true,
        imports: [CommonModule, CardModule,],
        templateUrl: './random-shows.component.html',
        styleUrl: './random-shows.component.css',
        animations: [
            trigger('fadeIn', [
                state('void', style({
                    opacity: 0,
                    transform: 'translateY(20px)'
                })),
                transition(':enter', [
                    animate('0.5s ease-in', style({
                        opacity: 1,
                        transform: 'translateY(0)'
                    }))
                ])
            ])
        ]
    })
], RandomShowsComponent);
export { RandomShowsComponent };
//# sourceMappingURL=random-shows.component.js.map