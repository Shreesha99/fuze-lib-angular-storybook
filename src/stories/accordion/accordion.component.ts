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
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css'],
})
export class AccordionComponent implements OnChanges {
  @Input() itemCount!: number; // Mandatory input
  @Input() backgroundColor!: string; // Mandatory input
  @Input() accordionBorderRadius: string = '0px'; // Default 0px
  @Input() itemBorderRadius: string = '5px'; // Default 5px
  @Input() width: string = '100%'; // Default 100%
  @Input() accordionHeight: string = 'auto'; // Overall accordion height
  @Input() itemHeight: string = 'auto'; // Individual item height
  @Input() itemGap: string = '10px'; // Gap between items
  @Input() isOpen: boolean = false; // Default false

  accordionItems: AccordionItem[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['itemCount'] || changes['isOpen']) {
      this.generateAccordionItems();
    }
  }

  /** Generate accordion items dynamically */
  private generateAccordionItems(): void {
    this.accordionItems = Array.from(
      { length: this.itemCount },
      (_, index) => ({
        title: `Item ${index + 1}`,
        content: `Content for Item ${index + 1}`,
        isOpen: this.isOpen,
      })
    );
  }

  /** Toggle accordion item open/close */
  toggle(item: AccordionItem): void {
    item.isOpen = !item.isOpen;
  }
}
