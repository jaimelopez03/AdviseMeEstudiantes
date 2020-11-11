import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import { EditPersonalInfoPage } from '../edit-personal-info/edit-personal-info.page';
import { ModalController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(private authService: AuthService,
              private userService: UserService,
              private modalCtrl: ModalController,
              private afs: AngularFirestore) { }
  user = [];
  
  ngOnInit() {
    this.getStudent();
    console.log(this.user);
  }
  getStudent() {
    this.userService.getUser(this.authService.GetID()).subscribe((student) => {
      this.user.push(student);
    });
  }


  async openEditModal(item: any){
    const modal = await this.modalCtrl.create({
      component: EditPersonalInfoPage,
      componentProps: {
         'item': item
      }
    });
    await modal.present();
  }

}
