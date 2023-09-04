import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  template: `
    <app-header class="container" />
    <main class="container">
      <ng-content></ng-content>
    </main>
    <app-footer class="container" />
  `,
})
export class LayoutComponent {}
