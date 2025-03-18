import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InputBhComponent } from '../../../components/input-bh/input-bh.component';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ButtonBhComponent } from '../../../components/button-bh/button-bh.component';
import { SpinnerBhComponent } from '../../../components/spinner-bh/spinner-bh.component';
import * as dadoAnimado from '../../../assets/lotties/dadoAnimado.json';
import { NgIf, NgClass } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatError } from '@angular/material/form-field';

@Component({
  selector: 'login-page',
  imports: [
    InputBhComponent,
    MatCardModule,
    MatIcon,
    MatButtonModule,
    ButtonBhComponent,
    SpinnerBhComponent,
    NgIf,
    ReactiveFormsModule,
    MatError,
    NgClass
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  dadoAnimado = dadoAnimado;
  showSpinner = false;

  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onLoginClick() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.showSpinner = true;
    console.log(this.loginForm.value);

    setTimeout(() => {
      this.showSpinner = false;
    }, 10000);
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  getUsernameErrorMessage() {
    const usernameControl = this.loginForm.get('username');
    if (usernameControl?.hasError('required')) {
      return 'Username is required';
    }
    if (usernameControl?.hasError('minlength')) {
      return 'Username must be at least 3 characters long';
    }
    return '';
  }

  getPasswordErrorMessage() {
    const passwordControl = this.loginForm.get('password');
    if (passwordControl?.hasError('required')) {
      return 'Password is required';
    }
    if (passwordControl?.hasError('minlength')) {
      return 'Password must be at least 6 characters long';
    }
    return '';
  }
}
