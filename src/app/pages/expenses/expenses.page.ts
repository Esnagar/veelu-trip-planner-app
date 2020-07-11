import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TripsService } from 'src/app/services/trips.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.page.html',
  styleUrls: ['./expenses.page.scss'],
})
export class ExpensesPage implements OnInit {

  groupExpenses: any;
  privateExpenses: any;
  currentExpenses: any;
  trip: any;
  loaded: boolean;
  total: any;
  nickLogged: any;

  constructor(private storage: Storage, private route: ActivatedRoute, private router: Router, private tripsService: TripsService) {
  }

  async ngOnInit() {
    this.total = 0;
    this.loaded = false;

    var nickAux;
    await this.storage.get('userNickname').then(nick => {
      nickAux = nick;
    })

    this.nickLogged = nickAux;

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
    this.groupExpenses = [];
    this.privateExpenses = [];
    var users = [];

    for (var key in this.trip.participantes) {
      users.push(this.trip.participantes[key]);
    }

    this.groupExpenses.push(
      {
        id: 1, 
        usuarios: {
          [users[0]['nick']]: true,
          [users[1]['nick']]: true,
          [users[2]['nick']]: true,
        },
        texto: "Entrada al museo de la Haya",
        precio: 20
      },
      {
        id: 2, 
        usuarios: {
          [users[0]['nick']]: true,
          [users[1]['nick']]: true,
          [users[2]['nick']]: true,
        },
        texto: "Transporte desde el hotel hasta el centro de Ámserdam.",
        precio: 5
      },
      {
        id: 3, 
        usuarios: {
          [users[0]['nick']]: true,
          [users[1]['nick']]: true,
          [users[2]['nick']]: true,
        },
        texto: "Comida en el chino",
        precio: 10
      },
      {
        id: 4, 
        usuarios: {
          [users[0]['nick']]: true,
          [users[1]['nick']]: true,
          [users[2]['nick']]: true,
        },
        texto: "Visita al museo.",
        precio: 15
      }
    );

    this.currentExpenses = this.groupExpenses;

    this.currentExpenses.forEach(expense => {
      this.total += expense.precio;
    });
    
    this.loaded = true;
  }

  changeExpenses(type) {
    if(type == 'Group') {
      this.currentExpenses = this.groupExpenses;
    } else {
      this.currentExpenses = this.privateExpenses;
    }

    this.total = 0;

    this.currentExpenses.forEach(expense => {
      this.total += expense.precio;
    });
  }

  toggleCheck(n) {
    this.currentExpenses[n].usuarios[this.nickLogged] = !this.currentExpenses[n].usuarios[this.nickLogged];
  }
}
