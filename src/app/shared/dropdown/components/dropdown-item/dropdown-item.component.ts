import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import { DropdownItem } from '../../models';

@Component({
  selector: 'app-dropdown-item',
  templateUrl: './dropdown-item.component.html',
  styleUrls: ['./dropdown-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownItemComponent {
  @Input({ required: true })
  public item: DropdownItem;

  @Output() public elClick = new EventEmitter<void>();

  @HostListener('click', ['$event'])
  private onClick(e: MouseEvent): void {
    e.stopPropagation();
    this.elClick.emit();
    this.item?.action();
  }
}
