import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { FriendsService, Friend } from 'src/app/services/friends.service';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.page.html',
  styleUrls: ['./friends.page.scss'],
})
export class FriendsPage implements OnInit {

  nickLogged: string;
  iconLogged: string;
  friends: Friend[];
  loaded: boolean;

  constructor(private storage: Storage, private friendsService: FriendsService) { }

  async ngOnInit() {
    this.loaded = false;
    var nickAux, iconAux;
    await this.storage.get('userNickname').then(nick => {
      nickAux = nick;
    })

    await this.storage.get('userPhoto').then(icon => {
      iconAux = icon;
    })

    this.nickLogged = nickAux;
    this.iconLogged = iconAux;

    this.friendsService.getFriends(this.nickLogged).subscribe(val => {
      this.friends = val;
      this.loaded = true;
    });  
  }

  
  async toggleFollow(friend, n, n2, i) {
    this.friendsService.toggleFollow(friend.users[n], friend.icons[n], friend.status, friend.id, this.friends, i, 
                                      this.nickLogged, this.iconLogged, friend.ids[n], friend.ids[n2]).then(res => {
      this.friends = res;
    });
  }

}
