import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({ nickname: ['', Validators.required],
                                email: ['', [Validators.required, Validators.email]],
                                password: ['', Validators.required]
                              });
  }

  ngOnInit() {
  }

  checkForm(data) {
    
  }

}
