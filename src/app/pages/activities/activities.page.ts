import { Component, OnInit } from '@angular/core';
import { TripsService } from 'src/app/services/trips.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.page.html',
  styleUrls: ['./activities.page.scss'],
})
export class ActivitiesPage implements OnInit {

  activities: any;
  currentActivities: any;
  trip: any;
  loaded: boolean;
  dates: any;
  active: any;

  constructor(private route: ActivatedRoute, private router: Router, private tripsService: TripsService) {
    this.initInfo();
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
      var fecha_ini = new Date(this.trip.fecha_ini).toISOString().split('T')[0].split('-');
      var fecha_fin = new Date(this.trip.fecha_fin).toISOString().split('T')[0].split('-');

      // El mes tiene -1 porque por algún motivo el new Date le añade un mes más
      this.dates = this.getDates(new Date(+fecha_ini[0], +fecha_ini[1]-1, +fecha_ini[2]), 
                                new Date(+fecha_fin[0], +fecha_fin[1]-1, +fecha_fin[2]));

      this.active = this.dates[0];
    });
  }

  getDates(startDate, endDate) {
    var dates = [],
        currentDate = startDate,
        addDays = function(days) {
          var date = new Date(this.valueOf());
          date.setDate(date.getDate() + days);
          return date;
        };
    while (currentDate <= endDate) {
      dates.push(currentDate.toISOString());
      currentDate = addDays.call(currentDate, 1);
    }
    return dates;
  }

  changeActive(n) {
    this.active = this.dates[n];
  }


  initInfo() {
    this.activities = [];

    this.activities.push([
      { 
        titulo: 'Comprar el desayuno',
        descripcion: 'Antes de empezar el día, desayunar en un sitio barato (un super)',
        hora: '10:00',
        tipo: 'compras',
        ubicacion: 'Ámsterdam',
        precio: '5',
        foto: 'https://www.shopblogger.de/blog/uploads/2009/August/zigengroesserenSupermaerkteWennmanzuAldi_____spar_westkapelle.jpg'
      },
      { 
        titulo: 'Ir a la estación y coger el tren',
        descripcion: 'Comprar los billetes antes de salir del hotel',
        hora: '11:00',
        tipo: 'transporte',
        ubicacion: 'Ámsterdam',
        precio: '15',
        foto: 'https://www.victorstravels.com/wp-content/uploads/2017/12/cheap-train-tickets-netherlands.jpg'
      },
      {
        titulo: 'Visitar los molinos de Zaanse Schan',
        descripcion: 'Llevar comida para almorzar',
        hora: '11:30',
        tipo: 'explorar',
        ubicacion: 'Zaanse Schan',
        precio: '',
        foto: 'https://cdn.getyourguide.com/img/tour_img-1839472-146.jpg'
      },
      { 
        titulo: 'Comer en un lugar de la zona',
        descripcion: '',
        hora: '14:00',
        tipo: 'comer',
        ubicacion: 'Zaanse Schan',
        precio: '15',
        foto: 'https://static.dezeen.com/uploads/2016/07/bar-botanique-studio-modijefsky-amsterdam-dutch-netherlands-green-forest-rainforest-tropical-foliage-_dezeen_1568_11.jpg'
      }
    ]);


    this.currentActivities = this.activities[0];
    
  }


}
