import { Component } from '@angular/core';

@Component({
  selector: 'filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent {

  filtros: any;
  active: String;

  constructor() {
    this.filtros = [
      {nombre: 'All', funcion: 'ñorda'},
      {nombre: 'Current', funcion: 'ñorda'},
      {nombre: 'Upcoming', funcion: 'ñorda'},
      {nombre: 'Past', funcion: 'ñorda'}
    ]

    this.active = 'All';
  }

  changeActive(nombre) {
    this.active = nombre;
  }
}
