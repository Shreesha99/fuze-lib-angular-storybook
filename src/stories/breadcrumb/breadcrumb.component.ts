import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-breadcrumb',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav>
      <ol class="breadcrumb">
        <li
          *ngFor="let item of items; let last = last"
          [ngClass]="{ active: last }"
        >
          <a *ngIf="!last" [href]="item.link">{{ item.label }}</a>
          <span *ngIf="last">{{ item.label }}</span>
        </li>
      </ol>
    </nav>
  `,
  styleUrls: ['./breadcrumb.css'], // Reference the external CSS file here
})
export class BreadcrumbComponent {
  /** Array of breadcrumb items */
  @Input() items: { label: string; link: string }[] = [];
}
