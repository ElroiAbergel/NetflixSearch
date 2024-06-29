import { __decorate, __param } from "tslib";
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { FormsModule } from '@angular/forms';
let ResultsComponent = class ResultsComponent {
    constructor(platformId) {
        this.platformId = platformId;
        this.data = [];
    }
    loadResults(Search, TypeofSearch) {
        if (isPlatformBrowser(this.platformId)) {
            const ResultsDiv = document.getElementById("ResultsShowsDiv");
            if (ResultsDiv) {
                if (TypeofSearch.toLowerCase() === "movie") {
                    fetch(`http://localhost:3000/netflix/movie?title=${Search}`)
                        .then(response => {
                        return response.json();
                    })
                        .then(res => {
                        for (let resultData of res)
                            this.data.push({ title: resultData.title, type: resultData.type, listed_in: resultData.listed_in, Image_URL: resultData.Image_URL });
                    })
                        .catch(error => {
                        console.log(error);
                    });
                }
                else if (TypeofSearch.toLowerCase() === "series") {
                    fetch(`http://localhost:3000/netflix/series?title=${Search}`)
                        .then(response => {
                        return response.json();
                    })
                        .then(res => {
                        for (let resultData of res)
                            this.data.push({ title: resultData.title, type: resultData.type, listed_in: resultData.listed_in, Image_URL: resultData.Image_URL });
                    })
                        .catch(error => {
                        console.log(error);
                    });
                }
            }
        }
    }
};
ResultsComponent = __decorate([
    Component({
        selector: 'app-results',
        standalone: true,
        imports: [CommonModule, CardModule, FormsModule],
        templateUrl: './results.component.html',
        styleUrl: './results.component.css',
    }),
    __param(0, Inject(PLATFORM_ID))
], ResultsComponent);
export { ResultsComponent };
//# sourceMappingURL=results.component.js.map