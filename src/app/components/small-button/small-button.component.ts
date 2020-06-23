import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'small-button',
  templateUrl: './small-button.component.html',
  styleUrls: ['./small-button.component.scss'],
})
export class SmallButtonComponent implements OnInit {

  @Input() textButton;
  button: string[];
  
  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.textButton.currentValue != null) {
      this.textButton = changes.textButton.currentValue;
      this.initButton(this.textButton);
    }
  }

  ngOnInit() {
    this.initButton(this.textButton);
  }

  initButton(text) {
    switch (text) {
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
