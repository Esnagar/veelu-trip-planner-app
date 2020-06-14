import { Component, OnInit } from '@angular/core';
import { FriendsService, User } from 'src/app/services/friends.service';

@Component({
  selector: 'app-add-friend',
  templateUrl: './add-friend.page.html',
  styleUrls: ['./add-friend.page.scss'],
})
export class AddFriendPage implements OnInit {

  users: User[];

  constructor(private friendsService: FriendsService) { }

  ngOnInit() {
  }

  searchUsers(e) {
    var search = ((<HTMLInputElement>document.getElementById('busqueda')).value).toLowerCase();

    this.friendsService.getUsers(search).subscribe(val => {
      this.users = val;
      console.log(this.users);
    }); 
  }

}
