import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'small-button',
  templateUrl: './small-button.component.html',
  styleUrls: ['./small-button.component.scss'],
})
export class SmallButtonComponent implements OnInit {

  @Input() textButton;
  button: string[];
  
  constructor() { }

  ngOnInit() {
    switch (this.textButton) {
      case 'accepted':
        this.button = ['Unfollow', 'void'];
        break;

      case 'no-friend':
        this.button = ['Follow', 'pink'];
        break;

      case 'pending':
        this.button = ['Pending', 'void'];
        break;

      default:
        break;
    }
  }

}
