import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ArrowBackComponent } from './arrow-back.component';

describe('ArrowBackComponent', () => {
  let component: ArrowBackComponent;
  let fixture: ComponentFixture<ArrowBackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrowBackComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ArrowBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
