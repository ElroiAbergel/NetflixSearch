import { __decorate } from "tslib";
import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { CardModule } from 'primeng/card';
let ResultsComponent = class ResultsComponent {
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
], ResultsComponent.prototype, "onWindowScroll", null);
ResultsComponent = __decorate([
    Component({
        selector: 'app-results',
        standalone: true,
        imports: [CommonModule, CardModule,],
        templateUrl: './results.component.html',
        styleUrl: './results.component.css',
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
], ResultsComponent);
export { ResultsComponent };
//# sourceMappingURL=results.component.js.map