import { Component, OnInit, Input } from '@angular/core';
import { FriendsService, Friend } from 'src/app/services/friends.service';
import { ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-add-friend',
  templateUrl: './add-friend.page.html',
  styleUrls: ['./add-friend.page.scss'],
})
export class AddFriendPage implements OnInit {

  friends: any;
  nickLogged: string;
  iconLogged: string;
  request: Friend;
  users: Array<string>[] = [];
  searched: boolean;

  constructor(private friendsService: FriendsService, private storage: Storage, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getUserInfo();

    this.route.paramMap.subscribe(params => {
      if (history.state.navigationId !== 'undefined' && history.state.navigationId !== 1) {
        this.friends = history.state[0];
      }
    });
  }

  ionViewWillEnter () {
    (<HTMLInputElement>document.getElementById('busqueda')).value = '';
    this.users = [];
    this.searched = false;
  }

  async toggleFollow(friend, i) {
    this.friendsService.toggleFollow(friend[0], friend[1], friend[2], friend[3], this.users, i, this.nickLogged, this.iconLogged).then(res => {
      this.users = res;
    });
  }

  async searchUsers(event) {
    var search = event.target.value.toLowerCase();

    if (search != '') {
      this.users = [];
      this.searched = true;

      this.friendsService.searchUsers(search).subscribe(usuarios => {
        for (let i = 0; i < usuarios.length; i++) {
          const user = usuarios[i];
          var found = false;

          for (let j = 0; j < this.friends.length; j++) {
            const friend = this.friends[j];
            
            if (user.nick_lc != this.nickLogged) {
              if (((user.nick_lc == friend.users[0] && this.nickLogged == friend.users[1]) ||
                   (user.nick_lc == friend.users[1] && this.nickLogged == friend.users[0])) && friend.status == 'accepted') {
                this.users.push([user.nick_lc, user.icono, 'accepted', friend.id]);
                found = true;
                break;
              } else if (((user.nick_lc == friend.users[0] && this.nickLogged == friend.users[1]) ||
                         (user.nick_lc == friend.users[1] && this.nickLogged == friend.users[0])) && friend.status == 'pending') {
                this.users.push([user.nick_lc, user.icono, 'pending', friend.id]);
                found = true;
                break;
              }
            }
          }
          if (user.nick_lc != this.nickLogged && !found) {
            this.users.push([user.nick_lc, user.icono, 'no-friend']);
          }

        }
      }); 
    }
  }

  async getUserInfo() {
    var nicknameAux, iconAux;

    await this.storage.get('userNickname').then(nick => {
      nicknameAux = nick;
    });

    await this.storage.get('userPhoto').then(icon => {
      iconAux = icon;
    });

    this.nickLogged = nicknameAux;
    this.iconLogged = iconAux;
  }
}
