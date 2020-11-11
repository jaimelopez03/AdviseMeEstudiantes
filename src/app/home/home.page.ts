import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { CoursesService } from '../services/courses.service';
import { FormGroup } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private authService : AuthService,
              private courseService : CoursesService,
              private alertController: AlertController) { }

  courses = []
  user : any;
  searched = []
  searchBox = ""
  subjects = "Todas"

  ngOnInit() {
    console.log(this.authService.GetID())
    this.getCourses();
    this.authService.user$.subscribe((user) => {
      this.user = user;
    });
  }

  getCourses() {
    this.courseService.getCourses().subscribe((item) => {
      this.courses = item;
      this.searched = item;
    });
  }
  enroll2Course(item) {
    const temp = item.Enrolled;
    let exist = false;
    temp.forEach(element => {
      if (element === this.authService.GetID()) {
        exist = true;
      }
    });
    if (exist) {
      this.presentAlert("Error!", "", "Ya te encuentras registrado en el curso");
    } else {
      temp.push(this.authService.GetID());
      item.Enrolled = temp;
      this.courseService.updateCourse(item.courseID, item);
      this.presentAlert("Registro Exitoso!", "", "Bienvenido al Curso");
    }
  }
  searchCourses(){
    if(this.subjects === "Todas" && this.searchBox.length > 0){
      this.searched = [];
      this.courses.forEach(element => {
        if(element.Title.includes(this.searchBox)){
          this.searched.push(element);
        } else if(element.Subject.includes(this.searchBox)){
          this.searched.push(element);
        } else if(element.TeacherName.includes(this.searchBox)){
          this.searched.push(element);
        }
      });
    } else if(this.subjects !== "Todas" && this.searchBox.length > 0) {
      this.searched = [];
      this.courses.forEach(element => {
        if(element.Title.includes(this.searchBox) && element.Subject.includes(this.subjects) ){
          this.searched.push(element);
        } else if(element.Subject.includes(this.searchBox) && element.Subject.includes(this.subjects)){
          this.searched.push(element);
        } else if(element.TeacherName.includes(this.searchBox) && element.Subject.includes(this.subjects) ){
          this.searched.push(element);
        }
      });
    } else if(this.subjects !== "Todas" && this.searchBox.length <= 0) {
      this.searched = [];
      this.courses.forEach(element => {
        if(element.Subject.includes(this.subjects)){
          this.searched.push(element);
        }
      });
    }
    else
    {
      this.getCourses();
    }
  }

  async presentAlert(Header, SubHeader, Message) {
    const alert = await this.alertController.create({
      header: Header,
      subHeader: SubHeader,
      message: Message,
      buttons: ['OK']
    });
    await alert.present();
  }

}

