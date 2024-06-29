import { TestBed } from '@angular/core/testing';
import { NavAndBackgroundComponent } from './nav-and-background.component';
describe('NavAndBackgroundComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [NavAndBackgroundComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(NavAndBackgroundComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=nav-and-background.component.spec.js.map