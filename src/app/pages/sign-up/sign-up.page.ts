import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app'; 
import 'firebase/auth';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage {

  form: FormGroup;

  constructor(private fb: FormBuilder, public afAuth: AngularFireAuth, public toastController: ToastController) {
    this.form = this.fb.group({ email: ['', [Validators.required, Validators.email]],
                                password: ['', Validators.required]});
  }

  googleSingUp () {
    this.afAuth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  async signUp(data) {
    await this.afAuth.createUserWithEmailAndPassword(data.email, data.password)
        .then(result => {
          console.log(result);
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
