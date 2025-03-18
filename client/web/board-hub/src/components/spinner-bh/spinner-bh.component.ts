import { Component, Input } from '@angular/core';
import { LottieBhComponent } from '../lottie-bh/lottie-bh.component';
import { MatCard } from '@angular/material/card';

@Component({
  selector: 'spinner-bh',
  imports: [ LottieBhComponent, MatCard ],
  templateUrl: './spinner-bh.component.html',
  styleUrls: ['./spinner-bh.component.scss']
})
export class SpinnerBhComponent {
  @Input() spinnerAnimation: any;
}
