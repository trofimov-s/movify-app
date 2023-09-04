import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-logo-img',
  templateUrl: './logo-img.component.html',
  styleUrls: ['./logo-img.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogoImgComponent {
  @Input()
  public classes = 'h-8';
}
