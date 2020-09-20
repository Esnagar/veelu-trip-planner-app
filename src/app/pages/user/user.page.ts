import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  loaded: boolean;
  profilePic: any;
  nickname: any;

  constructor(public storage: Storage) { }

  async ngOnInit() {
    this.loaded = true;
    var photoAux, nicknameAux, idAux;

    await this.storage.get('userPhoto').then(photo => {
      photoAux = photo;
    })

    await this.storage.get('userNickname').then(nick => {
      nicknameAux = nick;
    })

    this.profilePic = photoAux;
    this.nickname = nicknameAux;
  }

}
