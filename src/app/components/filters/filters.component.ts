import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent {

  filtros: any;
  @Input() active: String;
  @Output() filterChanged = new EventEmitter();

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
    this.filterChanged.emit(this.active);
  }
}
