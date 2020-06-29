import { Component, OnInit } from '@angular/core';
import { TripsService, Trip } from 'src/app/services/trips.service';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference, AngularFirestoreDocument } from "@angular/fire/firestore";
import { Storage } from '@ionic/storage';

import {
  Plugins,
  PushNotification,
  PushNotificationToken,
  PushNotificationActionPerformed } from '@capacitor/core';
import { Router } from '@angular/router';

const { PushNotifications } = Plugins;

export interface Device {
  id?: string;
  token: string;
  userId: string;
}

@Component({
  selector: 'app-trips',
  templateUrl: './trips.page.html',
  styleUrls: ['./trips.page.scss'],
})

export class TripsPage implements OnInit {

  idUser: any;
  nicknameUser: any;
  filter: string;
  date: any;
  noTripsMessage: string;
  activeFilter: string;
  trips: Trip[];
  devicesCollection: AngularFirestoreCollection<Device>;


  slideOpts = {
    initialSlide: 0,
    speed: 400
  };
 
  constructor(private tripsService: TripsService, public afAuth: AngularFireAuth, private router: Router, private storage: Storage, private afs: AngularFirestore) { }

  async ngOnInit() {
    this.prepareNotifications();

    this.activeFilter = 'All';
    this.date = new Date(Date.now()).toISOString();
    this.noTripsMessage = "You don't have any trips yet. Try creating one by clicking the floating button!";

    var idAux, nicknameAux;
    await this.storage.get('userId').then(id => {
      idAux = id;
    })

    await this.storage.get('userNickname').then(nick => {
      nicknameAux = nick;
    })

    this.idUser = idAux;
    this.nicknameUser = nicknameAux;


    this.tripsService.getTrips(this.idUser).subscribe(val => {
      this.trips = val;
    });  
  }

  searchTrips(e) {
    this.activeFilter = 'All';
    var search = ((<HTMLInputElement>document.getElementById('busqueda')).value).toLowerCase();

    if (search != '') {
      this.tripsService.searchTrips(search, this.idUser).subscribe(val => {
        this.trips = val;
      });
    } else {
      this.tripsService.getTrips(this.idUser).subscribe(val => {
        this.trips = val;
      });
    }
    this.noTripsMessage = "We couldn't find any trip according to your search :(";
  }

  async searchTripsFilter(e) {
    this.filter = e;
    this.activeFilter = e;
    var date = new Date(Date.now()).toISOString();

    switch (e) {
      case 'All':
        this.tripsService.getTrips(this.idUser).subscribe(val => {
          this.trips = val;
        });
      break;

      case 'Current':
        this.tripsService.filterTrips(this.idUser, date, e).subscribe(val => {
          this.trips = [];
          val.forEach(trip => {
            if (trip.fecha_ini <= date) {
              this.trips.push(trip);
            }
          });
        });
      break;
      
      default:
        this.tripsService.filterTrips(this.idUser, date, e).subscribe(val => {
          this.trips = val;
        });
      break;
    }

    this.noTripsMessage = "We couldn't find any trip according to your search :(";
  }

  prepareNotifications() {

    // Request permission to use push notifications
    // iOS will prompt user and return if they granted permission or not
    // Android will just grant without prompting
    PushNotifications.requestPermission().then(result => {
      if (result.granted) {
        // Register with Apple / Google to receive push via APNS/FCM
        PushNotifications.register();
      } else {
        // Show some error
      }
    });

    // On success, we should be able to receive notifications
    PushNotifications.addListener('registration',
      (token: PushNotificationToken) => {
        this.devicesCollection = this.afs.collection<Device>('devices');
        this.devicesCollection.doc(token.value).set({ userId: this.nicknameUser, token: token.value });
      }
    );

    // Some issue with our setup and push will not work
    PushNotifications.addListener('registrationError',
      (error: any) => {
        alert('Error on registration: ' + JSON.stringify(error));
      }
    );

    // Show us the notification payload if the app is open on our device
    PushNotifications.addListener('pushNotificationReceived',
      (notification: PushNotification) => {
        (<HTMLInputElement>document.getElementById("bell")).src = "../../../assets/icon/bell-notification.svg";
      }
    );

    // Method called when tapping on a notification
    PushNotifications.addListener('pushNotificationActionPerformed',
      (notification: PushNotificationActionPerformed) => {
        this.router.navigate(['/tabs/notifications']);
      }
    );
  }
}
