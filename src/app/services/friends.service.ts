import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference, AngularFirestoreDocument } from "@angular/fire/firestore";
import { map, take } from "rxjs/operators";
import { Observable } from "rxjs";
import { Storage } from '@ionic/storage';
import { User } from './users.service';
import { AlertController } from '@ionic/angular';

export interface Friend {
  id?: string;
  ids: Array<string>;
  users: Array<string>;
  icons: Array<string>;
  status: string;
}

@Injectable({
  providedIn: 'root'
})

export class FriendsService {
  private friends: Observable<Friend[]>;
  private users: Observable<User[]>;
  private friendCollection: AngularFirestoreCollection<Friend>;

  constructor(private afs: AngularFirestore, public storage: Storage, public alertController: AlertController) { 
    this.friendCollection = this.afs.collection<Friend>('friends');
  }


  searchUsers(nickname): Observable<User[]> {
    return this.users = this.afs.collection<User>('users', ref => ref.where('nick_lc', '>=', nickname)
                                                                      .where('nick_lc', '<=', nickname+'\uf8ff')
                                                                      .orderBy('nick_lc'))
    .snapshotChanges().pipe(
      map((actions) => {
        return actions.map((a) => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

  getFriends(currentUserNick): Observable<Friend[]> {
    return this.friends = this.afs.collection<Friend>('friends', ref => ref.where('users', 'array-contains', currentUserNick)
                                                                           .orderBy('status', 'desc'))
    .snapshotChanges().pipe(
      map((actions) => {
        return actions.map((a) => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

  getRequests(currentUserNick): Observable<Friend[]> {
    return this.friends = this.afs.collection<Friend>('friends', ref => ref.where('users', 'array-contains', currentUserNick)
                                                                           .where('status', '==', 'pending'))
    .snapshotChanges().pipe(
      map((actions) => {
        return actions.map((a) => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

  createFriend(friend: Friend): Promise<DocumentReference> {
    console.log(friend);
    return this.friendCollection.add(friend);
  }

  updateFriend(id): Promise<void> {
    return this.friendCollection
      .doc(id)
      .update({ status: 'accepted' });
  }

  deleteFriend(id: string): Promise<void> {
    return this.friendCollection.doc(id).delete();
  }


  async toggleFollow(friendNick, friendIcon, friendStatus, idRequest, users, i, nickLogged, iconLogged, idLogged, friendId) {
    if (friendStatus == 'accepted' || friendStatus == 'pending') { // there is a petition created
      return this.alertConfirmAction(friendNick).then(res => {
        if (res == 'yes') {
          this.deleteFriend(idRequest); // el id
          users[i][2] = 'no-friend';
          users[i][3] = ''; // ya no hay id porque no hay peticion

          return users;
        } else {
          return users;
        }
      });

    } else if (friendStatus == 'no-friend') { // we send the request
      var request = {
        ids: [idLogged, friendId],
        users: [nickLogged, friendNick],
        icons: [iconLogged, friendIcon],
        status: 'pending'
      }
      var newId = (await this.createFriend(request)).id;
      users[i][2] = 'pending';
      users[i][3] = newId;
      return users;
    }
  }

  async alertConfirmAction(username) {
    return new Promise(async (resolve) => {
      const alert = await this.alertController.create({
        cssClass: 'alert-confirm',
        header: 'Unfollow',
        message: 'Stop following <strong>' + username + '</strong>?',
        buttons: [
          {
            text: 'No',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
              resolve('no');
            }
          }, {
            text: 'Yes',
            handler: () => {
              resolve('yes');
            }
          }
        ]
      });

      await alert.present();
    });
  }
}
