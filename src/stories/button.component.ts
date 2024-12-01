import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      type="button"
      (click)="onClick.emit($event)"
      [ngClass]="classes"
      [ngStyle]="{
        'background-color': backgroundColor,
        'border-radius': borderRadius
      }"
      [disabled]="disabled"
    >
      {{ label }}
    </button>
  `,
  styleUrls: ['./button.css'],
})
export class ButtonComponent {
  /** Is this the principal call to action on the page? */
  @Input() primary = false;

  /** What background color to use */
  @Input() backgroundColor?: string;

  /** How large should the button be? */
  @Input() size: 'small' | 'medium' | 'large' = 'medium';

  /** Button contents */
  @Input() label = 'Button';

  /** Optional click handler */
  @Output() onClick = new EventEmitter<Event>();

  /** Optional disabled state */
  @Input() disabled = false;

  /** Optional border radius */
  @Input() borderRadius?: string; // Default border radius

  // Dynamically calculate the button classes based on input properties
  public get classes(): string[] {
    const mode = this.primary ? 'lib-button--primary' : 'lib-button--secondary';
    return ['lib-button', `lib-button--${this.size}`, mode];
  }
}
