import { TestBed } from '@angular/core/testing';
import { SeriesComponent } from './series.component';
describe('SeriesComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [SeriesComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(SeriesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=series.component.spec.js.map