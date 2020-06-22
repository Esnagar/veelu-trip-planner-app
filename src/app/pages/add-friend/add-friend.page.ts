import { Component, OnInit, Input } from '@angular/core';
import { FriendsService, User } from 'src/app/services/friends.service';
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
  users: Array<string>[] = [];
  searched: boolean;

  constructor(private friendsService: FriendsService, private storage: Storage, private route: ActivatedRoute) { }

  async ngOnInit() {
    this.users = [];
    this.searched = false;

    var nicknameAux;
    await this.storage.get('userNickname').then(nick => {
      nicknameAux = nick;
    });

    this.nickLogged = nicknameAux;

    this.route.paramMap.subscribe(params => {
      if (history.state.navigationId !== 'undefined' && history.state.navigationId !== 1) {
        this.friends = history.state[0];
      }
    });
  }

  searchUsers(e) {
    var search = ((<HTMLInputElement>document.getElementById('busqueda')).value).toLowerCase();

    if (search != '') {
      this.users = [];
      this.searched = true;

      this.friendsService.getUsers(search).subscribe(usuarios => {
        for (let i = 0; i < usuarios.length; i++) {
          const user = usuarios[i];

          for (let j = 0; j < this.friends.length; j++) {
            const friend = this.friends[j];

            if (user.nick_lc != this.nickLogged) {
              if (user.nick_lc == friend.users[0] || user.nick_lc == friend.users[1]) {
                this.users.push([user.nick_lc, user.icono, 'accepted']);
                break;
              } else {
                this.users.push([user.nick_lc, user.icono, 'no-friend']);
                break;
              }
            } else {
              this.users.push([user.nick_lc, user.icono, 'self']);
              break;
            }
          }
        }
      }); 
    }
  }

}
