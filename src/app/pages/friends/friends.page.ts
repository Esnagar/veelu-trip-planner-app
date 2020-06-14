import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { FriendsService, Friends } from 'src/app/services/friends.service';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.page.html',
  styleUrls: ['./friends.page.scss'],
})
export class FriendsPage implements OnInit {

  nick: string;
  friends: Friends[];

  constructor(private storage: Storage, private friendsService: FriendsService) { }

  async ngOnInit() {
    var nickAux;
    await this.storage.get('userNickname').then(nick => {
      nickAux = nick;
    })

    this.nick = nickAux;

    this.friendsService.getFriends(this.nick).subscribe(val => {
      this.friends = val;
    });  
  }

}
