import { Component, OnInit } from '@angular/core';
import { TripsService, Trip } from 'src/app/services/trips.service';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.page.html',
  styleUrls: ['./trips.page.scss'],
})
export class TripsPage implements OnInit {

  idUser: any;
  filter: string;
  date: any;
  noTripsMessage: string;
  activeFilter: string;
  trips: Trip[];

  slideOpts = {
    initialSlide: 0,
    speed: 400
  };
 
  constructor(private tripsService: TripsService, public afAuth: AngularFireAuth, private storage: Storage) { 

  }

  async ngOnInit() {
    this.activeFilter = 'All';
    this.date = new Date(Date.now()).toISOString();
    this.noTripsMessage = "You don't have any trips yet. Try creating one by clicking the floating button!";

    var idAux;
    await this.storage.get('userId').then(id => {
      idAux = id;
    })

    this.idUser = idAux;

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
}
