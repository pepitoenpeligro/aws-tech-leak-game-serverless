import { Component, Input } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions, LottieComponent } from 'ngx-lottie';

@Component({
  selector: 'lottie-bh',
  imports: [LottieComponent],
  templateUrl: './lottie-bh.component.html',
  styleUrl: './lottie-bh.component.scss'
})
export class LottieBhComponent {
  @Input() animationData: any;
  options: AnimationOptions = {};

  ngOnInit(): void {
    this.options = {
      animationData: this.animationData,
    };
  }

  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }

}
