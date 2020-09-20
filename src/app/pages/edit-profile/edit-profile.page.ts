import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {

  loaded: boolean;
  profilePic: any;
  nickname: any;
  email: any;

  constructor(public storage: Storage) { }

  async ngOnInit() {
    this.loaded = true;
    var photoAux, nicknameAux, idAux, emailAux;

    await this.storage.get('userPhoto').then(photo => {
      photoAux = photo;
    })

    await this.storage.get('userNickname').then(nick => {
      nicknameAux = nick;
    })

    await this.storage.get('userEmail').then(email => {
      emailAux = email;
    })

    this.profilePic = photoAux;
    this.nickname = nicknameAux;
    this.email = emailAux;
  }
}
