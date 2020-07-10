import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TripsService } from 'src/app/services/trips.service';

@Component({
  selector: 'app-activity-detail',
  templateUrl: './activity-detail.page.html',
  styleUrls: ['./activity-detail.page.scss'],
})

export class ActivityDetailPage implements OnInit {

  trip: any;
  activity: any;
  date: any;
  loaded: boolean;

  constructor(private route: ActivatedRoute, private router: Router, private tripsService: TripsService) { }

  ngOnInit() {
    this.loaded = false;

    this.route.paramMap.subscribe(params => {
      if (history.state.navigationId !== 'undefined' && history.state.navigationId !== 1) {
        console.log(history.state);
        this.trip = history.state.trip;
        this.activity = history.state.activity;
        this.date = history.state.day;
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
