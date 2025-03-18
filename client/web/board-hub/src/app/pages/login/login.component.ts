import { Component } from '@angular/core';
import { InputBhComponent } from '../../../components/input-bh/input-bh.component';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ButtonBhComponent } from '../../../components/button-bh/button-bh.component';
import { SpinnerBhComponent } from '../../../components/spinner-bh/spinner-bh.component';
import * as dadoAnimado from '../../../assets/lotties/dadoAnimado.json';
import { NgIf } from '@angular/common';

@Component({
  selector: 'login-page',
  imports: [InputBhComponent, MatCardModule, MatIcon, MatButtonModule, ButtonBhComponent, SpinnerBhComponent, NgIf],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  dadoAnimado = dadoAnimado;
  showSpinner = false;

  onLoginClick() {
    this.showSpinner = true;
    setTimeout(() => {
      this.showSpinner = false;
    }, 10000);
  }
}
