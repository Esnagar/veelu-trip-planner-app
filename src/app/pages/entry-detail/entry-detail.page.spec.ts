import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EntryDetailPage } from './entry-detail.page';

describe('EntryDetailPage', () => {
  let component: EntryDetailPage;
  let fixture: ComponentFixture<EntryDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntryDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EntryDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
