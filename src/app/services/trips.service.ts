import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/firestore';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
 
export interface Trip {
  id?: string,
  titulo: string,
  foto: string,
  fecha_ini: string,
  fecha_fin: string
}
 
@Injectable({
  providedIn: 'root'
})

export class TripsService {
  private trips: Observable<Trip[]>;
  private tripCollection: AngularFirestoreCollection<Trip>;
 
  constructor(private afs: AngularFirestore) {
    this.tripCollection = this.afs.collection<Trip>('trips');
    this.trips = this.tripCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }
 
  getTrips(): Observable<Trip[]> {
    return this.trips;
  }
 
  getTrip(id: string): Observable<Trip> {
    return this.tripCollection.doc<Trip>(id).valueChanges().pipe(
      take(1),
      map(trip => {
        trip.id = id;
        return trip
      })
    );
  }
/*
  searchTrips(titulo: string): Observable<Trip> {
    return this.tripCollection.doc
  }*/
 
  createTrip(trip: Trip): Promise<DocumentReference> {
    return this.tripCollection.add(trip);
  }
 
  updateTrip(trip: Trip): Promise<void> {
    return this.tripCollection.doc(trip.id).update({ titulo: trip.titulo, foto: trip.foto });
  }
 
  deleteTrip(id: string): Promise<void> {
    return this.tripCollection.doc(id).delete();
  }
}