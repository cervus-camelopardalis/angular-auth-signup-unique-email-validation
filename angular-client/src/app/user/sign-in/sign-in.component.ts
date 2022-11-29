import { Component, OnInit } from '@angular/core';

import { UntypedFormGroup } from '@angular/forms';
import { UntypedFormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  hide = true;

  formSignIn = new UntypedFormGroup({
    "email": new UntypedFormControl("", Validators.required),
    "password": new UntypedFormControl("", Validators.required),
  });
    
  onSubmitSignIn() {
    console.log("Sign in: Reactive form submitted ✓");
    console.log(this.formSignIn.value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
