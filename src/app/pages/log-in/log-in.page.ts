import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.page.html',
  styleUrls: ['./log-in.page.scss'],
})
export class LogInPage implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({ email: ['', [Validators.required, Validators.email]],
                                password: ['', Validators.required]
                              });
  }

  ngOnInit() {
  }

  checkForm(data) {
    
  }

}
