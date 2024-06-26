import { TestBed } from '@angular/core/testing';
import { ResultsComponent } from './results.component';
describe('ResultsComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ResultsComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(ResultsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=results.component.spec.js.map