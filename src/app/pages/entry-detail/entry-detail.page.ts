import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TripsService } from 'src/app/services/trips.service';

@Component({
  selector: 'app-entry-detail',
  templateUrl: './entry-detail.page.html',
  styleUrls: ['./entry-detail.page.scss'],
})
export class EntryDetailPage implements OnInit {

  trip: any;
  entry: any;
  loaded: boolean;

  constructor(private route: ActivatedRoute, private router: Router, private tripsService: TripsService) {
  }

  ngOnInit() {
    this.loaded = false;

    this.route.paramMap.subscribe(params => {
      if (history.state.navigationId !== 'undefined' && history.state.navigationId !== 1) {
        this.trip = history.state.trip;
        this.entry = history.state.entry;
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
