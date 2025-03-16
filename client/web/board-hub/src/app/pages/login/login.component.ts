import { Component } from '@angular/core';
import { InputBhComponent } from '../../../components/input-bh/input-bh.component';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-login-page',
  imports: [InputBhComponent, MatCardModule, MatIcon],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent { }
