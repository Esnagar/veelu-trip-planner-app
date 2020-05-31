import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'arrow-back',
  templateUrl: './arrow-back.component.html',
  styleUrls: ['./arrow-back.component.scss'],
})
export class ArrowBackComponent implements OnInit {

  @Input() type: any;

  constructor() { }

  ngOnInit() {}

}
