import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-logo-txt',
  templateUrl: './logo-txt.component.html',
  styleUrls: ['./logo-txt.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogoTxtComponent {
  @Input()
  public classes = 'text-3xl';

  @Input()
  public withFlag = true;
}
