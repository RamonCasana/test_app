import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public formLogin: FormGroup;
  public isSubmitted = false;

  constructor(private fb: FormBuilder) {
    this.formLogin = this.fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.email,
        ],
      ],
      password: [
        '',
        [Validators.required, Validators.minLength(5)],
      ],
      remember: [false],
    });
  }

  get email(): AbstractControl {
    return this.formLogin.controls.email;
  }

  get password(): AbstractControl {
    return this.formLogin.controls.password;
  }

  public error(errors: AbstractControl): boolean {
    return !!errors.errors && (this.isSubmitted || errors.dirty);
  }

  public submit() {
    if (this.formLogin.invalid) {
      this.isSubmitted = true;
      return;
    }
    console.log('OK!', this.formLogin.value);
  }
}
