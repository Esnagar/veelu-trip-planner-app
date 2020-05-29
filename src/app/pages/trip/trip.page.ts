import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TripsService, Trip } from 'src/app/services/trips.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-trip',
  templateUrl: './trip.page.html',
  styleUrls: ['./trip.page.scss'],
})
export class TripPage implements OnInit {

  trip: any;
  loaded: boolean;

  constructor(private route: ActivatedRoute, private router: Router, private tripsService: TripsService) {
    this.loaded = false;
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      if (history.state.navigationId !== 'undefined' && history.state.navigationId !== 1) {
        this.trip = history.state;
        console.log(this.trip);
        this.loaded = true;
      } else {
        let id = this.router.url.split('/')[2];
        this.tripsService.getTrip(id).subscribe(trip => this.trip = trip);
        this.loaded = true;
      }
    });
  }



  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

}
