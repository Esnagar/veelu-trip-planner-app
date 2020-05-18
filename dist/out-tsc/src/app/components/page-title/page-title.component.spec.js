/* tslint:disable:no-unused-variable */
import { async, TestBed } from '@angular/core/testing';
import { PageTitleComponent } from './page-title.component';
describe('PageTitleComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PageTitleComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(PageTitleComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=page-title.component.spec.js.map