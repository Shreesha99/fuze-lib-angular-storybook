import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-avatar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="avatar" [ngStyle]="{ 'width.px': size, 'height.px': size }">
      <img
        *ngIf="imageUrl"
        [src]="imageUrl"
        [alt]="name"
        class="avatar-image"
      />
      <span *ngIf="!imageUrl" class="avatar-placeholder">{{
        name.charAt(0)
      }}</span>
    </div>
  `,
  styleUrls: ['./avatar.css'], // Link to external CSS
})
export class AvatarComponent {
  @Input() imageUrl: string | null = null;
  @Input() name: string = '';
  @Input() size: number = 40;
}
