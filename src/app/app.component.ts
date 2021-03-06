import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { Plugins } from '@capacitor/core';
const { SplashScreen } = Plugins

import { StatusBar } from '@ionic-native/status-bar/ngx';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    SplashScreen.hide();
    
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
    });
  }
}
