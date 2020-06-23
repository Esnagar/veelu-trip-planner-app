import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference, AngularFirestoreDocument } from "@angular/fire/firestore";
import { map, take } from "rxjs/operators";
import { Observable } from "rxjs";
import { Storage } from '@ionic/storage';
import { User } from './users.service';

export interface Friend {
  id?: string;
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

  constructor(private afs: AngularFirestore, public storage: Storage) { 
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

  createFriend(friend: Friend): Promise<DocumentReference> {
    return this.friendCollection.add(friend);
  }

  updateFriend(id, status_variable): Promise<void> {
    return this.friendCollection
      .doc(id)
      .update({ status: status_variable });
  }

  deleteFriend(id: string): Promise<void> {
    console.log(id);
    return this.friendCollection.doc(id).delete();
  }
}
