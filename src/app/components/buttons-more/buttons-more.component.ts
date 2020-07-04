import { Component, OnInit, Input } from '@angular/core';
import { PopoverComponent } from '../popover/popover.component';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'buttons-more',
  templateUrl: './buttons-more.component.html',
  styleUrls: ['./buttons-more.component.scss'],
})
export class ButtonsMoreComponent implements OnInit {

  @Input() type: string;
  @Input() sectionName: string;
  @Input() data: any;

  constructor(public popoverController: PopoverController) {}

  async showOptions(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      cssClass: "custom-popover",
      translucent: true,
      componentProps: {
        "sectionName": this.sectionName, 
        "data": this.data,     
        onClick: () => {
          popover.dismiss();
        }
      }
    });
    return await popover.present();
  }
  
  ngOnInit() {}

}
