import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

interface AccordionItem {
  title: string;
  content: string;
  isOpen: boolean;
}

@Component({
  selector: 'lib-accordion',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="accordion">
      <div
        *ngFor="let item of accordionItems; let i = index"
        class="accordion-item"
        [class.open]="item.isOpen"
      >
        <div class="accordion-header" (click)="toggle(item)">
          <h5>{{ item.title }}</h5>
        </div>
        <div *ngIf="item.isOpen" class="accordion-body">
          <p>{{ item.content }}</p>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./accordion.css'],
})
export class AccordionComponent implements OnChanges {
  /** Number of accordion items */
  @Input() itemCount: number = 3; // Default to 3 items
  @Input() isOpen: boolean = false; // Whether to open each item by default

  /** Accordion items */
  accordionItems: AccordionItem[] = [];

  ngOnChanges(changes: SimpleChanges) {
    if (changes['itemCount'] || changes['isOpen']) {
      this.generateAccordionItems();
    }
  }

  /** Generate items dynamically based on itemCount and isOpen */
  private generateAccordionItems() {
    this.accordionItems = Array.from(
      { length: this.itemCount },
      (_, index) => ({
        title: `Item ${index + 1}`,
        content: `Content for Item ${index + 1}`,
        isOpen: this.isOpen,
      })
    );
  }

  /** Toggle the visibility of the accordion item */
  toggle(item: AccordionItem) {
    item.isOpen = !item.isOpen;
  }
}
