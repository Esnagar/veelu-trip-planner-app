import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TripsService } from 'src/app/services/trips.service';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.page.html',
  styleUrls: ['./diary.page.scss'],
})
export class DiaryPage implements OnInit {

  loaded: boolean;
  trip: any;
  entries: any;

  constructor(private route: ActivatedRoute, private router: Router, private tripsService: TripsService) {
  }

  ngOnInit() {
    this.loaded = false;

    this.route.paramMap.subscribe(params => {
      if (history.state.navigationId !== 'undefined' && history.state.navigationId !== 1) {
        this.trip = history.state;
        this.initInfo();

      } else {
        let id = this.router.url.split('/')[2];
        this.tripsService.getTrip(id).subscribe(trip => {
          this.trip = trip;
          this.trip.id = id;
          this.initInfo();

        });
      }
    });
  }

  initInfo() {
    this.entries = [];
    var users = [];

    for (var key in this.trip.participantes) {
      users.push(this.trip.participantes[key]);
    }

    this.entries.push(
      {
        id: 1, 
        icono: users[0].icono,
        nick: users[0].nick,
        color: 'aqua',
        fecha: '03/07/2020',
        texto: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque porttitor sit amet sem eu efficitur. Sed vel cursus tellus. Maecenas tempor tortor euismod ligula semper, id tempus tellus facilisis.

        Nullam pellentesque et lectus quis pulvinar. Fusce ac pulvinar ante. Donec pellentesque enim non pulvinar facilisis. Pellentesque dictum finibus purus eget commodo.
        
        In in est ac quam feugiat venenatis. Pellentesque placerat tristique mi et volutpat. Morbi eget tristique enim. Nam lobortis condimentum dolor, ac laoreet felis rutrum auctor.
        
        In vulputate, quam vitae consequat malesuada, ante elit pretium ligula, non ullamcorper libero turpis egestas diam. Praesent egestas laoreet orci non fermentum.`
      },
      {
        id: 2, 
        icono: users[1].icono,
        nick: users[1].nick,
        color: 'lime',
        fecha: '02/07/2020',
        texto: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque porttitor sit amet sem eu efficitur. Sed vel cursus tellus. Maecenas tempor tortor euismod ligula semper, id tempus tellus facilisis. 

        Nullam pellentesque et lectus quis pulvinar. Fusce ac pulvinar ante. Donec pellentesque enim non pulvinar facilisis. Pellentesque dictum finibus purus eget commodo.
        
        In in est ac quam feugiat venenatis. Pellentesque placerat tristique mi et volutpat. Morbi eget tristique enim. Nam lobortis condimentum dolor, ac laoreet felis rutrum auctor.
        
        In vulputate, quam vitae consequat malesuada, ante elit pretium ligula, non ullamcorper libero turpis egestas diam. Praesent egestas laoreet orci non fermentum.`
      },
      {
        id: 3,
        icono: users[0].icono,
        nick: users[0].nick,
        color: 'candypop',
        fecha: '01/07/2020',
        texto: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque porttitor sit amet sem eu efficitur. Sed vel cursus tellus. Maecenas tempor tortor euismod ligula semper, id tempus tellus facilisis. 

        Nullam pellentesque et lectus quis pulvinar. Fusce ac pulvinar ante. Donec pellentesque enim non pulvinar facilisis. Pellentesque dictum finibus purus eget commodo.
        
        In in est ac quam feugiat venenatis. Pellentesque placerat tristique mi et volutpat. Morbi eget tristique enim. Nam lobortis condimentum dolor, ac laoreet felis rutrum auctor.
        
        In vulputate, quam vitae consequat malesuada, ante elit pretium ligula, non ullamcorper libero turpis egestas diam. Praesent egestas laoreet orci non fermentum.`
      },
      {
        id: 4, 
        icono: users[1].icono,
        nick: users[1].nick,
        color: 'sandy',
        fecha: '01/07/2020',
        texto: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque porttitor sit amet sem eu efficitur. Sed vel cursus tellus. Maecenas tempor tortor euismod ligula semper, id tempus tellus facilisis.

        Nullam pellentesque et lectus quis pulvinar. Fusce ac pulvinar ante. Donec pellentesque enim non pulvinar facilisis. Pellentesque dictum finibus purus eget commodo.

        In in est ac quam feugiat venenatis. Pellentesque placerat tristique mi et volutpat. Morbi eget tristique enim. Nam lobortis condimentum dolor, ac laoreet felis rutrum auctor.

        In vulputate, quam vitae consequat malesuada, ante elit pretium ligula, non ullamcorper libero turpis egestas diam. Praesent egestas laoreet orci non fermentum.`
      }
    );
    
    this.loaded = true;
  }
}
