import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TripsService } from 'src/app/services/trips.service';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.page.html',
  styleUrls: ['./checklist.page.scss'],
})
export class ChecklistPage implements OnInit {

  trip: any;
  loaded: boolean;
  groupItems: any;
  privateItems: any;
  currentItems: any;

  constructor(private route: ActivatedRoute, private router: Router, private tripsService: TripsService) {
    this.initInfo();
  }

  ngOnInit() {
    this.loaded = true;

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

  changeItems(type) {
    if(type == 'Group') {
      this.currentItems = this.groupItems;
    } else {
      this.currentItems = this.privateItems;
    }
  }

  toggleCheck(n) {
    this.currentItems[n].checked = !this.currentItems[n].checked;
  }


  initInfo() {
    this.groupItems = [];
    this.privateItems = [];

    this.groupItems.push({ texto: 'imprimir billetes de avión', checked: true},
                        { texto: 'investigar sitios a visitar', checked: true},
                        { texto: 'mirar hoteles', checked: false},
                        { texto: 'comprobar caducidad pasaportes', checked: false},
                        { texto: 'DNI', checked: false},
                        { texto: 'comprar entradas museo', checked: true},
                        { texto: 'dinero', checked: false}
    );

    this.privateItems.push({ texto: 'llevar ropa abrigada', checked: false},
                        { texto: 'mirar caducidad dni', checked: true},
                        { texto: 'coger auriculares para el bus', checked: false},
                        { texto: 'cargador de móvil', checked: true}
                    );

    this.currentItems = this.groupItems;
  }

}
