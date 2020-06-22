import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference, AngularFirestoreDocument } from "@angular/fire/firestore";
import { map, take } from "rxjs/operators";
import { Observable } from "rxjs";
import { Storage } from '@ionic/storage';

export interface User {
  id?: string;
  nick: string;
  nick_lc: string;
  icono: string;
}

export interface Friends {
  users: Array<string>;
  icons: Array<string>;
  status: string;
}

@Injectable({
  providedIn: 'root'
})

export class FriendsService {
  private friends: Observable<Friends[]>;
  private users: Observable<User[]>;
  private userCollection: AngularFirestoreCollection<User>;
  private userDoc: AngularFirestoreDocument<User>;

  constructor(private afs: AngularFirestore, public storage: Storage) {
  }

  getUsers(nickname): Observable<User[]> {
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

  getFriends(currentUserNick): Observable<Friends[]> {
    return this.friends = this.afs.collection<Friends>('friends', ref => ref.where('users', 'array-contains', currentUserNick))
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

  getUser(id: string) {  
    this.userDoc = this.afs.doc<User>('users/' + id);
    return this.userDoc.valueChanges();  
  }

  createUser(user: User): Promise<void> {
    // Se hace un set y no un add para poder crear un doc con el ID que queramos
    return this.userCollection
      .doc(user.id)
      .set({ nick: user.nick, icono: user.icono });
  }

  updateUser(user: User): Promise<void> {
    return this.userCollection
      .doc(user.id)
      .update({ nick: user.nick, icono: user.icono });
  }

  deleteUser(id: string): Promise<void> {
    return this.userCollection.doc(id).delete();
  }

}
