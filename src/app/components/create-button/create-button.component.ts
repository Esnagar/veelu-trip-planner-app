import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'create-button',
  templateUrl: './create-button.component.html',
  styleUrls: ['./create-button.component.css']
})
export class CreateButtonComponent implements OnInit {

  @Input() type: string;

  constructor() { }

  ngOnInit() {
  }

}
