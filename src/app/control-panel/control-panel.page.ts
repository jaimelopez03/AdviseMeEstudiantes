import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../services/courses.service';
import { ModalController, MenuController } from '@ionic/angular';
import { AddCourseModalPage } from '../add-course-modal/add-course-modal.page';
import { AuthService } from '../services/auth.service';
import { ShowStudentsPage } from '../show-students/show-students.page';
import { GeneratePetitionModalPage } from '../generate-petition-modal/generate-petition-modal.page';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.page.html',
  styleUrls: ['./control-panel.page.scss'],
})
export class ControlPanelPage implements OnInit {

  constructor(private courseService : CoursesService,
              private modalCtrl : ModalController,
              private authService : AuthService,
              private menu : MenuController) { }

  myCourses = []
  user: any
  

  ngOnInit() {
    this.getCourses()
    console.log(this.authService.GetID())
    this.authService.user$.subscribe((user) => {
      this.user = user;
    });
  }

  private getCourses() {
    this.courseService.getCoursesByUser(this.authService.GetID()).subscribe((course) => {
      this.myCourses = course
    })
  }

  async openAddModal(){
    const modal = await this.modalCtrl.create({
      component: AddCourseModalPage
    });
    await modal.present();
  }

  async generatePetition(index) {
    const modal = await this.modalCtrl.create({
      component: GeneratePetitionModalPage
    });
    await modal.present();
  }

  remove(index) {
    this.courseService.deleteCourse(this.myCourses[index].courseID)
  }

  async enrolled(index) {
    const modal = await this.modalCtrl.create({
      component: ShowStudentsPage
    });
    await modal.present();
  }
  
  optOut(item: any) {
    item.Enrolled.forEach(element => {
       if(this.authService.GetID() === element){
         item.Enrolled.splice(item.Enrolled.indexOf(element),1); 
       }
     });
    this.courseService.updateCourse(item.courseID, item)
  }

}
