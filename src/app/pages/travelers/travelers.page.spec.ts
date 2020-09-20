import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TravelersPage } from './travelers.page';

describe('TravelersPage', () => {
  let component: TravelersPage;
  let fixture: ComponentFixture<TravelersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TravelersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
