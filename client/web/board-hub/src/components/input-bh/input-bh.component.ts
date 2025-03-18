import { Component, Input, forwardRef } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'input-bh',
  standalone: true,
  imports: [MatInputModule, MatFormFieldModule],
  templateUrl: './input-bh.component.html',
  styleUrls: ['./input-bh.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputBhComponent),
      multi: true,
    },
  ],
})
export class InputBhComponent implements ControlValueAccessor {
  @Input() labelInput: string = 'Input';
  @Input() placeholderInput: string = 'Enter value';
  @Input() type: string = 'text';

  value: string = '';
  onChange: (value: string) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  onInputChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.value = inputElement.value;
    this.onChange(this.value);
  }
}
