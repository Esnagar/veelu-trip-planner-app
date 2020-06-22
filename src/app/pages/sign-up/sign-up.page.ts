import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app'; 
import 'firebase/auth';
import { ToastController } from '@ionic/angular';
import { UsersService, User } from 'src/app/services/users.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage {

  form: FormGroup;
  user: User;

  constructor(private fb: FormBuilder, public afAuth: AngularFireAuth, public toastController: ToastController, 
              private usersService: UsersService, private router: Router, private storage: Storage) {
    
    this.form = this.fb.group({ email: ['', [Validators.required, Validators.email]],
                                password: ['', Validators.required]});
  }

  googleSignUp () {
    this.afAuth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  async signUp(data) {
    await this.afAuth.createUserWithEmailAndPassword(data.email, data.password)
      .then(async result => {
        this.createUser(result.user.uid, data.email.split('@')[0]);

        await result.user.updateProfile({
          displayName: data.email.split('@')[0],
          photoURL: 'https://vignette.wikia.nocookie.net/shinchan/images/7/70/Misae_Nohara.jpg/revision/latest/scale-to-width-down/340?cb=20161201162356&path-prefix=es'
        })

        this.storage.set('userId', result.user.uid);
        this.storage.set('userNickname', result.user.displayName);
        this.storage.set('userEmail', result.user.email);
        this.storage.set('userPhoto', result.user.photoURL);

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

  createUser(idUser, nickname) {
    this.user = {
      id: idUser,
      nick: nickname,
      nick_lc: nickname.toLowerCase(),
      icono: 'https://firebasestorage.googleapis.com/v0/b/certain-catcher-256911.appspot.com/o/default%2Fdefault-icon.png?alt=media&token=c2421962-00f4-406b-895f-d2e001e7a88b'
    };

    this.usersService.createUser(this.user).then(trip => {
      this.router.navigate(['/tabs/trips']);
    });
  }
}
