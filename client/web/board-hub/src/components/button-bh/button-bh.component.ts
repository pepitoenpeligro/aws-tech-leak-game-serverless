import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'button-bh',
  imports: [MatButtonModule],
  templateUrl: './button-bh.component.html',
  styleUrl: './button-bh.component.scss'
})
export class ButtonBhComponent {
  @Input() label: string = 'Default';
}
