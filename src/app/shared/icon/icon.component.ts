import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styles: [
    `
      :host {
        @apply inline-flex;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent {
  @Input()
  public extendedClasses = '';

  @Input({ required: true })
  public icon: string;

  @Output()
  public iconClick = new EventEmitter<void>();

  public clickHandler(): void {
    this.iconClick.emit();
  }
}
