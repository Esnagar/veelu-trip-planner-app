import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'trip-thumbnail',
  templateUrl: './trip-thumbnail.component.html',
  styleUrls: ['./trip-thumbnail.component.scss'],
})
export class TripThumbnailComponent implements OnInit {

  @Input() info: any;

  constructor() { }

  ngOnInit() {
  }

}
