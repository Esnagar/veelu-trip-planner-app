import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit{

  active: string;

  constructor() {
    this.active = "home";
  }

  ngOnInit () {
    this.active = window.location.href.split('/')[4];

    if (this.active == "trips") {
      this.active = "home";
    }

    if (this.active == "notifications") {
      this.active = "bell";
    }
    
    this.changeActive(this.active);
  }

  changeActive(name) {
    let last = (<HTMLInputElement>document.getElementById(this.active));
    let current = (<HTMLInputElement>document.getElementById(name));

    last.src = "../../../assets/icon/" + this.active + "-grey.svg";
    current.src = "../../../assets/icon/" + name + "-pink.svg";

    this.active = name;
    
  }

}
