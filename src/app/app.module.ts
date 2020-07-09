import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { File } from '@ionic-native/file/ngx';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { ImagePicker } from '@ionic-native/image-picker/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireFunctionsModule, REGION } from '@angular/fire/functions';

import { enterAnimation } from './animations/page-transition';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, IonicModule.forRoot({}), 
    AppRoutingModule, 
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule, 
    AngularFireAuthModule, 
    AngularFireStorageModule, 
    AngularFireFunctionsModule,
    ReactiveFormsModule,
    IonicStorageModule.forRoot()
  ],
  providers: [
    StatusBar,
    SplashScreen,
    File,
    PhotoViewer,
    ImagePicker,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: REGION, useValue: 'europe-west1' },
    { provide: LOCALE_ID, useValue: 'en-UK' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
