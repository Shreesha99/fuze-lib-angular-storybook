import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-dropdown-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="dropdown">
      <button
        class="lib-dropdown"
        (click)="toggleDropdown()"
        [ngClass]="{ active: isOpen }"
      >
        {{ selectedItem || placeholder }}
        <span class="caret"></span>
      </button>
      <ul *ngIf="isOpen" class="dropdown-menu">
        <li
          *ngFor="let item of items"
          (click)="selectItem(item)"
          [ngClass]="{ 'dropdown-item': true, selected: item === selectedItem }"
        >
          {{ item }}
        </li>
      </ul>
    </div>
  `,
  styleUrls: ['dropdownlist.css'],
})
export class DropdownListComponent {
  /** List of items to display in the dropdown */
  @Input() items: string[] = [];

  /** Selected item */
  @Input() selectedItem: string | null = null;

  /** Placeholder text when no item is selected */
  @Input() placeholder: string = 'Select an option';

  /** Emits the selected item */
  @Output() onSelect = new EventEmitter<string>();

  @Input() isOpen = false;

  /** Toggle the visibility of the dropdown */
  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  /** Select an item and emit the event */
  selectItem(item: string) {
    this.selectedItem = item;
    this.onSelect.emit(item);
    this.isOpen = false; // Close dropdown after selection
  }
}
