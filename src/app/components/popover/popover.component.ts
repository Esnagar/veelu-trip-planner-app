import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { NavParams } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: "popover",
  templateUrl: "./popover.component.html",
  styleUrls: ["./popover.component.scss"],
})
export class PopoverComponent implements OnInit {

  sectionName: string;
  data: any;
  @Input() public onClick = () => {};

  constructor(public navParams: NavParams, private router: Router) {
    this.sectionName = this.navParams.get('sectionName');
    this.data = this.navParams.get('data');
  }

  redirectToEdit() {
    this.onClick();
    this.router.navigate(['/edit-' + this.sectionName + '/' + this.data[0].id], { state: this.data });
  }

  ngOnInit() { }
}
