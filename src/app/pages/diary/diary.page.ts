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
        console.log(history.state);
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
        icono: users[1].icono,
        nick: users[1].nick,
        color: 'aqua',
        fecha: '27/01/2020',
        texto: `Ayer fuimos a La Haya, en concreto a un museo llamado Madurodam. Más que un museo es una zona al aire libre que simula Holanda como si fuera una mini ciudad.

        Resulta que lo llamaban así porque hubo un soldado importante en la guerra de noseque en las tropas de Holanda, y sus padres (ricos) le hicieron esto para homenajearlo.
        
        Están muy logradas las maquetas, pero lo mejor de la exposición es que también tiene pequeños juegos, como una mesa de dj, una báscula para saber tu peso en quesos, etc.
        
        En el interior hay una sección de fútbol en la que también te hacen un muñeco turbio en 3D. Y a Moi casi se le pierde un guante en la zona del barco pirata.`
      },
      {
        id: 2, 
        icono: users[2].icono,
        nick: users[2].nick,
        color: 'lime',
        fecha: '25/01/2020',
        texto: `Esta mañana hemos ido en tren hasta Zaanse Schans, un pequeño pueblo con molinos donde viven`
      },
      {
        id: 3,
        icono: users[1].icono,
        nick: users[1].nick,
        color: 'candypop',
        fecha: '24/01/2020',
        texto: `Hoy ha sido el primer día de viaje. Después de dejar las cosas en el apartamento, hemos bajado a dar un paseo por la zona del. 

        Nullam pellentesque et lectus quis pulvinar. Fusce ac pulvinar ante. Donec pellentesque enim non pulvinar facilisis. Pellentesque dictum finibus purus eget commodo.
        
        In in est ac quam feugiat venenatis. Pellentesque placerat tristique mi et volutpat. Morbi eget tristique enim. Nam lobortis condimentum dolor, ac laoreet felis rutrum auctor.
        
        In vulputate, quam vitae consequat malesuada, ante elit pretium ligula, non ullamcorper libero turpis egestas diam. Praesent egestas laoreet orci non fermentum.`
      }
    );
    
    this.loaded = true;
  }
}
