import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-textarea',
  standalone: true,
  imports: [CommonModule],
  templateUrl: 'textarea.component.html',
  styleUrls: ['textarea.component.css'],
})
export class TextareaComponent implements OnChanges {
  @Input() backgroundColor: string = '#ffffff'; // Default white
  @Input() borderRadius: string = '5px'; // Default 5px
  @Input() width: string = '100%'; // Default 100%
  @Input() height: string = '100px'; // Default 100px
  @Input() placeholder: string = 'Enter your text here...'; // Placeholder text
  @Input() maxLength: number = 500; // Maximum character limit
  @Input() resizable: boolean = true; // Allow resizing
  @Input() textAlign: 'left' | 'center' | 'right' = 'left'; // Text alignment
  @Input() showCharCount: boolean = true; // Show character count
  textContent: string = ''; // User input content

  /** Detect changes in input properties */
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['maxLength'] && this.textContent.length > this.maxLength) {
      this.textContent = this.textContent.substring(0, this.maxLength);
    }
  }

  /** Handle text input */
  onTextInput(event: Event): void {
    const target = event.target as HTMLTextAreaElement;
    this.textContent = target.value;
  }
}
