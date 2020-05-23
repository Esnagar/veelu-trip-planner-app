import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'upload-cover',
  templateUrl: './upload-cover.component.html',
  styleUrls: ['./upload-cover.component.scss'],
})
export class UploadCoverComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.getElementById('uploader').addEventListener('change', this.getImage, true);
  }

  getImage () {
    var file = document.getElementById('uploader').files[0];
    var reader = new FileReader();
    var background = document.getElementById('background');
    reader.onloadend = function () {
      background.style.backgroundImage = "url(" + reader.result + ")";
      background.style.backgroundSize = "cover";
      background.style.backgroundPosition = "center";
      document.getElementById('camara').style.display = "none";
      document.getElementById('text').style.display = "none";
    }
  
    if (file) {
      reader.readAsDataURL(file);
    } else {
    }
  }
}
