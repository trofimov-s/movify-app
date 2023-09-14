import { ConnectionPositionPair } from '@angular/cdk/overlay';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Dropdown } from '../../models';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownComponent {
  @Input({ required: true })
  public dropdown: Dropdown;

  public isOpen = false;
  public positionPairs: ConnectionPositionPair[] = [
    {
      offsetX: 0,
      offsetY: 6,
      originX: 'center',
      originY: 'bottom',
      overlayX: 'center',
      overlayY: 'top',
    },
  ];

  public open(): void {
    this.isOpen = !this.isOpen;
  }

  public close(): void {
    this.isOpen = false;
  }
}
