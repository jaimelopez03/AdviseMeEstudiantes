import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-message-modal',
  templateUrl: './message-modal.page.html',
  styleUrls: ['./message-modal.page.scss'],
})
export class MessageModalPage implements OnInit {

  @Input() item: any;

  title = "";
  message = "";
  constructor(  private modalCtrl : ModalController,
                private userService : UserService) { }

  ngOnInit() {
  }

  sendMessage(){
    let temp = {
      Message : this.message,
      Title : this.title
    }
    this.item.petitions.push(temp)
    this.userService.updateTeacher(this.item.id, this.item)
    this.dismiss();
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

}
