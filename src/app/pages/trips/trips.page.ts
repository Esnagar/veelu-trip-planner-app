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

  private trips: Observable<Trip[]>;
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
 
  constructor(private tripsService: TripsService, public afAuth: AngularFireAuth, private storage: Storage) { 

  }

  async ngOnInit() { 
    var idAux;
    await this.storage.get('userId').then(id => {
      idAux = id;
    })

    this.idUser = idAux;
    this.trips = this.tripsService.getTrips(this.idUser);
  }
}
