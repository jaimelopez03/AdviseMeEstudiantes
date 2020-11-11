import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ControlPanelPage } from './control-panel.page';

describe('ControlPanelPage', () => {
  let component: ControlPanelPage;
  let fixture: ComponentFixture<ControlPanelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlPanelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ControlPanelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
