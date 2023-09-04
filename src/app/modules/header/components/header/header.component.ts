import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `<header>HEADER</header>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {}
