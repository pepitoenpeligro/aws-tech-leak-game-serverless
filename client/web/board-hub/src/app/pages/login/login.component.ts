import { Component } from '@angular/core';
import { InputBhComponent } from '../../../components/input-bh/input-bh.component';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ButtonBhComponent } from '../../../components/button-bh/button-bh.component';

@Component({
  selector: 'app-login-page',
  imports: [InputBhComponent, MatCardModule, MatIcon, MatButtonModule, ButtonBhComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  onLoginClick() {
    console.log('Login button clicked');
  }
}
