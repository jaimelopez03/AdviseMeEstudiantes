import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { UserService } from '../services/user.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-edit-personal-info',
  templateUrl: './edit-personal-info.page.html',
  styleUrls: ['./edit-personal-info.page.scss'],
})
export class EditPersonalInfoPage implements OnInit {
  @Input() item: any;
  constructor(private authService: AuthService,
              private afs: AngularFirestore,
              private userService: UserService,
              private modalCtrl : ModalController) { }
  user = [];
  nombre = ""
  boutme = ""
  ngOnInit() {
    this.boutme = this.item.aboutMe
    this.nombre = this.item.name
  }
  updateProfile(){ 
    this.item.aboutMe = this.boutme 
    this.item.name = this.nombre
    this.userService.updateUser(this.item.id, this.item)
    this.dismiss();
  }
  dismiss() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

}
