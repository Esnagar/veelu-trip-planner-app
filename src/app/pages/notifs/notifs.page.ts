import { Component, OnInit } from '@angular/core';
import { FriendsService, Friend } from 'src/app/services/friends.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-notifs',
  templateUrl: './notifs.page.html',
  styleUrls: ['./notifs.page.scss'],
})
export class NotifsPage implements OnInit {

  nickLogged: string;
  requests: Friend[];
  loaded: boolean;

  constructor(private storage: Storage, private friendsService: FriendsService) { }

  async ngOnInit() {
    this.loaded = false;
    var nickAux;
    
    await this.storage.get('userNickname').then(nick => {
      nickAux = nick;
    })

    this.nickLogged = nickAux;

    this.friendsService.getRequests(this.nickLogged).subscribe(val => {
      this.requests = val;
      this.loaded = true;
    });  
  }

  handleRequest(request, accepted) {
    if (accepted) {
      this.friendsService.updateFriend(request.id);
    } else {
      this.friendsService.deleteFriend(request.id);
    }
  }

}
