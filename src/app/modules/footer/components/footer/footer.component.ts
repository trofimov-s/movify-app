import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `<footer>FOOTEr</footer>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {}
