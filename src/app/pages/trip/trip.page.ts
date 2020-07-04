import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TripsService, Trip } from 'src/app/services/trips.service';
import { Observable } from 'rxjs';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.page.html',
  styleUrls: ['./trip.page.scss'],
})
export class TripPage implements OnInit {

  trip: any;
  tripCover: any;
  loaded: boolean;
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };


  constructor(private route: ActivatedRoute, private router: Router, private tripsService: TripsService) {
  }

  ngOnInit() {
    this.loaded = false;
    
    this.route.paramMap.subscribe(params => {
      if (history.state.navigationId !== 'undefined' && history.state.navigationId !== 1) {
        this.trip = history.state;
        this.loaded = true;
      } else {
        let id = this.router.url.split('/')[2];
        this.tripsService.getTrip(id).subscribe(trip => {
          this.trip = trip;
          this.trip.id = id;
          this.loaded = true;
        });
      }
    });
  }
}
