import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'privacy-button',
  templateUrl: './privacy-button.component.html',
  styleUrls: ['./privacy-button.component.scss'],
})
export class PrivacyButtonComponent implements OnInit {

  @Input() active: string;
  @Output() filterChanged = new EventEmitter();

  ngOnInit() {
    this.active = 'Group';
  }

  changeActive(nombre) {
    this.active = nombre;
    this.filterChanged.emit(this.active);
  }

}
