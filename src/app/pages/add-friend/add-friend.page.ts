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

  async ngOnInit() {
    this.users = [];
    this.searched = false;

    var nicknameAux, iconAux;

    await this.storage.get('userNickname').then(nick => {
      nicknameAux = nick;
    });

    await this.storage.get('userPhoto').then(icon => {
      iconAux = icon;
    });

    this.nickLogged = nicknameAux;
    this.iconLogged = iconAux;

    this.route.paramMap.subscribe(params => {
      if (history.state.navigationId !== 'undefined' && history.state.navigationId !== 1) {
        this.friends = history.state[0];
      }
    });
  }

  async toggleFollow(friend, i) {
    if (friend[2] == 'accepted' || friend[2] == 'pending') { // there is a petition created
      this.friendsService.deleteFriend(friend[3]); // el id
      this.users[i][2] = 'no-friend';
      this.users[i][3] = ''; // ya no hay id porque no hay peticion
    } else if (friend[2] == 'no-friend') { // we send the request
      this.request = {
        users: [this.nickLogged, friend[0]],
        icons: [this.iconLogged, friend[1]],
        status: 'pending'
      }
      var newId = (await this.friendsService.createFriend(this.request)).id;
      this.users[i][2] = 'pending';
      this.users[i][3] = newId;
    }
  }

  searchUsers(e) {
    var search = ((<HTMLInputElement>document.getElementById('busqueda')).value).toLowerCase();

    if (search != '') {
      this.users = [];
      this.searched = true;

      this.friendsService.searchUsers(search).subscribe(usuarios => {
        for (let i = 0; i < usuarios.length; i++) {
          const user = usuarios[i];

          for (let j = 0; j < this.friends.length; j++) {
            const friend = this.friends[j];
            
            if (user.nick_lc != this.nickLogged) {
              if (((user.nick_lc == friend.users[0] && this.nickLogged == friend.users[1]) ||
                   (user.nick_lc == friend.users[1] && this.nickLogged == friend.users[0])) && friend.status == 'accepted') {
                this.users.push([user.nick_lc, user.icono, 'accepted', friend.id]);
                break;
              } else if (((user.nick_lc == friend.users[0] && this.nickLogged == friend.users[1]) ||
                         (user.nick_lc == friend.users[1] && this.nickLogged == friend.users[0])) && friend.status == 'pending') {
                this.users.push([user.nick_lc, user.icono, 'pending', friend.id]);
                break;
              } else {
                this.users.push([user.nick_lc, user.icono, 'no-friend']);
                break;
              }
            }
          }
        }
      }); 
    }
  }

}
