import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection,
  DocumentReference,
  AngularFirestoreDocument,
} from "@angular/fire/firestore";
import { map, take } from "rxjs/operators";
import { Observable } from "rxjs";

export interface Trip {
  id?: string;
  titulo: string;
  foto: string;
  fecha_ini: string;
  fecha_fin: string;
}

@Injectable({
  providedIn: "root",
})
export class TripsService {
  private trips: Observable<Trip[]>;
  private tripCollection: AngularFirestoreCollection<Trip>;
  private tripDoc: AngularFirestoreDocument<Trip>;


  constructor(private afs: AngularFirestore) {
    this.tripCollection = this.afs.collection<Trip>("trips");
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

  getTrips(): Observable<Trip[]> {
    return this.trips;

    //return this.afs.collectionGroup<Trip>('trips', ref => ref.where('titulo', '==', 'ne'))
    //.valueChanges();
  }
  /*
  getTrip(id: string): Observable<Trip> {
    const tripDocuments = this.afs.doc<Trip>('trips/' + id);
    return tripDocuments.snapshotChanges()
      .pipe(map(changes => {
          const data = changes.payload.data();
          const id = changes.payload.id;
          return { id, ...data };
      }))
  }
/*
  searchTrips(titulo: string): Observable<Trip> {
    return this.tripCollection.doc
  }*/

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
