import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'user-row',
  templateUrl: './user-row.component.html',
  styleUrls: ['./user-row.component.scss'],
})
export class UserRowComponent implements OnInit {

  @Input() nickname;
  @Input() state;
  @Input() icon;

  constructor() { }

  ngOnInit() {}

}
