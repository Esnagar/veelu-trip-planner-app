import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app'; 
import 'firebase/auth';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.page.html',
  styleUrls: ['./log-in.page.scss'],
})
export class LogInPage {

  form: FormGroup;

  constructor(private fb: FormBuilder, public afAuth: AngularFireAuth, 
              private toastController: ToastController, private router: Router,
              private storage: Storage) {

    this.form = this.fb.group({ email: ['', [Validators.required, Validators.email]],
                                password: ['', Validators.required]
                              });
  }

  async login(data) {
    await this.afAuth.signInWithEmailAndPassword(data.email, data.password)
        .then(async result => {
          this.storage.set('userId', result.user.uid);
          this.storage.set('userNickname', result.user.displayName);
          this.storage.set('userEmail', result.user.email);
          this.storage.set('userPhoto', result.user.photoURL);
          this.router.navigate(['/tabs/trips']);
        }).catch(error => {
          console.log(error);
          this.showToast(error.message);
        });
  }

  async showToast (message) {
    const toast = await this.toastController.create({
      message: message,
      cssClass: "toast-warning",
      duration: 1000
    });
    toast.present();
  }
}
