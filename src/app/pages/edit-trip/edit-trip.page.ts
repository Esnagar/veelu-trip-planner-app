import { Component, OnInit, SecurityContext } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Trip, TripsService } from 'src/app/services/trips.service';
import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase/app';
import { AngularFireStorage } from '@angular/fire/storage/';
import { Storage } from '@ionic/storage';

const { Camera } = Plugins;

const MEDIA_FOLDER_NAME = 'my_media';

@Component({
  selector: 'app-edit-trip',
  templateUrl: './edit-trip.page.html',
  styleUrls: ['./edit-trip.page.scss'],
})

export class EditTripPage implements OnInit {

  form: FormGroup;
  someError: boolean;
  errorMessage: string;
  trip: Trip;
  photo: string;
  blobData: Blob;
  picToStorage: string;
  loaded: boolean;
  photoChanged: boolean;

  constructor(private fb: FormBuilder, 
              public toastController: ToastController, 
              private tripsService: TripsService,
              private afStorage: AngularFireStorage,
              private storage: Storage,
              private router: Router, private route: ActivatedRoute) {
    
    this.someError = false;  

    this.form = this.fb.group({
      titulo: ['', Validators.required],
      descripcion: [''],
      fecha_ini: ['', Validators.required],
      fecha_fin: ['', Validators.required],
      foto: ['']
    });
  }

  /* ESTO ES CON CAPACITOR */
  async selectPicture() {
    const image = await Plugins.Camera.getPhoto({
      quality: 30,
      allowEditing: false,
      resultType: CameraResultType.Base64,
      source: CameraSource.Photos
    });

    this.blobData = this.b64toBlob(image.base64String, `image/${image.format}`);

    this.photo = 'data:image/' + image.format + ';base64,' + image.base64String;

    var cover = document.getElementById('background');

    cover.style.backgroundImage = 'url(' + this.photo + ')';
    cover.style.backgroundSize = 'cover';
    cover.style.backgroundPosition = 'center';

    document.getElementById('camara').classList.add('hidden');
    document.getElementById('text').classList.add('hidden');


    const randomId = Math.random().toString(36).substring(2, 8);
    this.picToStorage = `tripCovers/${new Date().getTime()}_${randomId}.${image.format}`;
    this.photoChanged = true;
  }

  ngOnInit () {
    this.loaded = false;
    this.photoChanged = false;

    this.route.paramMap.subscribe(params => {
      if (history.state.navigationId !== 'undefined' && history.state.navigationId !== 1) {
        this.trip = history.state[0];

        this.form.setValue({
          titulo: this.trip.titulo,
          descripcion: this.trip.descripcion,
          fecha_ini: this.trip.fecha_ini,
          fecha_fin: this.trip.fecha_fin,
          foto: this.trip.foto
        });
        this.loaded = true;

      } else {
        let id = this.router.url.split('/')[2];
        this.tripsService.getTrip(id).subscribe(trip => {
          this.trip = trip;
          this.trip.id = id;
          this.form.setValue({
            titulo: this.trip.titulo,
            descripcion: this.trip.descripcion,
            fecha_ini: this.trip.fecha_ini,
            fecha_fin: this.trip.fecha_fin,
            foto: this.trip.foto
          });
          this.loaded = true;      
        });
      }
    });
  }

  ngAfterViewInit () {
    var cover = document.getElementById('background');

    cover.style.backgroundImage = 'url(' + this.trip.foto + ')';
    cover.style.backgroundSize = 'cover';
    cover.style.backgroundPosition = 'center';

    document.getElementById('camara').classList.add('hidden');
    document.getElementById('text').classList.add('hidden');
  }

  b64toBlob(b64Data, contentType = '', sliceSize = 512) {
    const byteCharacters = atob(b64Data);
    const byteArrays = [];
 
    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);
 
      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }
 
      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }
 
    const blob = new Blob(byteArrays, { type: contentType });
    return blob;
  }

  checkForm(data) {
    if (data.fecha_fin < data.fecha_ini) {
      this.errorMessage = 'End date must be higher than start date.';
      this.someError = true;
    }

    if (data.titulo == '' || data.fecha_ini == '' || data.fecha_fin == '') {
      this.errorMessage = 'Please fill all required fields.'
      this.someError = true;
    }

    if (this.someError) {
      this.showToast();
      this.someError = false;
    } else {
      this.editTrip(data);
    }
  }

  async showToast () {
    const toast = await this.toastController.create({
      message: this.errorMessage,
      cssClass: "toast-warning",
      duration: 1000
    });
    toast.present();
  }

  async editTrip(data) {
    this.trip = data;
    this.trip.titulo_lc = data.titulo.toLowerCase();
    
    var urlPhoto, idAux, photoAux, nicknameAux;

    if (this.photo != undefined && this.photo != null && this.photo != '' && this.photoChanged) {
      await this.afStorage.upload(this.picToStorage, this.blobData).then(async res => {
        
        const storageRef = firebase.storage().ref();
    
        await storageRef.child(this.picToStorage).getDownloadURL().then(function(url) {
          urlPhoto = url;
          this.trip.foto = urlPhoto;
        })  
      });
    } else if(this.photoChanged) { // le metemos una foto por defecto
      urlPhoto = 'https://firebasestorage.googleapis.com/v0/b/certain-catcher-256911.appspot.com/o/default%2Fdefault-thumbnail.png?alt=media&token=47710b83-3a7f-4b50-8eff-fcf70136969d';
      this.trip.foto = urlPhoto;
    }


    var thisTrip = this.trip;
    this.trip.id = this.router.url.split('/')[2];
    
    this.tripsService.updateTrip(thisTrip).then(trip => {
      this.router.navigate(['/trip/' + thisTrip.id], { state: thisTrip }); // le pasamos trip por parametro
    });

  }
}
