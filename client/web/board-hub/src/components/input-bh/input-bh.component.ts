import { Component, Input } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'input-bh',
  standalone: true,
  imports: [MatInputModule, MatFormFieldModule],
  templateUrl: './input-bh.component.html',
  styleUrls: ['./input-bh.component.scss']
})
export class InputBhComponent {
  @Input() labelInput: string = 'Input';
  @Input() placeholderInput: string = 'Enter value';
}
