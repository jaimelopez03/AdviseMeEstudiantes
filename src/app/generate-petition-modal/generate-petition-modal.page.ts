import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { ModalController } from '@ionic/angular';
import { MessageModalPage } from '../message-modal/message-modal.page';

@Component({
  selector: 'app-generate-petition-modal',
  templateUrl: './generate-petition-modal.page.html',
  styleUrls: ['./generate-petition-modal.page.scss'],
})
export class GeneratePetitionModalPage implements OnInit {

  constructor(  private userService : UserService,
                private modalCtrl : ModalController) { }

  teachers = [];

  ngOnInit() {
    this.getTeachers()
    console.log(this.teachers)
  }

  getTeachers(){
    this.userService.getAllUsers().subscribe((teacher) => {
      this.teachers = teacher;
    })
  }

  async messageModal(item) {
    const modal = await this.modalCtrl.create({
      component: MessageModalPage,
      componentProps : {
        'item' : item
      }
      
    });
    await modal.present();
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }


}
