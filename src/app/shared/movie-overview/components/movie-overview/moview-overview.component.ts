import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-moview-overview',
  templateUrl: './moview-overview.component.html',
  styleUrls: ['./moview-overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MoviewOverviewComponent {
  @Input()
  public title: string;
}
