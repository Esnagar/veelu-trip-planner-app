import { Component, OnInit } from '@angular/core';
import { Friend, FriendsService } from 'src/app/services/friends.service';
import { Storage } from '@ionic/storage';
import { ActivatedRoute, Router } from '@angular/router';
import { TripsService } from 'src/app/services/trips.service';

@Component({
  selector: 'app-travelers',
  templateUrl: './travelers.page.html',
  styleUrls: ['./travelers.page.scss'],
})
export class TravelersPage implements OnInit {

  nickLogged: string;
  iconLogged: string;
  idLogged: string;
  friends: any;
  loaded: boolean;
  trip: any;
  travelers: any;

  constructor(private storage: Storage, private friendsService: FriendsService, private tripsService: TripsService, private route: ActivatedRoute, private router: Router) {

  }

  async ngOnInit() {
    this.route.paramMap.subscribe(params => {
      if (history.state.navigationId !== 'undefined' && history.state.navigationId !== 1) {
        this.trip = history.state;
      }
    });

    this.loaded = false;
    this.travelers = [];
    var nickAux, iconAux, idAux;
    await this.storage.get('userNickname').then(nick => {
      nickAux = nick;
    })

    await this.storage.get('userPhoto').then(icon => {
      iconAux = icon;
    })

    await this.storage.get('userId').then(id => {
      idAux = id;
    })

    this.nickLogged = nickAux;
    this.iconLogged = iconAux;
    this.idLogged = idAux;

    this.friendsService.getFriends(this.nickLogged).subscribe(val => {
      this.friends = [];
      var joined = false;
      var joinedBefore = false;
      
      val.forEach(friend => {
        joined = false;
        
        if ((friend.ids[0] in this.trip.participantes && friend.ids[0] != idAux) || 
            (friend.ids[1] in this.trip.participantes && friend.ids[1] != idAux)) {
          joined = true;
          joinedBefore = true;
        }
        this.friends.push({friend, joined, joinedBefore});
      });
      this.loaded = true;
    });
  }

  toggleCheck(n, n2) {
    this.friends[n].joined = !this.friends[n].joined;
    
    if(this.friends[n].joined) {
      this.trip.participantes[this.friends[n].friend.ids[n2]] = {
        icono: this.friends[n].friend.icons[n2],
        nick: this.friends[n].friend.users[n2],
        nick_lc: this.friends[n].friend.users[n2],
        rol: "editor"
      }
    } else {
      delete this.trip.participantes[this.friends[n].friend.ids[n2]];
    }
  }

  async saveTravelers() {
    var idsParticipantes = []

    Object.keys(this.trip.participantes).forEach(function (key) {
      idsParticipantes.push(key);
    });

    this.tripsService.updateTravelers(this.trip.id, this.trip.participantes, idsParticipantes).then(trip => {
      this.router.navigate(['/trip/' + this.trip.id], { state: this.trip }); // le pasamos trip por parametro

    });
    
  }
}
