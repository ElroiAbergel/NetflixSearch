import { TestBed } from '@angular/core/testing';
import { RandomShowsComponent } from './random-shows.component';
describe('RandomShowsComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [RandomShowsComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(RandomShowsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=random-shows.component.spec.js.map