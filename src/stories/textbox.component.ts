import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-textbox',
  standalone: true,
  imports: [CommonModule],
  template: `
    <input
      type="text"
      [placeholder]="placeholder"
      [value]="value"
      [disabled]="disabled"
      [ngClass]="classes"
      [ngStyle]="{
        'border-radius': borderRadius
      }"
      (input)="onInputChange.emit($event)"
    />
  `,
  styleUrls: ['./textbox.css'],
})
export class TextboxComponent {
  /** Placeholder text for the textbox */
  @Input() placeholder = 'Enter text';

  /** Value of the textbox */
  @Input() value = '';

  /** Optional disabled state */
  @Input() disabled = false;

  /** Border radius for customization */
  @Input() borderRadius: string = '0.5em'; // Default rounding

  /** Event emitted when the value changes */
  @Output() onInputChange = new EventEmitter<Event>();

  // Dynamically calculate the input classes based on input properties
  public get classes(): string[] {
    return ['textbox'];
  }
}
