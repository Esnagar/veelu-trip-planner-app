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
    this.currentActivities = this.activities[n];
  }


  initInfo() {
    this.activities = [];

    this.activities.push([
      {
        id: 1, 
        titulo: 'Desayunar en la cafetería del hotel',
        descripcion: 'También podemos comprar algo en el supermercado para desayunar',
        hora: '10:00',
        tipo: 'eating',
        ubicacion: 'Ámsterdam',
        precio: '',
        foto: 'https://firebasestorage.googleapis.com/v0/b/certain-catcher-256911.appspot.com/o/8GOcnD8dzwMB2IhIqCRx%2Fcomida.jpg?alt=media&token=c4fdfe6f-9df7-41af-9004-6b1a42ef1199'
      },
      {
        id: 2, 
        titulo: 'Ir a la estación y coger el tren',
        descripcion: 'Comprar los billetes antes de salir del hotel',
        hora: '11:00',
        tipo: 'transport',
        ubicacion: 'Ámsterdam',
        precio: '15',
        foto: 'https://firebasestorage.googleapis.com/v0/b/certain-catcher-256911.appspot.com/o/8GOcnD8dzwMB2IhIqCRx%2Ftren.png?alt=media&token=35703f74-ab44-4e5e-abd5-0c55074d8dc2'
      },
      {
        id: 3,
        titulo: 'Visitar los molinos de Zaanse Schans',
        descripcion: 'Llevar comida para almorzar',
        hora: '11:30',
        tipo: 'explore',
        ubicacion: 'Zaanse Schans',
        precio: '',
        foto: 'https://firebasestorage.googleapis.com/v0/b/certain-catcher-256911.appspot.com/o/8GOcnD8dzwMB2IhIqCRx%2Fmolinos.jpg?alt=media&token=24ca9ddc-8dc7-4447-a05d-7869f070e5db'
      },
      {
        id: 4, 
        titulo: 'Comer en un lugar de la zona',
        descripcion: '',
        hora: '14:00',
        tipo: 'eating',
        ubicacion: 'Zaanse Schans',
        precio: '15',
        foto: 'https://firebasestorage.googleapis.com/v0/b/certain-catcher-256911.appspot.com/o/8GOcnD8dzwMB2IhIqCRx%2Fbar.jpg?alt=media&token=54ddadf5-1d0d-4154-a08d-93bb357073ff'
      },
      {
        id: 5, 
        titulo: 'Ir a la estación y coger el tren',
        descripcion: 'Volver a Ámsterdam',
        hora: '16:00',
        tipo: 'transport',
        ubicacion: 'Zaanse Schans',
        precio: '15',
        foto: 'https://firebasestorage.googleapis.com/v0/b/certain-catcher-256911.appspot.com/o/8GOcnD8dzwMB2IhIqCRx%2Ftren.png?alt=media&token=35703f74-ab44-4e5e-abd5-0c55074d8dc2'
      }
    ],[
      {
        id: 6, 
        titulo: 'Desayunar en la cafetería del hotel',
        descripcion: 'También podemos comprar algo en el supermercado para desayunar',
        hora: '9:30',
        tipo: 'eating',
        ubicacion: 'Ámsterdam',
        precio: '',
        foto: 'https://firebasestorage.googleapis.com/v0/b/certain-catcher-256911.appspot.com/o/8GOcnD8dzwMB2IhIqCRx%2Fcomida.jpg?alt=media&token=c4fdfe6f-9df7-41af-9004-6b1a42ef1199'
      },
      {
        id: 7, 
        titulo: 'Paseo por la ciudad',
        descripcion: 'Observar los edificios y las calles de Ámsterdam',
        hora: '11:00',
        tipo: 'explore',
        ubicacion: 'Ámsterdam',
        precio: '',
        foto: 'https://firebasestorage.googleapis.com/v0/b/certain-catcher-256911.appspot.com/o/8GOcnD8dzwMB2IhIqCRx%2Fpaseo%20amsterdam.jpg?alt=media&token=df61c36b-337d-4e61-9ece-56713fe3babf'
      },
      {
        id: 8,
        titulo: 'Visitar el barrio rojo',
        descripcion: 'Llevar comida para almorzar',
        hora: '12:15',
        tipo: 'explore',
        ubicacion: 'Ámsterdam',
        precio: '',
        foto: 'https://firebasestorage.googleapis.com/v0/b/certain-catcher-256911.appspot.com/o/8GOcnD8dzwMB2IhIqCRx%2Fbarrio%20rojo.jpg?alt=media&token=b77f8906-90e4-4546-9fd0-f86213d23e55'
      },
      {
        id: 9, 
        titulo: 'Viaje en barco por los canales',
        descripcion: '',
        hora: '13:00',
        tipo: 'explore',
        ubicacion: 'Ámsterdam',
        precio: '20',
        foto: 'https://firebasestorage.googleapis.com/v0/b/certain-catcher-256911.appspot.com/o/8GOcnD8dzwMB2IhIqCRx%2Fbarco.jpg?alt=media&token=3d2645d3-446d-42ee-bcb9-6124a9642eff'
      },
      {
        id: 10, 
        titulo: 'Comer en un lugar de la zona',
        descripcion: '',
        hora: '14:00',
        tipo: 'eating',
        ubicacion: 'Zaanse Schans',
        precio: '15',
        foto: 'https://firebasestorage.googleapis.com/v0/b/certain-catcher-256911.appspot.com/o/8GOcnD8dzwMB2IhIqCRx%2Fbar.jpg?alt=media&token=54ddadf5-1d0d-4154-a08d-93bb357073ff'
      }
    ]);

    this.currentActivities = this.activities[0];
  }
}
