import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TripsService } from 'src/app/services/trips.service';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';

@Component({
  selector: 'app-files',
  templateUrl: './files.page.html',
  styleUrls: ['./files.page.scss'],
})
export class FilesPage implements OnInit {

  loaded: boolean;
  trip: any;
  files: any;

  constructor(private photoViewer: PhotoViewer, private route: ActivatedRoute, private router: Router, private tripsService: TripsService) {
  }

  async ngOnInit() {
    this.loaded = false;

    this.route.paramMap.subscribe(params => {
      if (history.state.navigationId !== 'undefined' && history.state.navigationId !== 1) {
        this.trip = history.state;
        this.initInfo();

      } else {
        let id = this.router.url.split('/')[2];
        this.tripsService.getTrip(id).subscribe(trip => {
          this.trip = trip;
          this.trip.id = id;
          this.initInfo();
        });
      }
    });
  }

  abrirFoto(file) {
    this.photoViewer.show(file.miniatura, file.texto);
  }

  initInfo() {
    this.files = [];

    this.files.push(
      {
        id: 1, 
        carpeta: true,
        texto: "Fotos Maastricht",
        miniatura: "../../../assets/folder.svg",
        archivos: [
          {
            texto: "barriorojo1",
            miniatura: "https://firebasestorage.googleapis.com/v0/b/certain-catcher-256911.appspot.com/o/Gco3WVprtc33rHKpENpa%2FAmsterdam-Red-Light-District.jpg?alt=media&token=10de3759-d6a5-4fc6-b096-8bdda5d62a7b"
          },
          {
            texto: "barriorojo2",
            miniatura: "https://firebasestorage.googleapis.com/v0/b/certain-catcher-256911.appspot.com/o/Gco3WVprtc33rHKpENpa%2Fbarrio-rojo-holanda.png?alt=media&token=637caa64-cf66-4e13-a73d-45be3112d4b8"
          }
        ]
      },
      {
        id: 2, 
        carpeta: true,
        texto: "Billetes de avión",
        miniatura: "../../../assets/folder.svg"
      },
      {
        id: 3, 
        carpeta: false,
        texto: "Zaanse Schans",
        miniatura: "https://firebasestorage.googleapis.com/v0/b/certain-catcher-256911.appspot.com/o/Gco3WVprtc33rHKpENpa%2Fzaanse%20schans.jpg?alt=media&token=56f26f86-4cbd-4196-9102-d0cc19087fd9"
      },
      {
        id: 4, 
        carpeta: false,
        texto: "foto casas holanda",
        miniatura: "https://firebasestorage.googleapis.com/v0/b/certain-catcher-256911.appspot.com/o/Gco3WVprtc33rHKpENpa%2Fque-hacer-amsterdam-goeuro-750x500.jpg?alt=media&token=000c0949-4a75-4ae4-9e71-6451c95aef16"
      },
      {
        id: 5, 
        carpeta: false,
        texto: "canal_amsterdam",
        miniatura: "https://firebasestorage.googleapis.com/v0/b/certain-catcher-256911.appspot.com/o/Gco3WVprtc33rHKpENpa%2F68467_fullimage_amsterdam_canal2_1360x.jpg?alt=media&token=135dbf1b-cfd0-445e-b92e-62d58e26fa82"
      }
    );

    this.loaded = true;
  }
}
