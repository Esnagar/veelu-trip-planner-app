import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection,
  DocumentReference,
  AngularFirestoreDocument,
} from "@angular/fire/firestore";
import { map, take } from "rxjs/operators";
import { Observable } from "rxjs";
import { Storage } from '@ionic/storage';

export interface Trip {
  id?: string;
  titulo: string;
  foto: string;
  fecha_ini: string;
  fecha_fin: string;
  participantes?: any;
}

@Injectable({
  providedIn: "root",
})
export class TripsService {
  private trips: Observable<Trip[]>;
  private tripCollection: AngularFirestoreCollection<Trip>;
  private tripDoc: AngularFirestoreDocument<Trip>;


  constructor(private afs: AngularFirestore, public storage: Storage) {
    this.tripCollection = this.afs.collection<Trip>('trips');
    this.trips = this.tripCollection.snapshotChanges().pipe(
      map((actions) => {
        return actions.map((a) => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }
  getTrips(idUser): Observable<Trip[]> {

    return this.trips = this.afs.collection<Trip>('trips', ref => ref.where('participantes.user.id', '==', idUser).orderBy('fecha_ini'))
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

  getTrip(id: string) {  
    this.tripDoc = this.afs.doc<Trip>('trips/' + id);
    return this.tripDoc.valueChanges();  
  }

  createTrip(trip: Trip): Promise<DocumentReference> {
    return this.tripCollection.add(trip);
  }

  updateTrip(trip: Trip): Promise<void> {
    return this.tripCollection
      .doc(trip.id)
      .update({ titulo: trip.titulo, foto: trip.foto });
  }

  deleteTrip(id: string): Promise<void> {
    return this.tripCollection.doc(id).delete();
  }
}
