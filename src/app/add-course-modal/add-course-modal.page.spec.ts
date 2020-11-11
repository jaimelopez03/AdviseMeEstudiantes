import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddCourseModalPage } from './add-course-modal.page';

describe('AddCourseModalPage', () => {
  let component: AddCourseModalPage;
  let fixture: ComponentFixture<AddCourseModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCourseModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddCourseModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
