import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GeneratePetitionModalPage } from './generate-petition-modal.page';

describe('GeneratePetitionModalPage', () => {
  let component: GeneratePetitionModalPage;
  let fixture: ComponentFixture<GeneratePetitionModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneratePetitionModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GeneratePetitionModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
