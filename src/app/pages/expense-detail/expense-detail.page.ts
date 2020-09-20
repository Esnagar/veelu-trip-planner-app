import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TripsService } from 'src/app/services/trips.service';

@Component({
  selector: 'app-expense-detail',
  templateUrl: './expense-detail.page.html',
  styleUrls: ['./expense-detail.page.scss'],
})
export class ExpenseDetailPage implements OnInit {

  loaded: boolean;
  trip: any;
  expense: any;
  participantes: any;

  constructor(private route: ActivatedRoute, private router: Router, private tripsService: TripsService) {
  }

  ngOnInit() {
    this.loaded = false;
    this.participantes = []

    this.route.paramMap.subscribe(params => {
      if (history.state.navigationId !== 'undefined' && history.state.navigationId !== 1) {
        this.trip = history.state.trip;
        this.expense = history.state.expense;

        for (var key in this.trip.participantes) {
          this.participantes.push(this.trip.participantes[key]);
        }

        this.loaded = true;

      } else {
        let id = this.router.url.split('/')[2];
        this.tripsService.getTrip(id).subscribe(trip => {
          this.trip = trip;
          this.trip.id = id;

          for (var key in this.trip.participantes) {
            this.participantes.push(this.trip.participantes[key]);
          }

          this.loaded = true;
        });
      }
    });
  }

}
