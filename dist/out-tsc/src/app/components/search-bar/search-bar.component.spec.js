import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { SearchBarComponent } from './search-bar.component';
describe('SearchBarComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SearchBarComponent],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(SearchBarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=search-bar.component.spec.js.map