import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SocorroComponent } from './socorro.component';

describe('SocorroComponent', () => {
  let component: SocorroComponent;
  let fixture: ComponentFixture<SocorroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocorroComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SocorroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
