import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-create-trip',
  templateUrl: './create-trip.page.html',
  styleUrls: ['./create-trip.page.scss'],
})
export class CreateTripPage implements OnInit {

  form: FormGroup;
  someError: boolean;
  errorMessage: string;

  constructor(private fb: FormBuilder, public toastController: ToastController) {
    this.someError = false;

    this.form = this.fb.group({
      titulo: ['', Validators.required],
      descripcion: [''],
      fecha_ini: ['', Validators.required],
      fecha_fin: ['', Validators.required],
      foto: ['']
    });
  }

  ngOnInit() {
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
}