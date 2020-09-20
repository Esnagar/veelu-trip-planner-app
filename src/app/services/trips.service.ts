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
  titulo_lc: string;
  descripcion?: string;
  foto: string;
  fecha_ini: string;
  fecha_fin: string;
  participantes?: any;
  idsParticipantes?: any;
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
    return this.trips = this.afs.collection<Trip>('trips', ref => ref.where('idsParticipantes', 'array-contains', idUser).orderBy('fecha_ini'))
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

  searchTrips(texto, idUser): Observable<Trip[]> {

    var texto = texto.toLowerCase();

    return this.trips = this.afs.collection<Trip>('trips', ref => ref.where('idsParticipantes', 'array-contains', idUser)
                                                                     .where('titulo_lc', '>=', texto)
                                                                     .where('titulo_lc', '<=', texto+'\uf8ff')
                                                                     .orderBy('titulo_lc')
                                                                     .orderBy('fecha_ini'))
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

  filterTrips(idUser, date, filter): Observable<Trip[]> {

    switch (filter) {
      case 'Upcoming':
        return this.trips = this.afs.collection<Trip>('trips', ref => ref.where('idsParticipantes', 'array-contains', idUser)
                                                                      .where('fecha_ini', '>', date)
                                                                      .orderBy('fecha_ini'))
          .snapshotChanges().pipe(
            map((actions) => {
              return actions.map((a) => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return { id, ...data };
              });
            })
          );
      break;


      case 'Past':
        return this.trips = this.afs.collection<Trip>('trips', ref => ref.where('idsParticipantes', 'array-contains', idUser)
                                                                      .where('fecha_fin', '<', date)
                                                                      .orderBy('fecha_fin'))
          .snapshotChanges().pipe(
            map((actions) => {
              return actions.map((a) => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return { id, ...data };
              });
            })
          );
      break;  


      case 'Current':
        return this.trips = this.afs.collection<Trip>('trips', ref => ref.where('idsParticipantes', 'array-contains', idUser)
                                                                      .where('fecha_fin', '>=', date)
                                                                      .orderBy('fecha_fin'))
          .snapshotChanges().pipe(
            map((actions) => {
              return actions.map((a) => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return { id, ...data };
              });
            })
          );


      break;  
    }
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
      .update({ titulo: trip.titulo, titulo_lc: trip.titulo.toLowerCase(),
                fecha_ini: trip.fecha_ini, fecha_fin: trip.fecha_fin, descripcion: trip.descripcion,
                foto: trip.foto });
  }

  updateTravelers(idTrip, travelers, idsTravelers): Promise<void> {
    return this.tripCollection
      .doc(idTrip)
      .update({ participantes: travelers, idsParticipantes: idsTravelers })
  }

  deleteTrip(id: string): Promise<void> {
    return this.tripCollection.doc(id).delete();
  }
}
