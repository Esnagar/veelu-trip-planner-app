import { Component, OnInit, Input } from '@angular/core';
import { FormControlName } from '@angular/forms';

@Component({
  selector: 'input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss'],
})
export class InputFormComponent implements OnInit {

  @Input() type: string;
  @Input() size: string;
  @Input() nombreForm: string;

  constructor() {
  }

  ngOnInit() {}

}
