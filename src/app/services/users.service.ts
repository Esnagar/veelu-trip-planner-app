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

@Injectable({
  providedIn: 'root'
})

export class UsersService {
  private users: Observable<User[]>;
  private userCollection: AngularFirestoreCollection<User>;
  private userDoc: AngularFirestoreDocument<User>;

  constructor(private afs: AngularFirestore, public storage: Storage) {
    this.userCollection = this.afs.collection<User>('users');
    this.users = this.userCollection.snapshotChanges().pipe(
      map((actions) => {
        return actions.map((a) => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

  getUsers(nickname): Observable<User[]> {
    return this.users = this.afs.collection<User>('users', ref => ref.where('nick', '==', nickname).orderBy('nick'))
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
